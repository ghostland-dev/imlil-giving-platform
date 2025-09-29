import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DonationRequest {
  amount: number;
  type: "once" | "monthly";
  name?: string;
  email?: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing donation request");
    
    // Parse request body
    const { amount, type, name, email }: DonationRequest = await req.json();
    
    // Validate required fields
    if (!amount || !type) {
      throw new Error("Missing required fields: amount and type");
    }

    if (amount < 5) {
      throw new Error("Le montant minimum est de 5€");
    }

    if (amount > 100000) {
      throw new Error("Le montant maximum est de 100 000€");
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Convert amount to cents for storage
    const amountInCents = Math.round(amount * 100);

    // Save donation to database
    const { data: donation, error: dbError } = await supabaseClient
      .from("donations")
      .insert({
        amount: amountInCents,
        type,
        name: name || null,
        email: email || null,
        status: "pending",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save donation record");
    }

    console.log("Donation saved to database:", donation);

    // Here you would integrate with a payment processor like Stripe
    // For now, we'll simulate a successful payment
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update donation status to completed (in real implementation, this would be done via webhook)
    const { error: updateError } = await supabaseClient
      .from("donations")
      .update({ status: "completed" })
      .eq("id", donation.id);

    if (updateError) {
      console.error("Failed to update donation status:", updateError);
    }

    console.log("Donation processed successfully");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Donation processed successfully",
        donationId: donation.id,
        amount: amount,
        type: type,
        // In a real implementation, you would return a payment URL here
        paymentUrl: `${req.headers.get("origin")}/payment-success?donationId=${donation.id}`,
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
    console.error("Error in process-donation function:", error);
    
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