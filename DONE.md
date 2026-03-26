# Koc Kebap & Pizza Baden – Stratify Demo ✅

Alle 3 Projekte sind fertig und build-getestet.

## Start-Befehle

### 1. Marketing-Website (Port 3000)
```bash
cd website && npm install && npm run dev
```
→ http://localhost:3000

### 2. Bestell-App (Port 3001)
```bash
cd orderapp && npm install && npm run dev
```
→ http://localhost:3001

### 3. Admin-Panel (Port 3002)
```bash
cd admin && npm install && npm run dev
```
→ http://localhost:3002

## Alle 3 gleichzeitig starten
```bash
cd website && npm install && npm run dev &
cd orderapp && npm install && npm run dev &
cd admin && npm install && npm run dev &
```

## Vercel Deploy

Jedes Projekt einzeln deployen:

```bash
# Website
cd website && npx vercel --prod

# Bestell-App
cd orderapp && npx vercel --prod

# Admin-Panel
cd admin && npx vercel --prod
```

## Übersicht

| Projekt | Pfad | Port | Beschreibung |
|---------|------|------|--------------|
| Website | `/website` | 3000 | Marketing-Landingpage mit Animationen |
| Bestell-App | `/orderapp` | 3001 | Kunden-Frontend: Menü → Warenkorb → Checkout |
| Admin-Panel | `/admin` | 3002 | Bestellverwaltung, Küchen-Monitor, Statistiken |

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (Website)

## Farben
- Paprika-Rot: #B83030
- Gold: #C9922A
- Dunkelgrün: #1F3A1F
