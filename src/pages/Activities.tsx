import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, GraduationCap, Palette, Globe } from "lucide-react";
import agricultureImage from "@/assets/agriculture.jpg";
import educationImage from "@/assets/education.jpg";
import artisanatImage from "@/assets/artisanat.jpg";
import SEO from "@/components/SEO";

const Activities = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();

  const content = {
    fr: {
      title: "Nos Activités",
      subtitle: "Découvrez nos domaines d'action pour le développement de notre communauté",
      activities: [
        {
          icon: Sprout,
          title: "Agriculture Durable",
          image: agricultureImage,
          description:
            "Nous modernisons les pratiques agricoles traditionnelles en introduisant des systèmes d'irrigation efficaces, des techniques de culture durable et en facilitant l'accès aux marchés pour nos agriculteurs.",
          achievements: [
            "Installation de 5 systèmes d'irrigation modernes",
            "Formation de 80 agriculteurs aux pratiques durables",
            "Création d'une coopérative agricole locale",
            "Augmentation de 40% du rendement des cultures",
          ],
          ongoing: [
            "Extension du réseau d'irrigation",
            "Programme de permaculture",
            "Certification bio pour les produits locaux",
          ],
        },
        {
          icon: GraduationCap,
          title: "Éducation & Alphabétisation",
          image: educationImage,
          description:
            "L'éducation est au cœur de notre mission. Nous proposons des programmes d'alphabétisation pour adultes, du soutien scolaire pour les enfants, et des formations professionnelles adaptées aux besoins de la région.",
          achievements: [
            "200+ adultes alphabétisés",
            "Programme de soutien scolaire pour 150 enfants",
            "3 salles de classe rénovées",
            "Bibliothèque communautaire créée",
          ],
          ongoing: [
            "Programme d'alphabétisation numérique",
            "Bourses d'études pour lycéens",
            "Ateliers de formation professionnelle",
          ],
        },
        {
          icon: Palette,
          title: "Artisanat Local",
          image: artisanatImage,
          description:
            "Nous valorisons l'artisanat traditionnel amazigh en soutenant les artisans locaux, en facilitant l'accès aux marchés et en organisant des formations pour préserver les techniques ancestrales.",
          achievements: [
            "Coopérative d'artisanes créée (25 membres)",
            "Participation à 8 foires artisanales",
            "Boutique en ligne lancée",
            "Augmentation de 60% des ventes",
          ],
          ongoing: [
            "Formation aux nouveaux designs",
            "Expansion de la boutique en ligne",
            "Partenariats avec hôtels et boutiques",
          ],
        },
        {
          icon: Globe,
          title: "Préservation Culturelle",
          image: agricultureImage,
          description:
            "Nous œuvrons activement pour la préservation et la promotion de la culture amazighe à travers l'organisation d'événements culturels, la documentation des traditions et l'enseignement de la langue tamazight.",
          achievements: [
            "Festival culturel annuel organisé",
            "Archives numériques des traditions locales",
            "Cours de tamazight pour 100+ élèves",
            "Exposition permanente du patrimoine",
          ],
          ongoing: [
            "Documentation des chants traditionnels",
            "Programme d'échange culturel",
            "Création d'un musée communautaire",
          ],
        },
      ],
    },
    ar: {
      title: "أنشطتنا",
      subtitle: "اكتشف مجالات عملنا لتنمية مجتمعنا",
      activities: [
        {
          icon: Sprout,
          title: "الزراعة المستدامة",
          image: agricultureImage,
          description:
            "نحدّث الممارسات الزراعية التقليدية من خلال إدخال أنظمة ري فعالة وتقنيات زراعة مستدامة وتسهيل الوصول إلى الأسواق لمزارعينا.",
          achievements: [
            "تركيب 5 أنظمة ري حديثة",
            "تدريب 80 مزارعاً على الممارسات المستدامة",
            "إنشاء تعاونية زراعية محلية",
            "زيادة بنسبة 40٪ في إنتاجية المحاصيل",
          ],
          ongoing: [
            "توسيع شبكة الري",
            "برنامج الزراعة المستدامة",
            "شهادة عضوية للمنتجات المحلية",
          ],
        },
        {
          icon: GraduationCap,
          title: "التعليم ومحو الأمية",
          image: educationImage,
          description:
            "التعليم في صميم مهمتنا. نقدم برامج محو الأمية للبالغين والدعم المدرسي للأطفال والتدريب المهني المتكيف مع احتياجات المنطقة.",
          achievements: [
            "200+ بالغ تعلم القراءة والكتابة",
            "برنامج دعم مدرسي لـ 150 طفل",
            "تجديد 3 فصول دراسية",
            "إنشاء مكتبة مجتمعية",
          ],
          ongoing: [
            "برنامج محو الأمية الرقمية",
            "منح دراسية لطلاب الثانوية",
            "ورش التدريب المهني",
          ],
        },
        {
          icon: Palette,
          title: "الحرف المحلية",
          image: artisanatImage,
          description:
            "نقوم بتثمين الحرف التقليدية الأمازيغية من خلال دعم الحرفيين المحليين وتسهيل الوصول إلى الأسواق وتنظيم تدريبات للحفاظ على التقنيات الأصلية.",
          achievements: [
            "إنشاء تعاونية حرفيات (25 عضواً)",
            "المشاركة في 8 معارض حرفية",
            "إطلاق متجر إلكتروني",
            "زيادة بنسبة 60٪ في المبيعات",
          ],
          ongoing: [
            "تدريب على تصاميم جديدة",
            "توسيع المتجر الإلكتروني",
            "شراكات مع فنادق ومتاجر",
          ],
        },
        {
          icon: Globe,
          title: "الحفاظ على الثقافة",
          image: agricultureImage,
          description:
            "نعمل بنشاط على الحفاظ على الثقافة الأمازيغية والترويج لها من خلال تنظيم الفعاليات الثقافية وتوثيق التقاليد وتعليم اللغة الأمازيغية.",
          achievements: [
            "تنظيم مهرجان ثقافي سنوي",
            "أرشيف رقمي للتقاليد المحلية",
            "دروس الأمازيغية لأكثر من 100 طالب",
            "معرض دائم للتراث",
          ],
          ongoing: [
            "توثيق الأغاني التقليدية",
            "برنامج التبادل الثقافي",
            "إنشاء متحف مجتمعي",
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === "fr" ? "Nos Activités" : "أنشطتنا"}
        description={
          language === "fr"
            ? "Découvrez nos projets en agriculture durable, éducation, artisanat et préservation culturelle amazighe."
            : "اكتشف مشاريعنا في الزراعة المستدامة والتعليم والحرف والحفاظ على الثقافة الأمازيغية."
        }
        keywords="activités, projets, agriculture, éducation, artisanat, culture amazighe"
        path="/activities"
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

        {/* Activities */}
        <div className="space-y-16">
          {t.activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden shadow-strong">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mr-4">
                        <activity.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <CardTitle
                        className={`text-3xl ${language === "ar" ? "font-arabic" : ""}`}
                      >
                        {activity.title}
                      </CardTitle>
                    </div>
                    <p
                      className={`text-muted-foreground leading-relaxed ${
                        language === "ar" ? "font-arabic text-right" : ""
                      }`}
                    >
                      {activity.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Achievements */}
                    <div>
                      <h3
                        className={`font-bold text-lg mb-3 text-primary ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {language === "fr" ? "Réalisations" : "إنجازات"}
                      </h3>
                      <ul
                        className={`space-y-2 ${language === "ar" ? "text-right" : ""}`}
                      >
                        {activity.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start text-sm text-muted-foreground ${
                              language === "ar" ? "font-arabic flex-row-reverse" : ""
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ongoing Projects */}
                    <div>
                      <h3
                        className={`font-bold text-lg mb-3 text-secondary ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {language === "fr" ? "Projets en cours" : "المشاريع الجارية"}
                      </h3>
                      <ul
                        className={`space-y-2 ${language === "ar" ? "text-right" : ""}`}
                      >
                        {activity.ongoing.map((project, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start text-sm text-muted-foreground ${
                              language === "ar" ? "font-arabic flex-row-reverse" : ""
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Activities;
