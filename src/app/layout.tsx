import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Margarida Moda Festa | Locação de Trajes em Santa Rosa de Viterbo / SP",
  description: "Boutique tradicional de locação de vestidos de festa e trajes masculinos. Atendimento personalizado com a tradição da Dona Margarida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-primary selection:bg-gold/20`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
