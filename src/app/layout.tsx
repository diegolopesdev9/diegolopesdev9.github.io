import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, contato } from "@/data/perfil";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titulo = "Diego Lopes · Desenvolvedor Front-End & Full Stack";
const descricao =
  "Desenvolvedor Front-End & Full Stack em Sorocaba, SP. React, Next.js, TypeScript, UI/UX e agentes de IA. Sites, e-commerces e SaaS. Disponível para CLT, PJ e freelance.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: titulo,
    description: descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: titulo }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao, images: ["/og.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Lopes",
  jobTitle: "Desenvolvedor Front-End & Full Stack",
  url: SITE_URL,
  email: `mailto:${contato.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Sorocaba", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [contato.linkedin, contato.github],
  knowsAbout: ["React", "Next.js", "TypeScript", "UI/UX Design", "SEO técnico", "Agentes de IA", "E-commerce"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
