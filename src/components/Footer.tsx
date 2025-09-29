import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FooterProps {
  language: "fr" | "ar";
}

const Footer = ({ language }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletters")
        .insert({ email: email.trim() });

      if (error) {
        throw error;
      }

      toast.success(
        language === "fr" 
          ? "Inscription réussie !" 
          : "تم التسجيل بنجاح!",
        {
          description: language === "fr"
            ? "Merci de vous être abonné à notre newsletter"
            : "شكراً لاشتراكك في نشرتنا الإخبارية"
        }
      );
      setEmail("");
    } catch (error: any) {
      toast.error(
        language === "fr" 
          ? "Erreur d'inscription" 
          : "خطأ في التسجيل",
        {
          description: error.message.includes("duplicate") 
            ? (language === "fr" ? "Cette adresse email est déjà inscrite" : "هذا البريد الإلكتروني مسجل بالفعل")
            : (language === "fr" ? "Une erreur est survenue" : "حدث خطأ")
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    fr: {
      about: "À Propos",
      aboutText: "Association de développement local et de coopération à Imider, dédiée à la préservation culturelle amazighe et au développement durable.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      rights: "Tous droits réservés.",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
    },
    ar: {
      about: "من نحن",
      aboutText: "جمعية للتنمية المحلية والتعاون في إميضر، مكرسة للحفاظ على الثقافة الأمازيغية والتنمية المستدامة.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
      legal: "البنود القانونية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },
  };

  const links = {
    fr: [
      { name: "Accueil", path: "/" },
      { name: "À Propos", path: "/about" },
      { name: "Activités", path: "/activities" },
      { name: "Actualités", path: "/news" },
      { name: "Partenaires", path: "/partners" },
      { name: "Faire un Don", path: "/donate" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
      { name: "أنشطتنا", path: "/activities" },
      { name: "الأخبار", path: "/news" },
      { name: "الشركاء", path: "/partners" },
      { name: "تبرع", path: "/donate" },
    ],
  };

  const t = content[language];

  return (
    <footer className="bg-muted/30 border-t border-border pattern-amazigh">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <h3 className="font-bold text-lg">
                {language === "fr" ? "Association Imlil" : "جمعية إمليل"}
              </h3>
            </div>
            <p className={`text-sm text-muted-foreground ${language === "ar" ? "font-arabic text-right" : ""}`}>
              {t.aboutText}
            </p>
            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={language === "ar" ? "text-right" : ""}>
            <h3 className={`font-bold text-lg mb-4 ${language === "ar" ? "font-arabic" : ""}`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {links[language].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={language === "ar" ? "text-right" : ""}>
            <h3 className={`font-bold text-lg mb-4 ${language === "ar" ? "font-arabic" : ""}`}>
              {t.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Douar Ait Said Oudaoud Imider, Commune Imider, Tinghir, Maroc</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+212 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>contact@association-imlil.ma</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Placeholder) */}
          <div className={language === "ar" ? "text-right" : ""}>
            <h3 className={`font-bold text-lg mb-4 ${language === "ar" ? "font-arabic" : ""}`}>
              {language === "fr" ? "Newsletter" : "النشرة الإخبارية"}
            </h3>
            <p className={`text-sm text-muted-foreground mb-4 ${language === "ar" ? "font-arabic" : ""}`}>
              {language === "fr"
                ? "Restez informé de nos projets et actualités."
                : "ابق على اطلاع بمشاريعنا وأخبارنا."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "fr" ? "Votre email" : "بريدك الإلكتروني"}
                className="px-3 py-2 rounded-md border border-border bg-background text-sm"
                disabled={isSubmitting}
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary-dark transition-smooth disabled:opacity-50"
              >
                {isSubmitting 
                  ? (language === "fr" ? "Inscription..." : "جاري التسجيل...")
                  : (language === "fr" ? "S'abonner" : "اشترك")
                }
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              © 2025 {language === "fr" ? "Association Imlil" : "جمعية إمليل"}. {t.rights}
            </p>
            <div className="flex space-x-4">
              <Link
                to="/legal"
                className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t.legal}
              </Link>
              <Link
                to="/privacy"
                className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t.privacy}
              </Link>
              <Link
                to="/terms"
                className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
