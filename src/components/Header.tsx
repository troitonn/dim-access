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
    { title: "Área do Cliente", href: "/area-cliente" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex h-24 items-center justify-between 
        bg-transparent backdrop-blur-sm">
        
        {/* LOGO MAIOR */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Dim+ Saúde"
            className="h-14 w-auto object-contain"   // AUMENTADO
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-base font-semibold text-white/90 hover:text-white transition-colors" // AUMENTADO
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-7 w-7 text-white" /> {/* ÍCONE ligeiramente maior */}
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-5 mt-10">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-foreground hover:text-primary transition-colors" // MOBILE MAIOR
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Espaço extra para separar o hero do header fixo */}
      <div className="h-24"></div>
    </header>
  );
};

export default Header;
