import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import agricultureImage from "@/assets/agriculture.jpg";
import educationImage from "@/assets/education.jpg";
import artisanatImage from "@/assets/artisanat.jpg";
import heroImage from "@/assets/hero-village.jpg";
import SEO from "@/components/SEO";

const Gallery = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();
  const [filter, setFilter] = useState<string>("all");

  const content = {
    fr: {
      title: "Galerie",
      subtitle: "Découvrez nos projets en images",
      filters: {
        all: "Tout",
        agriculture: "Agriculture",
        education: "Éducation",
        artisanat: "Artisanat",
        culture: "Culture",
      },
    },
    ar: {
      title: "المعرض",
      subtitle: "اكتشف مشاريعنا بالصور",
      filters: {
        all: "الكل",
        agriculture: "الزراعة",
        education: "التعليم",
        artisanat: "الحرف",
        culture: "الثقافة",
      },
    },
  };

  const images = [
    { src: agricultureImage, category: "agriculture", title: language === "fr" ? "Projet irrigation" : "مشروع الري" },
    { src: educationImage, category: "education", title: language === "fr" ? "Salle de classe" : "الفصل الدراسي" },
    { src: artisanatImage, category: "artisanat", title: language === "fr" ? "Artisanat local" : "الحرف المحلية" },
    { src: heroImage, category: "culture", title: language === "fr" ? "Village Imider" : "قرية إميضر" },
    { src: agricultureImage, category: "agriculture", title: language === "fr" ? "Cultures en terrasse" : "الزراعة المدرجات" },
    { src: educationImage, category: "education", title: language === "fr" ? "Programme alphabétisation" : "برنامج محو الأمية" },
    { src: artisanatImage, category: "artisanat", title: language === "fr" ? "Tapis amazigh" : "السجاد الأمازيغي" },
    { src: heroImage, category: "culture", title: language === "fr" ? "Festival culturel" : "المهرجان الثقافي" },
  ];

  const t = content[language];

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <SEO
        title={language === "fr" ? "Galerie" : "المعرض"}
        description={
          language === "fr"
            ? "Découvrez en images nos projets et activités dans les domaines de l'agriculture, l'éducation, l'artisanat et la culture."
            : "اكتشف بالصور مشاريعنا وأنشطتنا في مجالات الزراعة والتعليم والحرف والثقافة."
        }
        keywords="galerie, photos, images, projets, association imlil"
        path="/gallery"
      />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`mb-4 text-foreground ${language === "ar" ? "font-arabic" : ""}`}>
            {t.title}
          </h1>
          <p className={`text-xl text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(t.filters).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
              className={language === "ar" ? "font-arabic" : ""}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-strong transition-smooth"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                  <p
                    className={`text-primary-foreground font-semibold p-4 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {image.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
              {language === "fr" ? "Aucune image dans cette catégorie." : "لا توجد صور في هذه الفئة."}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Gallery;
