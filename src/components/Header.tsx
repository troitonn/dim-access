import { useState, useRef } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const consultas = [
  "Alergologia", "Angiologia", "Cardiologia", "Dermatologia", "Endocrinologia",
  "Fonoaudiologia", "Geriatria", "Gastroenterologia", "Ginecologia", "Hebiatria",
  "Hematologia", "Infectologia", "Infectologia Pediátrica", "Massoterapia",
  "Neurologia", "Neurologia Pediátrica", "Neurocirurgião", "Nutrologia", "Nutrição",
  "Oftalmologia", "Otorrinolaringologia", "Ortopedia", "Pediatria", "Pneumologia",
  "Pneumologia Pediátrica", "Psiquiatria", "Psicologia", "Reumatologia", "Urologia"
];

const toSlug = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/g, "");

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultasOpen, setConsultasOpen] = useState(false);
  
  // Estado para controlar o accordion no mobile (mantido do último ajuste)
  const [mobileConsultasOpen, setMobileConsultasOpen] = useState(false); 

  // Delay para fechar menu desktop
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openConsultas = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setConsultasOpen(true);
  };

  const closeConsultas = () => {
    timeoutRef.current = setTimeout(() => {
      setConsultasOpen(false);
    }, 200);
  };

  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Rede Credenciada", href: "/rede-credenciada" },
    { title: "Planos", href: "/planos" },
    { title: "Consultas", dropdown: true },
    { title: "Quem Somos", href: "/quem-somos" },
    {
      title: "Seja um Parceiro",
      external: true,
      href: "https://wa.me/5511995193094"
    },
    {
      title: "Área do Cliente",
      external: true,
      href: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/site"
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex h-20 items-center justify-between bg-transparent backdrop-blur-sm">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Dim+ Saúde" className="h-10 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key="consultas-menu"
                className="relative text-sm font-medium text-white/90 hover:text-white cursor-pointer select-none"
                onMouseEnter={openConsultas}
                onMouseLeave={closeConsultas}
              >
                <div className="flex items-center gap-1">
                  Consultas <ChevronDown size={16} />
                </div>

                {consultasOpen && (
                  <div
                    // ALTERAÇÃO AQUI: Trocado 'left-0' por 'right-0'
                    className="absolute right-0 mt-3 bg-white text-gray-900 rounded-md shadow-xl p-6 grid grid-cols-3 gap-3 z-50 w-[600px]"
                    onMouseEnter={openConsultas}
                    onMouseLeave={closeConsultas}
                  >
                    {consultas.map((item) => (
                      <a
                        key={item}
                        href={`https://www.dimeg.com.br/consultas/${toSlug(item)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* MOBILE MENU */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] overflow-y-auto">
            <nav className="flex flex-col space-y-4 mt-8 pb-10">

              {menuItems.map((item) =>
                item.dropdown ? (
                  <div key="consultas-mobile" className="border-b border-gray-100 pb-2">
                    {/* Botão de Expandir/Recolher */}
                    <button
                      onClick={() => setMobileConsultasOpen(!mobileConsultasOpen)}
                      className="flex items-center justify-between w-full text-lg font-medium text-left py-2 hover:text-primary transition-colors focus:outline-none"
                    >
                      Consultas
                      {mobileConsultasOpen ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {/* Área da lista com Animação e Rolagem */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileConsultasOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-1 gap-3 overflow-y-auto max-h-64 pr-2 pl-2 bg-gray-50/50 rounded-md py-2">
                        {consultas.map((esp) => (
                          <a
                            key={esp}
                            href={`https://www.dimeg.com.br/consultas/${toSlug(esp)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-gray-600 font-medium hover:text-primary transition-colors block border-b border-gray-100 last:border-0 pb-1"
                          >
                            {esp}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors border-b border-transparent hover:border-gray-100 py-2"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors border-b border-transparent hover:border-gray-100 py-2"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="h-20"></div>
    </header>
  );
};

export default Header;
