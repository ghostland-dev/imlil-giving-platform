import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Terms = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : Janvier 2025",
      sections: [
        {
          title: "1. Objet",
          content: "Les présentes conditions d'utilisation régissent l'accès et l'utilisation du site web de l'Association Imlil, ainsi que tous les services proposés sur ce site."
        },
        {
          title: "2. Acceptation des conditions",
          content: "En accédant à ce site web, vous acceptez pleinement et sans réserve les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site."
        },
        {
          title: "3. Utilisation du site",
          content: "Vous vous engagez à utiliser ce site de manière appropriée et conforme à la loi. Il est interdit d'utiliser le site à des fins illégales ou non autorisées."
        },
        {
          title: "4. Propriété intellectuelle",
          content: "Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par les droits de propriété intellectuelle et appartiennent à l'Association Imlil ou à ses partenaires."
        },
        {
          title: "5. Dons et donations",
          content: "Les dons effectués via ce site sont définitifs. L'Association Imlil s'engage à utiliser les fonds collectés conformément à sa mission et à ses objectifs statutaires."
        },
        {
          title: "6. Limitation de responsabilité",
          content: "L'Association Imlil ne peut être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site web ou de l'impossibilité de l'utiliser."
        },
        {
          title: "7. Modifications",
          content: "L'Association Imlil se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prennent effet dès leur publication sur le site."
        },
        {
          title: "8. Droit applicable",
          content: "Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis aux tribunaux compétents du Maroc."
        }
      ]
    },
    ar: {
      title: "شروط الاستخدام",
      lastUpdated: "آخر تحديث: يناير 2025",
      sections: [
        {
          title: "1. الموضوع",
          content: "تحكم شروط الاستخدام هذه الوصول إلى واستخدام موقع الويب الخاص بجمعية إمليل، بالإضافة إلى جميع الخدمات المقدمة على هذا الموقع."
        },
        {
          title: "2. قبول الشروط",
          content: "بوصولك إلى هذا الموقع، فإنك تقبل بالكامل وبدون تحفظ شروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام هذا الموقع."
        },
        {
          title: "3. استخدام الموقع",
          content: "تتعهد باستخدام هذا الموقع بطريقة مناسبة وقانونية. يُمنع استخدام الموقع لأغراض غير قانونية أو غير مصرح بها."
        },
        {
          title: "4. الملكية الفكرية",
          content: "جميع المحتويات الموجودة على هذا الموقع (النصوص والصور والشعارات، إلخ) محمية بحقوق الملكية الفكرية وتنتمي إلى جمعية إمليل أو شركائها."
        },
        {
          title: "5. التبرعات",
          content: "التبرعات المقدمة عبر هذا الموقع نهائية. تلتزم جمعية إمليل باستخدام الأموال المجمعة وفقاً لمهمتها وأهدافها القانونية."
        },
        {
          title: "6. تحديد المسؤولية",
          content: "لا يمكن تحميل جمعية إمليل المسؤولية عن الأضرار المباشرة أو غير المباشرة الناتجة عن استخدام هذا الموقع أو عدم القدرة على استخدامه."
        },
        {
          title: "7. التعديلات",
          content: "تحتفظ جمعية إمليل بالحق في تعديل شروط الاستخدام هذه في أي وقت. تدخل التعديلات حيز التنفيذ فور نشرها على الموقع."
        },
        {
          title: "8. القانون المطبق",
          content: "تخضع هذه الشروط للقانون المغربي. أي نزاع سيُعرض على المحاكم المختصة في المغرب."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Conditions d'Utilisation" : "شروط الاستخدام"}
        description={
          language === "fr"
            ? "Conditions d'utilisation du site web de l'Association Imlil - Règles et conditions pour l'utilisation de nos services."
            : "شروط استخدام موقع جمعية إمليل - القواعد والشروط لاستخدام خدماتنا."
        }
        keywords="conditions utilisation, termes, règles, association imlil"
        path="/terms"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.title}
            </h1>
            <p className={`text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.lastUpdated}
            </p>
          </div>

          <div className="space-y-6">
            {t.sections.map((section, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className={`text-xl ${language === "ar" ? "font-arabic text-right" : ""}`}>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-muted-foreground leading-relaxed ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}>
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;