import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing contact form submission");
    
    // Parse request body
    const { name, email, subject, message }: ContactRequest = await req.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Save contact to database
    const { error: dbError } = await supabaseClient
      .from("contacts")
      .insert({
        name,
        email,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save contact form submission");
    }

    console.log("Contact saved to database successfully");

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Send confirmation email to user
    const confirmationEmailResponse = await resend.emails.send({
      from: "Association Imlil <noreply@resend.dev>",
      to: [email],
      subject: "Confirmation de réception de votre message - Association Imlil",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #40E0D0;">Merci pour votre message, ${name}!</h2>
          <p>Nous avons bien reçu votre message concernant :</p>
          <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #40E0D0;">
            <strong>${subject}</strong>
          </p>
          <p>Nous vous répondrons dans les plus brefs délais, généralement sous 24-48 heures.</p>
          <p>En attendant, nous vous invitons à découvrir nos projets sur notre site web.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            Association Imlil - Développement durable et préservation de la culture amazighe<br>
            Douar Ait Said Oudaoud Imider, Commune Imider, Province de Tinghir, Maroc
          </p>
        </div>
      `,
    });

    // Send notification email to association
    const notificationEmailResponse = await resend.emails.send({
      from: "Association Imlil Contact Form <noreply@resend.dev>",
      to: ["contact@association-imlil.ma"], // Replace with actual association email
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #40E0D0;">Nouveau message de contact reçu</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Objet :</strong> ${subject}</p>
            <p><strong>Message :</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="font-size: 12px; color: #666;">
            Message reçu le ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully");
    console.log("Confirmation email:", confirmationEmailResponse);
    console.log("Notification email:", notificationEmailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        confirmationEmailId: confirmationEmailResponse.data?.id,
        notificationEmailId: notificationEmailResponse.data?.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});