---
name: stratify-gastro-website
description: "Erstellt professionelle, animierte Demo-Websites für Gastronomie-Betriebe (Restaurants, Bowl-Läden, Pizzerien etc.) im Auftrag von Stratify. Verwende diesen Skill IMMER wenn der User eine Restaurant-Website, Gastro-Landingpage, Demo-Seite für einen Lead, oder eine Webpräsenz für ein Essens-/Getränke-Lokal erstellen will."
---

# Stratify Gastro Website Builder

Erstellt hochwertige, animierte Demo-Websites für Gastronomie-Betriebe.
Qualitätslevel: Top 0.01% – inspiriert von girlandthegoat.com, luckyfolks.fr, restaurant-kei.fr.

## SCHRITT 1: Daten sammeln

Pflichtfelder: Restaurant-Name, Branche, Adresse, Telefon, Öffnungszeiten, Speisekarten-Highlights, Über-Uns-Text.
Wenn Daten fehlen: Farben aus Branche ableiten, Unsplash-Bilder verwenden, authentischen Text generieren.

## SCHRITT 2: Design-Entscheidungen

Traditionell/Gemütlich (Pizzeria, Kebap, Wirtshaus):
- Warme Töne, eher hell
- Fonts: Libre Baskerville + Source Serif 4
- Animationen: Sanft, einladend
- Texturen, warme Bilder

## SCHRITT 3: Website bauen

Output für GitHub-Repo: Next.js Projektstruktur mit page.tsx, Tailwind CSS, Framer Motion, separate Komponenten.

Pflicht-Sektionen:
1. Header – Fixed, transparent → solid beim Scrollen
2. Hero – 100vh, Bild, animierte Headline, CTAs
3. Marquee – Endlos-Lauftext
4. Speisekarte-Teaser – 3-6 Highlights als Grid
5. Über Uns – Asymmetrisches Layout
6. Highlight – Fullwidth Parallax-Bild
7. Öffnungszeiten & Standort
8. Social Proof – Bewertungen
9. Bestell-CTA
10. Footer

Pflicht-Features:
- Responsive Mobile-First
- 5+ Scroll-Animationen
- Sticky Header
- Google Fonts
- Demo-Banner: "Dies ist eine Demo von Stratify – stratify.at"
- "Powered by Stratify" im Footer

## Vercel-Deployment (PFLICHT)

Die Website liegt in einem Unterordner (`/website/`), nicht im Repo-Root.
Vercel erkennt Next.js NUR wenn `next` in der Root `package.json` steht UND im Root installiert wird.

**Nach dem Erstellen der Website MÜSSEN diese Dateien im Repo-Root erstellt werden:**

1. **Root `package.json`** (falls noch nicht vorhanden):
```json
{
  "name": "PROJEKTNAME",
  "private": true,
  "scripts": {
    "build": "npm run build --prefix website",
    "dev": "npm run dev --prefix website",
    "start": "npm run start --prefix website"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

2. **Root `vercel.json`** (falls noch nicht vorhanden):
```json
{
  "installCommand": "npm install && npm install --prefix website",
  "buildCommand": "npm run build --prefix website",
  "outputDirectory": "website/.next",
  "framework": "nextjs"
}
```

**Warum:** Vercel prüft die Root `package.json` auf `next` als Dependency für die Framework-Erkennung. Der Custom `installCommand` muss BEIDE installieren: Root (für Versionserkennung) und Website (für den eigentlichen Build).
