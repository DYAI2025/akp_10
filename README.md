# AKP Railway Site

React/Vite Single-Page-Site für **AKP Architekten Kauschke + Partner**. Das Projekt ist für ein Railway-Deployment vorbereitet und liefert nach dem Build statische Dateien über einen kleinen Node-Server aus.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Vitest + Testing Library für Render- und Server-Smoke-Tests
- Railway/Nixpacks Deployment

## Lokale Entwicklung

```bash
npm ci
npm run dev
```

## Qualitätschecks

```bash
npm run typecheck
npm test
npm run build
npm audit --omit=dev
npm run smoke:railway
```

Die CI führt diese Checks plus einen Smoke-Test des Railway-Startkommandos aus.

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

Railway setzt die Umgebungsvariable `PORT` automatisch. Der Production-Server bindet standardmäßig an `0.0.0.0`, damit Railway den Dienst erreichen kann. Der Server liefert gebaute Assets aus `dist/`, fällt für SPA-Routen auf `index.html` zurück, setzt lange Cache-Header für statische Assets und behandelt `SIGTERM`/`SIGINT` für saubere Container-Stopps.

## CI/CD

Die GitHub-Actions-Workflow-Datei `.github/workflows/ci.yml` prüft Deployments mit:

1. `npm ci`
2. `npm run typecheck`
3. `npm test`
4. `npm run build`
5. `npm audit --omit=dev`
6. Railway-Smoke-Test via `npm run smoke:railway` mit `/healthz`, SPA-Fallback, Content-Type- und 404-Prüfung

## Struktur

```text
src/
  App.tsx              # Seitenkomponenten und UI-Interaktion
  data/                # Projekt-, Partner-, Publikations- und Vita-Daten
  test/                # Vitest/Testing-Library Setup
  utils/               # Kleine Hilfsfunktionen
public/images/         # Statische Bildassets
scripts/serve-static.mjs # Production-Static-Server für Railway
scripts/*.test.mjs       # Server- und Deployment-nahe Tests
.github/workflows/ci.yml # Deployment-Readiness-CI
```

## Hinweise zur Adaptierbarkeit

- Inhalte sind überwiegend in `src/data/*` gekapselt und können ohne Layoutänderungen angepasst werden.
- Der Production-Server ist unabhängig von Vite Preview und damit explizit auf statisches Hosting ausgelegt.
- Für größere Erweiterungen empfiehlt sich, die aktuell in `src/App.tsx` gebündelten Sections schrittweise in `src/components/sections/*` auszulagern.
