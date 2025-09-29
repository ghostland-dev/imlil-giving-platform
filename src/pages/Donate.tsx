import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Euro, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const Donate = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();
  const [amount, setAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");

  const content = {
    fr: {
      title: "Faire un Don",
      subtitle: "Votre générosité change des vies",
      impact: {
        title: "L'Impact de Votre Don",
        items: [
          { amount: "20€", description: "Fournitures scolaires pour un enfant pendant un an" },
          { amount: "50€", description: "Formation agricole pour un fermier" },
          { amount: "100€", description: "Équipement pour un artisan" },
          { amount: "200€", description: "Système d'irrigation pour une famille" },
        ],
      },
      form: {
        chooseAmount: "Choisissez un montant",
        customAmount: "Montant personnalisé",
        once: "Don unique",
        monthly: "Don mensuel",
        donate: "Faire un don",
        secure: "Paiement 100% sécurisé",
      },
      transparency: {
        title: "Transparence Financière",
        description:
          "Nous nous engageons à une transparence totale. 90% de vos dons sont directement utilisés pour nos projets, 10% pour les frais administratifs.",
        items: [
          "Rapports financiers annuels publiés",
          "Audit indépendant chaque année",
          "Suivi détaillé de chaque projet",
          "Reçus fiscaux pour vos dons",
        ],
      },
    },
    ar: {
      title: "تبرع",
      subtitle: "كرمك يغير الحياة",
      impact: {
        title: "تأثير تبرعك",
        items: [
          { amount: "20€", description: "مستلزمات مدرسية لطفل لمدة عام" },
          { amount: "50€", description: "تدريب زراعي لمزارع" },
          { amount: "100€", description: "معدات لحرفي" },
          { amount: "200€", description: "نظام ري لعائلة" },
        ],
      },
      form: {
        chooseAmount: "اختر المبلغ",
        customAmount: "مبلغ مخصص",
        once: "تبرع لمرة واحدة",
        monthly: "تبرع شهري",
        donate: "تبرع",
        secure: "دفع آمن 100٪",
      },
      transparency: {
        title: "الشفافية المالية",
        description:
          "نلتزم بالشفافية الكاملة. 90٪ من تبرعاتك تُستخدم مباشرة لمشاريعنا، و10٪ للتكاليف الإدارية.",
        items: [
          "نشر التقارير المالية السنوية",
          "مراجعة مستقلة كل عام",
          "متابعة تفصيلية لكل مشروع",
          "إيصالات ضريبية لتبرعاتك",
        ],
      },
    },
  };

  const t = content[language];

  const amounts = ["20", "50", "100", "200"];

  const handleDonate = () => {
    const finalAmount = customAmount || amount;
    toast.success(
      language === "fr"
        ? `Merci pour votre don de ${finalAmount}€ !`
        : `شكراً لتبرعك بـ ${finalAmount}€!`,
      {
        description:
          language === "fr"
            ? "Redirection vers la page de paiement sécurisé..."
            : "إعادة التوجيه إلى صفحة الدفع الآمنة...",
      }
    );
  };

  return (
    <>
      <SEO
        title={language === "fr" ? "Faire un Don" : "تبرع"}
        description={
          language === "fr"
            ? "Soutenez l'Association Imlil par votre don. Chaque contribution aide notre communauté à se développer durablement."
            : "ادعم جمعية إمليل بتبرعك. كل مساهمة تساعد مجتمعنا على التطور بشكل مستدام."
        }
        keywords="don, donation, soutien, association imlil, aide, développement"
        path="/donate"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle
                  className={`text-2xl flex items-center gap-2 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  <Heart className="w-6 h-6 text-primary" />
                  {t.form.chooseAmount}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type Toggle */}
                <div className="flex gap-2">
                  <Button
                    variant={donationType === "once" ? "default" : "outline"}
                    onClick={() => setDonationType("once")}
                    className={`flex-1 ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {t.form.once}
                  </Button>
                  <Button
                    variant={donationType === "monthly" ? "default" : "outline"}
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {t.form.monthly}
                  </Button>
                </div>

                {/* Preset Amounts */}
                <div className="grid grid-cols-2 gap-3">
                  {amounts.map((value) => (
                    <Button
                      key={value}
                      variant={amount === value && !customAmount ? "default" : "outline"}
                      onClick={() => {
                        setAmount(value);
                        setCustomAmount("");
                      }}
                      className="h-16 text-lg"
                    >
                      {value}
                      <Euro className="w-4 h-4 ml-1" />
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      language === "ar" ? "font-arabic text-right" : ""
                    }`}
                  >
                    {t.form.customAmount}
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount("");
                      }}
                      className="text-lg pr-10"
                    />
                    <Euro className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full"
                  onClick={handleDonate}
                  disabled={!amount && !customAmount}
                >
                  {t.form.donate}
                  <Heart className="w-5 h-5" />
                </Button>

                {/* Security Note */}
                <p
                  className={`text-sm text-center text-muted-foreground flex items-center justify-center gap-2 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {t.form.secure}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impact & Transparency */}
          <div className="space-y-8">
            {/* Impact Section */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle
                  className={`text-2xl text-primary ${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t.impact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.impact.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-16 h-16 rounded-full gradient-cool flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{item.amount}</span>
                      </div>
                      <p
                        className={`text-muted-foreground pt-3 ${
                          language === "ar" ? "font-arabic text-right" : ""
                        }`}
                      >
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Transparency Section */}
            <Card className="shadow-soft bg-accent/10">
              <CardHeader>
                <CardTitle
                  className={`text-2xl text-accent ${language === "ar" ? "font-arabic" : ""}`}
                >
                  {t.transparency.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p
                  className={`text-muted-foreground ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {t.transparency.description}
                </p>
                <ul className={`space-y-2 ${language === "ar" ? "text-right" : ""}`}>
                  {t.transparency.items.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center text-sm text-muted-foreground ${
                        language === "ar" ? "font-arabic flex-row-reverse" : ""
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Donate;
