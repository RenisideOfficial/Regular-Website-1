import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Harold Capital",
  description:
    "A power house of Risk management which is used for significant investment returns.",
  icons: {
    icon: "/harold-01.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-grotesk">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
