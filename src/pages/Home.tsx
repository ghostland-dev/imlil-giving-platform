import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Sprout, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-village.jpg";
import agricultureImage from "@/assets/agriculture.jpg";
import educationImage from "@/assets/education.jpg";
import artisanatImage from "@/assets/artisanat.jpg";
import SEO from "@/components/SEO";

const Home = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      hero: {
        title: "Ensemble pour un Avenir Meilleur",
        subtitle: "Association de développement local et préservation de la culture amazighe",
        cta1: "Découvrir nos projets",
        cta2: "Faire un don",
      },
      stats: [
        { value: "500+", label: "Bénéficiaires", icon: Users },
        { value: "15", label: "Projets Réalisés", icon: Heart },
        { value: "3", label: "Domaines d'Action", icon: Sprout },
        { value: "8", label: "Années d'Expérience", icon: GraduationCap },
      ],
      mission: {
        title: "Notre Mission",
        description:
          "L'Association Imlil œuvre pour le développement durable de la communauté d'Imider à travers des projets agricoles, éducatifs et culturels. Nous croyons en la préservation du patrimoine amazigh tout en promouvant le progrès et l'innovation.",
        cta: "En savoir plus",
      },
      activities: {
        title: "Nos Domaines d'Action",
        items: [
          {
            title: "Agriculture Durable",
            description: "Irrigation moderne, techniques durables et valorisation des produits locaux.",
            image: agricultureImage,
            path: "/activities",
          },
          {
            title: "Éducation & Alphabétisation",
            description: "Programmes éducatifs pour enfants et adultes, soutien scolaire et formation.",
            image: educationImage,
            path: "/activities",
          },
          {
            title: "Artisanat Local",
            description: "Valorisation de l'artisanat traditionnel amazigh et soutien aux artisans.",
            image: artisanatImage,
            path: "/activities",
          },
        ],
      },
      impact: {
        title: "Votre Soutien Change des Vies",
        description:
          "Chaque don contribue directement à améliorer les conditions de vie de notre communauté. Ensemble, construisons un avenir durable.",
        cta: "Faire un don maintenant",
      },
    },
    ar: {
      hero: {
        title: "معاً من أجل مستقبل أفضل",
        subtitle: "جمعية التنمية المحلية والحفاظ على الثقافة الأمازيغية",
        cta1: "اكتشف مشاريعنا",
        cta2: "تبرع",
      },
      stats: [
        { value: "500+", label: "المستفيدون", icon: Users },
        { value: "15", label: "المشاريع المنجزة", icon: Heart },
        { value: "3", label: "مجالات العمل", icon: Sprout },
        { value: "8", label: "سنوات الخبرة", icon: GraduationCap },
      ],
      mission: {
        title: "مهمتنا",
        description:
          "تعمل جمعية إمليل من أجل التنمية المستدامة لمجتمع إميضر من خلال مشاريع زراعية وتعليمية وثقافية. نؤمن بالحفاظ على التراث الأمازيغي مع تعزيز التقدم والابتكار.",
        cta: "اعرف المزيد",
      },
      activities: {
        title: "مجالات عملنا",
        items: [
          {
            title: "الزراعة المستدامة",
            description: "الري الحديث، التقنيات المستدامة وتثمين المنتجات المحلية.",
            image: agricultureImage,
            path: "/activities",
          },
          {
            title: "التعليم ومحو الأمية",
            description: "برامج تعليمية للأطفال والبالغين، الدعم المدرسي والتدريب.",
            image: educationImage,
            path: "/activities",
          },
          {
            title: "الحرف المحلية",
            description: "تثمين الحرف التقليدية الأمازيغية ودعم الحرفيين.",
            image: artisanatImage,
            path: "/activities",
          },
        ],
      },
      impact: {
        title: "دعمكم يغير الحياة",
        description:
          "كل تبرع يساهم مباشرة في تحسين ظروف عيش مجتمعنا. معاً، لنبني مستقبلاً مستداماً.",
        cta: "تبرع الآن",
      },
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Accueil" : "الرئيسية"}
        description={
          language === "fr"
            ? "Association Imlil - Développement durable, éducation et préservation de la culture amazighe à Imider, Tinghir, Maroc."
            : "جمعية إمليل - التنمية المستدامة والتعليم والحفاظ على الثقافة الأمازيغية في إميضر، تنغير، المغرب."
        }
        keywords="association, imlil, maroc, tinghir, imider, amazigh, développement, éducation"
        path="/"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className={`text-primary-foreground mb-6 animate-fade-in ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t.hero.title}
          </h1>
          <p
            className={`text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto animate-fade-in ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/activities">
              <Button variant="hero" size="xl">
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="warm" size="xl">
                {t.hero.cta2}
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 pattern-amazigh">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-cool mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className={`text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`mb-6 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.mission.title}
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 leading-relaxed ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.mission.description}
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                {t.mission.cta}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2
            className={`text-center mb-12 text-foreground ${language === "ar" ? "font-arabic" : ""}`}
          >
            {t.activities.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.activities.items.map((activity, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-strong transition-smooth group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 text-foreground ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className={`text-muted-foreground mb-4 ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {activity.description}
                  </p>
                  <Link to={activity.path}>
                    <Button variant="link" className="p-0">
                      {language === "fr" ? "En savoir plus" : "اعرف المزيد"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact/CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-primary-foreground mb-6 ${language === "ar" ? "font-arabic" : ""}`}>
              {t.impact.title}
            </h2>
            <p
              className={`text-lg text-primary-foreground/95 mb-8 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t.impact.description}
            </p>
            <Link to="/donate">
              <Button variant="warm" size="xl">
                {t.impact.cta}
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
