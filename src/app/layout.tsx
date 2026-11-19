import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Unbounded } from "next/font/google";
import { SITE_URL, contato } from "@/data/perfil";
import "./globals.css";

const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], weight: ["500", "700", "900"] });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const titulo = "Diego Lopes · Sites, sistemas e agentes de IA";
const descricao =
  "Sites, sistemas e agentes de IA para empresas que querem crescer na internet. Do design ao ar, você fala direto com quem faz.";

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

export const viewport: Viewport = { themeColor: "#0D0C0A", colorScheme: "dark", viewportFit: "cover" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Lopes",
  jobTitle: "Desenvolvedor de sites, sistemas e agentes de IA",
  url: SITE_URL,
  email: `mailto:${contato.email}`,
  sameAs: [contato.linkedin, contato.github],
  knowsAbout: ["Sites institucionais", "Sistemas e plataformas", "Agentes de IA", "Lojas virtuais", "UI/UX Design", "Next.js", "React", "TypeScript"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${hanken.variable} ${plexMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
