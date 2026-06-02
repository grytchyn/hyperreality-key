# Hyperreality Key API

Backend API for Hyperreality Key — the disinformation analysis platform.

## Architecture

```
[User Browser]
      ↓ (HTTPS)
[Cloudflare CDN]
      ↓
[Express.js API] ←→ [PostgreSQL (Primary)]
      ↓                 ↑
[React SPA]        [Redis Cache]
                      ↑
              [Prisma ORM]
```

## Tech Stack

- **Backend:** Express.js + TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Cache:** Redis
- **Auth:** JWT + Refresh tokens
- **Infrastructure:** Docker, GitHub Actions

## Setup

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

## API Endpoints

See `BIBLE.md` for full API documentation.

## Deployment

Deployed on Render.com with automatic builds from main branch.

## Monitoring

- **Sentry** — Error tracking
- **Prometheus** — Metrics
- **Grafana** — Dashboards
