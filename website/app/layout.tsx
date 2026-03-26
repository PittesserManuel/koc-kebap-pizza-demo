import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koc Kebap & Pizza Baden – Frischer Döner & Pizza in Baden",
  description:
    "Koc Kebap & Pizza Baden am Josefsplatz – Authentischer Döner, handgemachte Pizza und türkische Spezialitäten. Täglich 11–21 Uhr. 4.8★ auf Lieferando.",
  keywords: "Kebap Baden, Döner Baden, Pizza Baden, Koc Kebap, Josefsplatz Baden, Türkisch Essen Baden",
  openGraph: {
    title: "Koc Kebap & Pizza Baden",
    description: "Authentischer Döner & handgemachte Pizza am Josefsplatz Baden. 4.8★ auf Lieferando.",
    type: "website",
    locale: "de_AT",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌯</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,300;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
