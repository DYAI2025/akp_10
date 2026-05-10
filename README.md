# AKP Railway Site

React/Vite Single-Page-Site für **AKP Architekten Kauschke + Partner**. Das Projekt ist für ein Railway-Deployment vorbereitet und liefert nach dem Build statische Dateien über einen kleinen Node-Server aus.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Railway/Nixpacks Deployment

## Lokale Entwicklung

```bash
npm ci
npm run dev
```

## Qualitätschecks

```bash
npm run typecheck
npm run build
npm audit --omit=dev
```

## Production-Start lokal testen

```bash
npm run build
PORT=3000 npm run start
```

Danach ist die App unter <http://localhost:3000> erreichbar. Der Healthcheck liegt unter <http://localhost:3000/healthz>.

## Railway Deployment

Das Repo enthält eine `railway.json` mit expliziten Build- und Start-Kommandos:

- Build: `npm ci && npm run build`
- Start: `npm run start`
- Healthcheck: `/healthz`

Railway setzt die Umgebungsvariable `PORT` automatisch. Der Production-Server bindet standardmäßig an `0.0.0.0`, damit Railway den Dienst erreichen kann.

## Struktur

```text
src/
  App.tsx              # Seitenkomponenten und UI-Interaktion
  data/                # Projekt-, Partner-, Publikations- und Vita-Daten
  utils/               # Kleine Hilfsfunktionen
public/images/         # Statische Bildassets
scripts/serve-static.mjs # Production-Static-Server für Railway
```

## Hinweise zur Adaptierbarkeit

- Inhalte sind überwiegend in `src/data/*` gekapselt und können ohne Layoutänderungen angepasst werden.
- Der Production-Server ist unabhängig von Vite Preview und damit explizit auf statisches Hosting ausgelegt.
- Für größere Erweiterungen empfiehlt sich, die aktuell in `src/App.tsx` gebündelten Sections schrittweise in `src/components/sections/*` auszulagern.
