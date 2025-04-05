"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { cn, contactFormSchema, ContactFormData } from "@/lib/utils";
import { sendContactForm } from "@/lib/api";
import { CircleLoader } from "react-spinners";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      await sendContactForm(data);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-4 justify-start">
          <div>
            <Label htmlFor="name">Name*</Label>
            <Input
              id="name"
              {...register("name")}
              className={cn("w-full", errors.name && "border-red-500")}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={cn("w-full", errors.name && "border-red-500")}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="subject">Subject*</Label>
          <Input
            id="subject"
            {...register("subject")}
            className={cn(errors.subject && "border-red-500")}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message">Message*</Label>
          <Textarea
            id="message"
            {...register("message")}
            className={cn("min-h-[120px]", errors.message && "border-red-500")}
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold text-white hover:text-golder"
        >
          {isLoading ? (
            <CircleLoader size={20} color="#ffffff" />
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
