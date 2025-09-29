import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  language: "fr" | "ar";
  onLanguageChange: (lang: "fr" | "ar") => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    fr: [
      { name: "Accueil", path: "/" },
      { name: "À Propos", path: "/about" },
      { name: "Activités", path: "/activities" },
      { name: "Galerie", path: "/gallery" },
      { name: "Actualités", path: "/news" },
      { name: "Partenaires", path: "/partners" },
      { name: "Faire un Don", path: "/donate" },
      { name: "Contact", path: "/contact" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
      { name: "أنشطتنا", path: "/activities" },
      { name: "المعرض", path: "/gallery" },
      { name: "الأخبار", path: "/news" },
      { name: "الشركاء", path: "/partners" },
      { name: "تبرع", path: "/donate" },
      { name: "اتصل بنا", path: "/contact" },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div className="hidden md:block">
              <p className="font-bold text-lg text-foreground">
                {language === "fr" ? "Association Imlil" : "جمعية إمليل"}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === "fr" ? "Développement & Coopération" : "التنمية و التعاون"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems[language].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className={language === "ar" ? "font-arabic" : ""}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === "fr" ? "FR" : "AR"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onLanguageChange("fr")}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange("ar")} className="font-arabic">
                  🇲🇦 العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top">
            <div className="flex flex-col space-y-2">
              {navItems[language].map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
