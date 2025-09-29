import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const Contact = () => {
  const { language } = useOutletContext<{ language: "fr" | "ar" }>();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes à votre écoute",
      form: {
        name: "Nom complet",
        email: "Email",
        subject: "Objet",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
      },
      info: {
        title: "Informations de Contact",
        address: "Douar Ait Said Oudaoud Imider, Commune Imider, Province de Tinghir, Maroc",
        phone: "+212 XXX XXX XXX",
        email: "contact@association-imlil.ma",
        hours: "Lun - Ven: 9h00 - 17h00",
      },
      success: "Message envoyé avec succès !",
      successDesc: "Nous vous répondrons dans les plus brefs délais.",
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "نحن في خدمتك",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
      },
      info: {
        title: "معلومات الاتصال",
        address: "دوار آيت سعيد أوداود إميضر، جماعة إميضر، إقليم تنغير، المغرب",
        phone: "+212 XXX XXX XXX",
        email: "contact@association-imlil.ma",
        hours: "الاثنين - الجمعة: 9:00 - 17:00",
      },
      success: "تم إرسال الرسالة بنجاح!",
      successDesc: "سنرد عليك في أقرب وقت ممكن.",
    },
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      // Submit to backend
      const { data } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData
      });
      
      if (data?.error) {
        throw new Error(data.error);
      }
      
      toast.success(t.success, {
        description: t.successDesc,
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err: any) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      toast.error(
        language === "fr" ? "Erreur de validation" : "خطأ في التحقق",
        {
          description: language === "fr" 
            ? "Veuillez vérifier les champs du formulaire" 
            : "يرجى التحقق من حقول النموذج",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title={language === "fr" ? "Contact" : "اتصل بنا"}
        description={
          language === "fr"
            ? "Contactez l'Association Imlil pour toute question ou demande d'information. Nous sommes à votre écoute."
            : "اتصل بجمعية إمليل لأي سؤال أو طلب معلومات. نحن في خدمتك."
        }
        keywords="contact, association, imlil, maroc, tinghir, imider"
        path="/contact"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className={`text-2xl ${language === "ar" ? "font-arabic" : ""}`}>
                  {language === "fr" ? "Envoyez-nous un message" : "أرسل لنا رسالة"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          language === "ar" ? "font-arabic text-right" : ""
                        }`}
                      >
                        {t.form.name}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`${language === "ar" ? "text-right" : ""} ${errors.name ? "border-destructive" : ""}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-destructive mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          language === "ar" ? "font-arabic text-right" : ""
                        }`}
                      >
                        {t.form.email}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`${language === "ar" ? "text-right" : ""} ${errors.email ? "border-destructive" : ""}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        language === "ar" ? "font-arabic text-right" : ""
                      }`}
                    >
                      {t.form.subject}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${language === "ar" ? "text-right" : ""} ${errors.subject ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-sm text-destructive mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        language === "ar" ? "font-arabic text-right" : ""
                      }`}
                    >
                      {t.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`${language === "ar" ? "text-right font-arabic" : ""} ${errors.message ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        {t.form.sending}
                      </>
                    ) : (
                      t.form.send
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className={`text-xl ${language === "ar" ? "font-arabic" : ""}`}>
                  {t.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full gradient-cool flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {language === "fr" ? "Adresse" : "العنوان"}
                    </p>
                    <p
                      className={`text-sm text-muted-foreground ${
                        language === "ar" ? "font-arabic text-right" : ""
                      }`}
                    >
                      {t.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {language === "fr" ? "Téléphone" : "الهاتف"}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">{t.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {language === "fr" ? "Horaires" : "أوقات العمل"}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.info.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-soft">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground" />
              </div>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
