import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

// For dynamic classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Contact form schema with comprehensive validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  subject: z.string()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(100, { message: "Subject cannot exceed 100 characters" }),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message cannot exceed 1000 characters" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;