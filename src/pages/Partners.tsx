import { useOutletContext } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Handshake, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Partners = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Nos Partenaires",
      subtitle: "Ensemble, nous construisons un avenir durable pour notre communauté",
      intro:
        "Nous sommes reconnaissants envers nos partenaires qui nous soutiennent dans notre mission. Leur engagement et leur soutien sont essentiels à la réussite de nos projets.",
      categories: {
        institutional: "Partenaires Institutionnels",
        ngo: "ONG & Associations",
        private: "Secteur Privé",
        local: "Partenaires Locaux",
      },
      partners: {
        institutional: [
          { name: "Ministère de l'Intérieur", type: "Gouvernement", icon: Building2 },
          { name: "Conseil Régional Drâa-Tafilalet", type: "Collectivité", icon: Building2 },
          { name: "Commune Rurale d'Imider", type: "Municipalité", icon: Building2 },
        ],
        ngo: [
          { name: "Fondation pour le Développement Rural", type: "ONG", icon: Handshake },
          { name: "Association Marocaine de Solidarité", type: "Association", icon: Handshake },
          { name: "Réseau Amazigh de Développement", type: "Réseau", icon: Globe },
        ],
        private: [
          { name: "Coopérative Agricole du Sud", type: "Coopérative", icon: Users },
          { name: "Entreprise Locale de Produits Bio", type: "Entreprise", icon: Building2 },
        ],
        local: [
          { name: "École Primaire Imider", type: "Éducation", icon: Building2 },
          { name: "Centre de Santé Local", type: "Santé", icon: Building2 },
        ],
      },
      become: {
        title: "Devenez Partenaire",
        description:
          "Vous souhaitez soutenir notre mission et contribuer au développement durable d'Imider ? Rejoignez notre réseau de partenaires engagés.",
        cta: "Nous Contacter",
      },
    },
    ar: {
      title: "شركاؤنا",
      subtitle: "معاً، نبني مستقبلاً مستداماً لمجتمعنا",
      intro:
        "نحن ممتنون لشركائنا الذين يدعموننا في مهمتنا. التزامهم ودعمهم ضروريان لنجاح مشاريعنا.",
      categories: {
        institutional: "الشركاء المؤسسيون",
        ngo: "المنظمات غير الحكومية والجمعيات",
        private: "القطاع الخاص",
        local: "الشركاء المحليون",
      },
      partners: {
        institutional: [
          { name: "وزارة الداخلية", type: "الحكومة", icon: Building2 },
          { name: "المجلس الجهوي درعة تافيلالت", type: "جماعة", icon: Building2 },
          { name: "الجماعة القروية إميضر", type: "بلدية", icon: Building2 },
        ],
        ngo: [
          { name: "مؤسسة التنمية الريفية", type: "منظمة غير حكومية", icon: Handshake },
          { name: "الجمعية المغربية للتضامن", type: "جمعية", icon: Handshake },
          { name: "شبكة التنمية الأمازيغية", type: "شبكة", icon: Globe },
        ],
        private: [
          { name: "التعاونية الزراعية للجنوب", type: "تعاونية", icon: Users },
          { name: "شركة محلية للمنتجات العضوية", type: "شركة", icon: Building2 },
        ],
        local: [
          { name: "المدرسة الابتدائية إميضر", type: "تعليم", icon: Building2 },
          { name: "المركز الصحي المحلي", type: "صحة", icon: Building2 },
        ],
      },
      become: {
        title: "كن شريكاً",
        description:
          "هل ترغب في دعم مهمتنا والمساهمة في التنمية المستدامة لإميضر؟ انضم إلى شبكة شركائنا الملتزمين.",
        cta: "اتصل بنا",
      },
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Nos Partenaires" : "شركاؤنا"}
        description={
          language === "fr"
            ? "Découvrez nos partenaires institutionnels, ONG et acteurs locaux qui soutiennent notre mission de développement durable."
            : "اكتشف شركائنا المؤسسيين والمنظمات غير الحكومية والجهات الفاعلة المحلية الذين يدعمون مهمتنا للتنمية المستدامة."
        }
        keywords="partenaires, collaborations, ONG, institutions, développement"
        path="/partners"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
            {t.title}
          </h1>
          <p
            className={`text-xl text-muted-foreground mb-8 ${language === "ar" ? "font-arabic" : ""}`}
          >
            {t.subtitle}
          </p>
          <p
            className={`text-muted-foreground max-w-3xl mx-auto ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t.intro}
          </p>
        </div>

        {/* Partners Categories */}
        <div className="space-y-12 mb-16">
          {/* Institutional Partners */}
          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-primary ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.categories.institutional}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.partners.institutional.map((partner, index) => (
                <Card
                  key={index}
                  className="hover:shadow-strong transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-cool flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-foreground group-hover:text-primary transition-smooth ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.name}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NGO Partners */}
          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-secondary ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.categories.ngo}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.partners.ngo.map((partner, index) => (
                <Card
                  key={index}
                  className="hover:shadow-strong transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-foreground group-hover:text-secondary transition-smooth ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.name}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Private Partners */}
          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-accent ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.categories.private}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.partners.private.map((partner, index) => (
                <Card
                  key={index}
                  className="hover:shadow-strong transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-foreground group-hover:text-accent transition-smooth ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.name}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Local Partners */}
          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-foreground ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.categories.local}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.partners.local.map((partner, index) => (
                <Card
                  key={index}
                  className="hover:shadow-strong transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-foreground group-hover:text-accent transition-smooth ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.name}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {partner.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <Card className="gradient-hero shadow-strong">
          <CardContent className="p-12 text-center">
            <h2
              className={`text-3xl font-bold text-primary-foreground mb-4 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.become.title}
            </h2>
            <p
              className={`text-lg text-primary-foreground/95 mb-8 max-w-2xl mx-auto ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.become.description}
            </p>
            <Link to="/contact">
              <Button variant="warm" size="xl">
                {t.become.cta}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Partners;
