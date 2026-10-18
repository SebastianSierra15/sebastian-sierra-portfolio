import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";
import CustomCursor from "@/components/hero/CustomCursor";
import PageLoader from "@/components/PageLoader";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "Sebastián Sierra | Desarrollador Full-Stack";
const siteDescription =
  "Sebastián Sierra ayuda a empresas a entender sus necesidades, definir soluciones digitales y construir productos web, apps móviles, automatizaciones y sistemas de principio a fin.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sebastián Sierra",
  url: siteUrl,
  image: `${siteUrl}/assets/sebastian-sierra.jpg`,
  jobTitle: "Desarrollador Full-Stack",
  description: siteDescription,
  email: "sebsirra13@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  sameAs: [
    "https://github.com/SebastianSierra15",
    "https://www.linkedin.com/in/sebastián-sierra-417358263/",
  ],
  knowsAbout: [
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Automatización",
    "Diseño de producto",
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Sebastián Sierra",
  },
  description: siteDescription,
  applicationName: "Portafolio de Sebastián Sierra",
  authors: [{ name: "Sebastián Sierra", url: siteUrl }],
  creator: "Sebastián Sierra",
  publisher: "Sebastián Sierra",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Sebastián Sierra",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/sebastian-sierra.jpg",
        alt: "Sebastián Sierra, desarrollador full-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/sebastian-sierra.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Sebastián Sierra",
    "Full-Stack Developer",
    "Frontend Developer",
    "Portafolio",
    "Next.js",
    "React",
    "TypeScript",
    "Colombia",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${syne.variable} ${jetbrains.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PageLoader />
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <CustomCursor />
        <ChatWidget />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
