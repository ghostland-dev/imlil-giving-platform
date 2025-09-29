import { useOutletContext, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Heart, Home } from "lucide-react";
import SEO from "@/components/SEO";

const PaymentSuccess = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();
  const [searchParams] = useSearchParams();
  const donationId = searchParams.get("donationId");

  const content = {
    fr: {
      title: "Don Réalisé avec Succès !",
      subtitle: "Merci pour votre générosité",
      message: "Votre don a été traité avec succès. Vous recevrez un reçu par email dans les prochaines minutes.",
      reference: "Référence de transaction",
      impact: "Votre Impact",
      impactText: "Grâce à votre don, nous pourrons continuer nos projets de développement durable et de préservation culturelle à Imider.",
      nextSteps: "Prochaines Étapes",
      steps: [
        "Vous recevrez un reçu fiscal par email",
        "Nous vous tiendrons informé de l'utilisation de votre don",
        "Découvrez nos projets et leur avancement sur notre site"
      ],
      returnHome: "Retour à l'accueil",
      moreProjects: "Voir nos projets"
    },
    ar: {
      title: "تم التبرع بنجاح!",
      subtitle: "شكراً لكرمك",
      message: "تم معالجة تبرعك بنجاح. ستتلقى إيصالاً عبر البريد الإلكتروني في الدقائق القادمة.",
      reference: "مرجع المعاملة",
      impact: "تأثيرك",
      impactText: "بفضل تبرعك، سنتمكن من مواصلة مشاريع التنمية المستدامة والحفاظ على الثقافة في إميضر.",
      nextSteps: "الخطوات التالية",
      steps: [
        "ستتلقى إيصالاً ضريبياً عبر البريد الإلكتروني",
        "سنبقيك على اطلاع بشأن استخدام تبرعك",
        "اكتشف مشاريعنا وتقدمها على موقعنا"
      ],
      returnHome: "العودة إلى الرئيسية",
      moreProjects: "عرض مشاريعنا"
    }
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Don Réussi" : "نجح التبرع"}
        description={
          language === "fr"
            ? "Merci pour votre don à l'Association Imlil. Votre générosité nous aide à poursuivre notre mission."
            : "شكراً لتبرعك لجمعية إمليل. كرمك يساعدنا على مواصلة مهمتنا."
        }
        path="/payment-success"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.title}
            </h1>
            <p className={`text-xl text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {/* Success Message */}
            <Card className="shadow-strong">
              <CardContent className="p-8 text-center">
                <p className={`text-lg text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
                  {t.message}
                </p>
                {donationId && (
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className={`text-sm font-medium mb-2 ${language === "ar" ? "font-arabic" : ""}`}>
                      {t.reference}
                    </p>
                    <code className="text-primary">{donationId}</code>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Impact Section */}
            <Card className="shadow-soft bg-primary/5">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${language === "ar" ? "font-arabic" : ""}`}>
                  <Heart className="w-6 h-6 text-primary" />
                  {t.impact}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-muted-foreground ${language === "ar" ? "font-arabic text-right" : ""}`}>
                  {t.impactText}
                </p>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className={`${language === "ar" ? "font-arabic text-right" : ""}`}>
                  {t.nextSteps}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-3 ${language === "ar" ? "text-right" : ""}`}>
                  {t.steps.map((step, index) => (
                    <li key={index} className={`flex items-start gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className={`text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Home className="w-5 h-5" />
                  {t.returnHome}
                </Button>
              </Link>
              <Link to="/activities">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t.moreProjects}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;