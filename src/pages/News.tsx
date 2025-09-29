import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import agricultureImage from "@/assets/agriculture.jpg";
import educationImage from "@/assets/education.jpg";
import artisanatImage from "@/assets/artisanat.jpg";
import SEO from "@/components/SEO";

const News = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Actualités",
      subtitle: "Suivez nos dernières nouvelles et réalisations",
      readMore: "Lire la suite",
      articles: [
        {
          title: "Lancement du nouveau système d'irrigation à Imider",
          date: "15 Janvier 2025",
          author: "Équipe Association Imlil",
          excerpt:
            "Nous sommes fiers d'annoncer l'installation d'un système d'irrigation moderne qui bénéficiera à plus de 50 familles d'agriculteurs. Ce projet, réalisé en partenariat avec des ONG locales, permettra d'augmenter significativement les rendements agricoles.",
          image: agricultureImage,
          category: "Agriculture",
        },
        {
          title: "200 adultes diplômés du programme d'alphabétisation",
          date: "08 Janvier 2025",
          author: "Mohammed El Amrani",
          excerpt:
            "Une cérémonie émouvante a célébré la remise des certificats à 200 adultes ayant complété notre programme d'alphabétisation. Ces nouveaux lecteurs pourront désormais participer plus activement à la vie économique et sociale de notre communauté.",
          image: educationImage,
          category: "Éducation",
        },
        {
          title: "Succès de la foire artisanale à Marrakech",
          date: "02 Janvier 2025",
          author: "Fatima Zahra",
          excerpt:
            "Notre coopérative d'artisanes a participé avec succès à la foire artisanale de Marrakech, générant des ventes record et établissant de nouveaux partenariats commerciaux. Les tapis et poteries amazighes ont connu un vif succès auprès des visiteurs.",
          image: artisanatImage,
          category: "Artisanat",
        },
      ],
    },
    ar: {
      title: "الأخبار",
      subtitle: "تابع آخر أخبارنا وإنجازاتنا",
      readMore: "اقرأ المزيد",
      articles: [
        {
          title: "إطلاق نظام الري الجديد في إميضر",
          date: "15 يناير 2025",
          author: "فريق جمعية إمليل",
          excerpt:
            "يسعدنا الإعلان عن تركيب نظام ري حديث سيستفيد منه أكثر من 50 أسرة من المزارعين. سيسمح هذا المشروع، المنجز بالشراكة مع منظمات غير حكومية محلية، بزيادة الإنتاجية الزراعية بشكل كبير.",
          image: agricultureImage,
          category: "الزراعة",
        },
        {
          title: "200 بالغ يتخرجون من برنامج محو الأمية",
          date: "08 يناير 2025",
          author: "محمد العمراني",
          excerpt:
            "احتفل حفل مؤثر بتسليم الشهادات لـ 200 بالغ أكملوا برنامج محو الأمية لدينا. سيتمكن هؤلاء القراء الجدد الآن من المشاركة بشكل أكثر نشاطاً في الحياة الاقتصادية والاجتماعية لمجتمعنا.",
          image: educationImage,
          category: "التعليم",
        },
        {
          title: "نجاح معرض الحرف في مراكش",
          date: "02 يناير 2025",
          author: "فاطمة الزهراء",
          excerpt:
            "شاركت تعاونيتنا للحرفيات بنجاح في معرض الحرف في مراكش، محققة مبيعات قياسية وإقامة شراكات تجارية جديدة. حظيت السجادات والفخار الأمازيغي بنجاح كبير لدى الزوار.",
          image: artisanatImage,
          category: "الحرف",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Actualités" : "الأخبار"}
        description={
          language === "fr"
            ? "Suivez les dernières nouvelles et réalisations de l'Association Imlil. Découvrez nos projets et événements."
            : "تابع آخر أخبار وإنجازات جمعية إمليل. اكتشف مشاريعنا وفعالياتنا."
        }
        keywords="actualités, news, événements, projets, association imlil"
        path="/news"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
            {t.title}
          </h1>
          <p className={`text-xl text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-strong transition-smooth group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle
                  className={`text-xl mb-3 line-clamp-2 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {article.title}
                </CardTitle>
                <div className={`flex items-center space-x-4 text-sm text-muted-foreground ${language === "ar" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className={language === "ar" ? "font-arabic" : ""}>
                      {article.author}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p
                  className={`text-muted-foreground mb-4 line-clamp-3 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {article.excerpt}
                </p>
                <Button variant="link" className="p-0 group-hover:text-primary">
                  {t.readMore}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default News;
