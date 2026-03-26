---
name: stratify-gastro-orderapp
description: "Erstellt funktionale Bestell-WebApps (Kunden-Frontend) für Gastronomie-Betriebe im Auftrag von Stratify. Verwende diesen Skill IMMER wenn eine Bestell-App, Food-Ordering-App, Menü-App, Warenkorb-System oder Checkout-Flow für ein Restaurant erstellt werden soll."
---

# Stratify Gastro Order App

Baut das Kunden-seitige Bestell-Frontend: Menü → Produktdetails → Warenkorb → Checkout.

## Stack
- Next.js 14+ mit TypeScript
- Tailwind CSS
- Lokaler State (kein Backend nötig für Demo)
- Mobile-First

## Pflicht-Features
- Menü mit Kategorien-Navigation
- Produktkarten mit Bild, Name, Beschreibung, Preis
- Warenkorb (lokaler State, kein Backend)
- Checkout-Flow (Name, Adresse, Bezahlmethode – Demo)
- Demo-Banner: "Dies ist eine Demo von Stratify – stratify.at"
- "Powered by Stratify" im Footer

## Speisekarte
Verwende die echte Speisekarte aus der CLAUDE.md.
Erfinde realistische Preise wenn keine vorhanden (Döner ~€8-12, Pizza ~€9-14, Pide ~€8-11).

## Output
Alle Dateien unter /orderapp/
