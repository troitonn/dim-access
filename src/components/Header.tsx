import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const consultas = [
  "Alergologia",
  "Angiologia",
  "Cardiologia",
  "Dermatologia",
  "Endocrinologia",
  "Fonoaudiologia",
  "Geriatria",
  "Gastroenterologia",
  "Ginecologia",
  "Hebiatria",
  "Hematologia",
  "Infectologia",
  "Infectologia Pediátrica",
  "Massoterapia",
  "Neurologia",
  "Neurologia Pediátrica",
  "Neurocirurgião",
  "Nutrologia",
  "Nutrição",
  "Oftalmologia",
  "Otorrinolaringologia",
  "Ortopedia",
  "Pediatria",
  "Pneumologia",
  "Pneumologia Pediátrica",
  "Psiquiatria",
  "Psicologia",
  "Reumatologia",
  "Urologia"
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

  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Rede Credenciada", href: "/rede-credenciada" },
    { title: "Planos", href: "/planos" },
    { title: "Quem Somos", href: "/quem-somos" },

    // WhatsApp direto
    {
      title: "Seja um Parceiro",
      external: true,
      href: "https://wa.me/5511995193094"
    },

    // Área do Cliente externa
    {
      title: "Área do Cliente",
      external: true,
      href: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/site"
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex h-20 items-center justify-between 
        bg-transparent backdrop-blur-sm">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Dim+ Saúde" className="h-10 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6">

          {menuItems.map((item) =>
            item.external ? (
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

          {/* CONSULTAS DROPDOWN */}
          <div
            className="relative text-sm font-medium text-white/90 hover:text-white cursor-pointer select-none"
            onMouseEnter={() => setConsultasOpen(true)}
            onMouseLeave={() => setConsultasOpen(false)}
          >
            <div className="flex items-center gap-1">
              Consultas <ChevronDown size={16} />
            </div>

            {consultasOpen && (
              <div className="absolute left-0 mt-3 bg-white text-gray-900 rounded-md shadow-xl p-6 grid grid-cols-3 gap-3 z-50 w-[600px]">
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
        </nav>

        {/* MOBILE NAV */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-8">

              {/* Itens normais */}
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              )}

              {/* Consultas no mobile */}
              <div className="mt-6">
                <p className="font-semibold text-gray-600 mb-3">Consultas</p>
                <div className="grid grid-cols-1 gap-2">
                  {consultas.map((item) => (
                    <a
                      key={item}
                      href={`https://www.dimeg.com.br/consultas/${toSlug(item)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="h-20"></div>
    </header>
  );
};

export default Header;
