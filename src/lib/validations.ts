import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "L'objet doit contenir au moins 3 caractères" })
    .max(200, { message: "L'objet ne peut pas dépasser 200 caractères" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const donationFormSchema = z.object({
  amount: z
    .number()
    .min(5, { message: "Le montant minimum est de 5€" })
    .max(100000, { message: "Le montant maximum est de 100 000€" }),
  type: z.enum(["once", "monthly"]),
  name: z.string().trim().min(2).max(100).optional(),
  email: z.string().trim().email().max(255).optional(),
});

export type DonationFormData = z.infer<typeof donationFormSchema>;
