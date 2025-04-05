import { ContactFormData } from "./utils";

export async function sendContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.message || 
      `Request failed with status ${response.status}`
    );
  }

  return response.json();
}