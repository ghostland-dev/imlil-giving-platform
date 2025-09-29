import { useOutletContext } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "À Propos de Nous",
      subtitle: "Découvrez notre histoire, notre mission et nos valeurs",
      sections: {
        history: {
          title: "Notre Histoire",
          content:
            "Fondée en 2017, l'Association Imlil est née de la volonté des habitants du Douar Ait Said Oudaoud Imider de prendre en main le développement de leur communauté. Face aux défis de la région, notamment l'accès limité à l'éducation, les pratiques agricoles traditionnelles et la perte progressive du patrimoine culturel amazigh, un groupe de citoyens engagés a décidé de créer cette association. Depuis, nous avons accompagné des centaines de familles dans leur développement et contribué à la préservation de notre riche culture.",
        },
        mission: {
          title: "Notre Mission",
          icon: Target,
          content:
            "Promouvoir le développement durable de la communauté d'Imider à travers des projets agricoles innovants, des programmes éducatifs de qualité et la préservation active du patrimoine culturel amazigh. Nous croyons en l'autonomisation de notre communauté et en la création d'opportunités durables pour tous.",
        },
        vision: {
          title: "Notre Vision",
          icon: Eye,
          content:
            "Une communauté prospère où chaque individu a accès à l'éducation, aux ressources nécessaires pour une vie digne, et où le patrimoine culturel amazigh est célébré et transmis aux générations futures. Nous aspirons à être un modèle de développement local durable au Maroc.",
        },
        values: {
          title: "Nos Valeurs",
          icon: Heart,
          items: [
            "Solidarité et entraide communautaire",
            "Respect et préservation du patrimoine culturel",
            "Transparence et bonne gouvernance",
            "Innovation et adaptation",
            "Durabilité environnementale",
            "Égalité et inclusion",
          ],
        },
        team: {
          title: "Notre Équipe",
          icon: Users,
          content:
            "Notre association est dirigée par un bureau élu démocratiquement et composé de membres actifs de la communauté. Nous travaillons également avec des bénévoles locaux et internationaux, ainsi que des experts dans divers domaines pour assurer la réussite de nos projets.",
        },
      },
    },
    ar: {
      title: "من نحن",
      subtitle: "اكتشف تاريخنا ومهمتنا وقيمنا",
      sections: {
        history: {
          title: "تاريخنا",
          content:
            "تأسست جمعية إمليل في عام 2017، وولدت من إرادة سكان دوار آيت سعيد أوداود إميضر لأخذ زمام التنمية في مجتمعهم. في مواجهة تحديات المنطقة، خاصة الوصول المحدود إلى التعليم والممارسات الزراعية التقليدية والفقدان التدريجي للتراث الثقافي الأمازيغي، قررت مجموعة من المواطنين الملتزمين إنشاء هذه الجمعية. منذ ذلك الحين، رافقنا مئات الأسر في تنميتها وساهمنا في الحفاظ على ثقافتنا الغنية.",
        },
        mission: {
          title: "مهمتنا",
          icon: Target,
          content:
            "تعزيز التنمية المستدامة لمجتمع إميضر من خلال مشاريع زراعية مبتكرة وبرامج تعليمية عالية الجودة والحفاظ النشط على التراث الثقافي الأمازيغي. نؤمن بتمكين مجتمعنا وخلق فرص مستدامة للجميع.",
        },
        vision: {
          title: "رؤيتنا",
          icon: Eye,
          content:
            "مجتمع مزدهر حيث يتمتع كل فرد بإمكانية الوصول إلى التعليم والموارد اللازمة لحياة كريمة، وحيث يتم الاحتفال بالتراث الثقافي الأمازيغي ونقله إلى الأجيال القادمة. نطمح أن نكون نموذجاً للتنمية المحلية المستدامة في المغرب.",
        },
        values: {
          title: "قيمنا",
          icon: Heart,
          items: [
            "التضامن والتعاون المجتمعي",
            "احترام والحفاظ على التراث الثقافي",
            "الشفافية والحكم الرشيد",
            "الابتكار والتكيف",
            "الاستدامة البيئية",
            "المساواة والإدماج",
          ],
        },
        team: {
          title: "فريقنا",
          icon: Users,
          content:
            "تُدار جمعيتنا من قبل مكتب منتخب ديمقراطياً ويتألف من أعضاء نشطين في المجتمع. نعمل أيضاً مع متطوعين محليين ودوليين، بالإضافة إلى خبراء في مختلف المجالات لضمان نجاح مشاريعنا.",
        },
      },
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "À Propos" : "من نحن"}
        description={
          language === "fr"
            ? "Découvrez l'histoire, la mission et les valeurs de l'Association Imlil. Depuis 2017, nous œuvrons pour le développement de notre communauté."
            : "اكتشف تاريخ ومهمة وقيم جمعية إمليل. منذ عام 2017، نعمل من أجل تنمية مجتمعنا."
        }
        keywords="histoire, mission, valeurs, association imlil, amazigh, développement local"
        path="/about"
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

        {/* History */}
        <div className="mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2
                className={`text-3xl font-bold mb-6 text-primary ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t.sections.history.title}
              </h2>
              <p
                className={`text-lg text-muted-foreground leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                {t.sections.history.content}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft hover:shadow-strong transition-smooth">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full gradient-cool flex items-center justify-center mr-4">
                  <t.sections.mission.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2
                  className={`text-2xl font-bold text-foreground ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t.sections.mission.title}
                </h2>
              </div>
              <p
                className={`text-muted-foreground leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                {t.sections.mission.content}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-strong transition-smooth">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center mr-4">
                  <t.sections.vision.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2
                  className={`text-2xl font-bold text-foreground ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t.sections.vision.title}
                </h2>
              </div>
              <p
                className={`text-muted-foreground leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                {t.sections.vision.content}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <Card className="shadow-soft bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                  <t.sections.values.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2
                  className={`text-2xl font-bold text-foreground ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t.sections.values.title}
                </h2>
              </div>
              <ul
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                  language === "ar" ? "text-right" : ""
                }`}
              >
                {t.sections.values.items.map((value, index) => (
                  <li
                    key={index}
                    className={`flex items-center text-muted-foreground ${
                      language === "ar" ? "font-arabic flex-row-reverse" : ""
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div>
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <t.sections.team.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h2
                  className={`text-2xl font-bold text-foreground ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t.sections.team.title}
                </h2>
              </div>
              <p
                className={`text-muted-foreground leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                {t.sections.team.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
