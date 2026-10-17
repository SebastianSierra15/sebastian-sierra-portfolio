import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "@/components/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sebastián Sierra | Full Stack Developer",
  description: "Portafolio de Sebastián Sierra, Full Stack Developer con foco en interfaces modernas, sistemas escalables y productos que funcionan.",
  keywords: ["Full Stack Developer", "Frontend Developer", "Next.js", "React", "TypeScript", "Colombia"],
  authors: [{ name: "Sebastián Sierra" }],
  metadataBase: new URL("http://localhost:3000"),
  openGraph: { title: "Sebastián Sierra | Full Stack Developer", description: "Interfaces claras y productos completos.", type: "website", locale: "es_CO", images: ["/assets/sebastian-sierra.jpg"] },
  twitter: { card: "summary_large_image", title: "Sebastián Sierra | Full Stack Developer", description: "Interfaces claras y productos completos." },
};

const personJsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: "Sebastián Sierra", jobTitle: "Full Stack Developer", email: "mailto:sebsirra13@gmail.com", url: "http://localhost:3000", sameAs: ["https://github.com/SebastianSierra15", "https://www.linkedin.com/in/sebasti%C3%A1n-sierra-417358263/"],
};
const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: "Sebastián Sierra Portfolio", url: "http://localhost:3000" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} /></body></html>;
}
