import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Legal = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Mentions Légales",
      sections: [
        {
          title: "Éditeur du site",
          content: "Association Imlil\nAdresse : Douar Ait Said Oudaoud Imider, Commune Imider, Province de Tinghir, Maroc\nEmail : contact@association-imlil.ma\nTéléphone : +212 XXX XXX XXX"
        },
        {
          title: "Directeur de publication",
          content: "Le directeur de publication est le président de l'Association Imlil."
        },
        {
          title: "Hébergement",
          content: "Ce site est hébergé par Lovable Cloud.\nAdresse : lovable.dev"
        },
        {
          title: "Propriété intellectuelle",
          content: "L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."
        },
        {
          title: "Protection des données personnelles",
          content: "L'Association Imlil s'engage à respecter la confidentialité des données personnelles collectées sur ce site. Conformément à la loi marocaine sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant."
        },
        {
          title: "Cookies",
          content: "Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur."
        },
        {
          title: "Responsabilité",
          content: "L'Association Imlil met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés, mais ne saurait être tenue responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site."
        }
      ]
    },
    ar: {
      title: "الإشعارات القانونية",
      sections: [
        {
          title: "ناشر الموقع",
          content: "جمعية إمليل\nالعنوان: دوار آيت سعيد أوداود إميضر، جماعة إميضر، إقليم تنغير، المغرب\nالبريد الإلكتروني: contact@association-imlil.ma\nالهاتف: +212 XXX XXX XXX"
        },
        {
          title: "مدير النشر",
          content: "مدير النشر هو رئيس جمعية إمليل."
        },
        {
          title: "الاستضافة",
          content: "يتم استضافة هذا الموقع بواسطة Lovable Cloud.\nالعنوان: lovable.dev"
        },
        {
          title: "الملكية الفكرية",
          content: "يخضع هذا الموقع بالكامل للتشريع المغربي والدولي بشأن حقوق الطبع والنشر والملكية الفكرية. جميع حقوق الاستنساخ محفوظة، بما في ذلك للوثائق القابلة للتنزيل والتمثيلات الأيقونية والفوتوغرافية."
        },
        {
          title: "حماية البيانات الشخصية",
          content: "تلتزم جمعية إمليل باحترام سرية البيانات الشخصية المجمعة على هذا الموقع. وفقاً للقانون المغربي لحماية البيانات الشخصية، لديك الحق في الوصول إلى البيانات المتعلقة بك وتصحيحها وحذفها."
        },
        {
          title: "ملفات تعريف الارتباط",
          content: "قد يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور. يمكنك إلغاء تنشيط ملفات تعريف الارتباط في إعدادات متصفحك."
        },
        {
          title: "المسؤولية",
          content: "تبذل جمعية إمليل قصارى جهدها لتقديم معلومات و/أو أدوات متاحة ومتحققة للمستخدمين، لكنها لا يمكن أن تتحمل المسؤولية عن الأخطاء أو عدم توفر المعلومات و/أو وجود فيروسات على موقعها."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Mentions Légales" : "الإشعارات القانونية"}
        description={
          language === "fr"
            ? "Mentions légales de l'Association Imlil - Informations légales et réglementaires du site."
            : "الإشعارات القانونية لجمعية إمليل - المعلومات القانونية والتنظيمية للموقع."
        }
        keywords="mentions légales, informations légales, association imlil"
        path="/legal"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.title}
            </h1>
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
                  <pre className={`text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}>
                    {section.content}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;