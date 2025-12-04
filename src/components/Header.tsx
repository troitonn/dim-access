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

    // WhatsApp direto
    {
      title: "Seja um Parceiro",
      external: true,
      href: "https://wa.me/5511995193094"
    },

    // Área do cliente externa
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
          <img
            src={logo}
            alt="Dim+ Saúde"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
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
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              )}
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
