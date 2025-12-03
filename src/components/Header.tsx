import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

// Import da logo
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Rede Credenciada", href: "/rede-credenciada" },
    { title: "Planos", href: "/planos" },
    { title: "FAQ", href: "/faq" },
    { title: "Quem Somos", href: "/quem-somos" },
    { title: "Seja um Parceiro", href: "/seja-parceiro" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex h-20 items-center justify-between 
        bg-transparent backdrop-blur-sm">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Dim+ Saúde"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <a
            href="https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/site/paginaInicial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Área do Cliente
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Espaço extra para separar o hero do header fixo */}
      <div className="h-20"></div>
    </header>
  );
};

export default Header;
