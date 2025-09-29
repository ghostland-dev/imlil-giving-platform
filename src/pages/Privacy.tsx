import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Privacy = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : Janvier 2025",
      sections: [
        {
          title: "1. Collecte des données",
          content: "Nous collectons les données personnelles que vous nous fournissez directement via nos formulaires de contact et de don. Ces données incluent votre nom, adresse email, et tout message que vous nous envoyez."
        },
        {
          title: "2. Utilisation des données",
          content: "Vos données personnelles sont utilisées pour répondre à vos demandes, traiter vos dons, et vous tenir informé de nos activités si vous y consentez. Nous ne vendons jamais vos données à des tiers."
        },
        {
          title: "3. Conservation des données",
          content: "Nous conservons vos données personnelles aussi longtemps que nécessaire pour remplir les finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales."
        },
        {
          title: "4. Vos droits",
          content: "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition concernant vos données personnelles."
        },
        {
          title: "5. Sécurité",
          content: "Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction."
        },
        {
          title: "6. Contact",
          content: "Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à : contact@association-imlil.ma"
        }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يناير 2025",
      sections: [
        {
          title: "1. جمع البيانات",
          content: "نجمع البيانات الشخصية التي تقدمها لنا مباشرة من خلال نماذج الاتصال والتبرع. تشمل هذه البيانات اسمك وعنوان بريدك الإلكتروني وأي رسالة ترسلها إلينا."
        },
        {
          title: "2. استخدام البيانات",
          content: "تُستخدم بياناتك الشخصية للرد على استفساراتك ومعالجة تبرعاتك وإبقائك على اطلاع بأنشطتنا إذا وافقت على ذلك. نحن لا نبيع بياناتك لأطراف ثالثة أبداً."
        },
        {
          title: "3. الاحتفاظ بالبيانات",
          content: "نحتفظ ببياناتك الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض التي جُمعت من أجلها، أو وفقاً للالتزامات القانونية."
        },
        {
          title: "4. حقوقك",
          content: "وفقاً للائحة العامة لحماية البيانات، لديك حقوق الوصول والتصحيح والمحو وتقييد المعالجة وقابلية النقل والاعتراض فيما يتعلق ببياناتك الشخصية."
        },
        {
          title: "5. الأمان",
          content: "نطبق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من أي وصول غير مصرح به أو تغيير أو إفشاء أو تدمير."
        },
        {
          title: "6. اتصل بنا",
          content: "لأي أسئلة حول سياسة الخصوصية هذه أو لممارسة حقوقك، اتصل بنا على: contact@association-imlil.ma"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Politique de Confidentialité" : "سياسة الخصوصية"}
        description={
          language === "fr"
            ? "Politique de confidentialité de l'Association Imlil - Protection des données personnelles et respect du RGPD."
            : "سياسة الخصوصية لجمعية إمليل - حماية البيانات الشخصية واحترام اللائحة العامة لحماية البيانات."
        }
        keywords="confidentialité, RGPD, données personnelles, privacy policy"
        path="/privacy"
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

export default Privacy;