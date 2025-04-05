import { NextResponse } from "next/server";
import  {transport, mailOption} from "@/config/nodemailer";
import { contactFormSchema } from "@/lib/utils";
import type { ContactFormData } from "@/lib/utils";

// api endpoint
export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate the data
    const validatedData = contactFormSchema.parse(body);
    
    // Send email
    await transport.sendMail({
      ...mailOption,
      text: `
        New contact form submission:
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h1>New contact form submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred"
      },
      { status: 500 }
    );
  }
}