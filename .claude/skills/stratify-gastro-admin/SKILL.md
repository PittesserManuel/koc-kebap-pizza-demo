---
name: stratify-gastro-admin
description: "Erstellt ein vollständiges Admin-Panel/Backend für Gastronomie-Bestell-WebApps im Auftrag von Stratify. Verwende diesen Skill IMMER wenn ein Admin-Dashboard, Restaurant-Backend, Bestell-Management, Küchen-Monitor oder Produkt-Verwaltung erstellt werden soll."
---

# Stratify Gastro Admin Panel

Baut das Betreiber-seitige Admin-Panel.

## Pflicht-Bereiche
1. Bestellübersicht – Live-Liste aller eingehenden Bestellungen
2. Küchen-Monitor – Bestellungen nach Status (Neu / In Zubereitung / Fertig)
3. Produkt-Verwaltung – Menü-Einträge bearbeiten, Preise ändern
4. Tages-Statistik – Umsatz, Bestellanzahl, beliebteste Gerichte

## Stack
- Next.js 14+ mit TypeScript
- Tailwind CSS
- Lokaler State / Mock-Daten für Demo
- Mobile-friendly

## Output
Alle Dateien unter /admin/

## Vercel-Deployment (PFLICHT)

Falls das Admin-Panel als Haupt-Deploy auf Vercel laufen soll und in einem Unterordner (`/admin/`) liegt:
Vercel erkennt Next.js NUR wenn `next` in der Root `package.json` steht UND im Root installiert wird.

**Nach dem Erstellen des Panels MÜSSEN diese Dateien im Repo-Root erstellt/aktualisiert werden (falls noch nicht durch Website-Skill geschehen):**

1. **Root `package.json`** – muss `next`, `react`, `react-dom` als Dependencies enthalten
2. **Root `vercel.json`** – muss `installCommand`, `buildCommand`, `outputDirectory` auf den richtigen Unterordner zeigen

Siehe `stratify-gastro-website/SKILL.md` für die genauen Templates.
Falls die Website bereits deployed wird und die Root-Dateien existieren, müssen diese NICHT nochmal geändert werden.
