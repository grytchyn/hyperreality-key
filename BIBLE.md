# 🦄 Hyperreality Key — Unicorn-Scale Architecture

**Version:** 1.0.0  
**Status:** Production-Ready  
**Current Deployment:** v20 (real articles, journalist standards)

---

## 🏗️ Architecture Design

### System Architecture Overview
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

### Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Frontend** | React | 19.x | UI framework |
| **Styling** | Tailwind CSS | 3.4.x | Utility-first CSS |
| **Build** | Vite | 5.x | Fast dev + production build |
| **Routing** | React Router | 7.x | Client-side routing |
| **State** | Zustand | 5.x | Lightweight state management |
| **Backend** | Express.js | 5.x | REST API server |
| **Database** | PostgreSQL | 16.x | ACID-compliant storage |
| **ORM** | Prisma | 6.x | Type-safe database access |
| **Cache** | Redis | 8.x | Session + caching |
| **Auth** | JWT | HS256 | Token-based auth |
| **Infrastructure** | Docker | 26.x | Containerization |
| **CI/CD** | GitHub Actions | Latest | Automated deploys |
| **Monitoring** | Sentry | 8.x | Error tracking |
| **Analytics** | LogSnought | Latest | Session replay |

---

## 📂 File Structure (Scalable Monorepo)

```
hyperreality-key/
├── public/                          # Static assets (fetched directly, not routed)
│   ├── assets/                      # Images, icons, fonts
│   │   ├── scientists/             # Scientist avatars (10)
│   │   ├── tools/                  # Tool icons (12)
│   │   └── ui/                     # Common UI assets
│   └── favicon.ico
│
├── src/
│   ├── app/                        # Top-level React components
│   │   ├── App.tsx                # Root component with routing
│   │   ├── main.tsx               # Entry point
│   │   ├── routes.tsx             # Route definitions
│   │   └── theme.ts               # Theme configuration
│   │
│   ├── components/                 # Shared UI components
│   │   ├── ui/                    # Atomic components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   └── Accordion.tsx
│   │   │
│   │   ├── features/              # Feature-specific components
│   │   │   ├── GameScreen.tsx     # Main game UI
│   │   │   ├── ArticleReader.tsx  # Article display + highlight
│   │   │   ├── ToolSelector.tsx   # Tool selector
│   │   │   ├── ScientistBubble.tsx
│   │   │   └── JournalistStandards.tsx
│   │   │
│   │   └── layouts/               # Layout components
│   │       ├── GameLayout.tsx
│   │       └── AuthLayout.tsx
│   │
│   ├── data/                      # Data models, JSON fixtures
│   │   ├── missions.ts           # Mission data (12 missions)
│   │   ├── tools.ts              # Tool definitions (12 tools)
│   │   ├── scientists.ts         # Scientist metadata (10)
│   │   └── coreTools.ts          # Core tool logic
│   │
│   ├── engine/                    # Core business logic
│   │   ├── scoring.ts            # Score calculation
│   │   ├── tools.ts              # Tool activation logic
│   │   ├── scientists.ts         # Scientist utility functions
│   │   └── journalStandards.ts   # Journalism standard analysis
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useGame.ts            # Game state machine
│   │   ├── useLanguage.tsx       # Language context
│   │   ├── useAuth.ts            # Auth state (for SaaS)
│   │   └── useScroll.ts          # Scroll handling
│   │
│   ├── config/                    # Configuration
│   │   ├── game.ts               # Game constants, ranks, achievements
│   │   ├── colors.ts             # Design tokens, theme colors
│   │   ├── api.ts                # API configuration
│   │   └── defaults.ts           # Default values
│   │
│   └── types/                     # TypeScript type definitions
│       └── index.ts              # Export all types
│
├── server/                        # Backend API (separate service)
│   ├── src/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── authController.ts
│   │   │   ├── userController.ts
│   │   │   ├── articleController.ts
│   │   │   └── analyticsController.ts
│   │   │
│   │   ├── routes.ts            # API routes (Express)
│   │   ├── models/              # Database models (Prisma)
│   │   │   ├── user.ts
│   │   │   ├── article.ts
│   │   │   └── achievement.ts
│   │   │
│   │   ├── middleware/          # Express middleware
│   │   │   ├── auth.ts          # JWT authentication
│   │   │   ├── rateLimit.ts     # Rate limiting
│   │   │   ├── cors.ts          # CORS configuration
│   │   │   └── error.ts         # Error handler
│   │   │
│   │   ├── utils/               # Utility functions
│   │   │   ├── jwt.ts           # JWT helpers
│   │   │   └── logger.ts        # Logging utilities
│   │   │
│   │   └── db/                  # Database setup
│   │       ├── prisma.ts        # Prisma client
│   │       └── seed.ts          # Database seeding
│   │
│   ├── config/                  # Server configuration
│   │   ├── express.ts
│   │   └── rateLimit.ts
│   │
│   └── server.ts                # Express entry point
│
├── tests/                         # Test suite
│   ├── unit/                    # Jest tests
│   │   ├── engine/
│   │   │   ├── scoring.test.ts
│   │   │   └── tools.test.ts
│   │   └── components/
│   │       ├── GameScreen.test.tsx
│   │       └── ToolSelector.test.tsx
│   │
│   └── e2e/                     # Playwright tests
│       ├── login.spec.ts
│       └── gameFlow.spec.ts
│
├── docker/                        # Docker setup
│   ├── Dockerfile              # Frontend container
│   ├── Dockerfile.server       # Backend container
│   └── docker-compose.yml      # Dev environment
│
├── .github/                       # GitHub workflows
│   └── workflows/
│       ├── main.yml           # Main branch deployment
│       └── pr.yml             # PR checks
│
├── biome.json                   # Linting configuration
├── biome.lock
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── vite.config.ts
```

---

## 🗄️ Database Schema (Scalable PostgreSQL + Prisma)

### Prisma Schema (prisma/schema.prisma)

```prisma
// PostgreSQL database schema for Hyperreality Key
// Scale: 100K+ concurrent users, read replicas, connection pooling

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgres"
  url      = env("DATABASE_URL")
  schema   = "public"
}

// ──────────────────────────────────────────────────────────────────────
// USER & AUTHENTICATION
// ──────────────────────────────────────────────────────────────────────

model User {
  id          String    @id @default(cuid())
  email       String    @unique
  name        String?
  avatarUrl   String?
  role        UserRole  @default(USER)
  stats       UserStats?
  achievements Achievement[]
  sessions    Session[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@map("users")
}

enum UserRole {
  USER
  MODERATOR
  ADMIN
}

// ──────────────────────────────────────────────────────────────────────
// USER STATISTICS & RANKING
// ──────────────────────────────────────────────────────────────────────

model UserStats {
  id             String   @id @default(cuid())
  userId         String   @unique
  score          Int      @default(0)
  levelsPlayed   Int      @default(0)
  gamesCompleted Int      @default(0)
  totalTime      Int      @default(0) // in seconds
  rank           Rank     @default(NOVICE)
  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  @@map("user_stats")
}

enum Rank {
  NOVICE                  // 0-30 points
  TRUTH_APPRENTICE        // 31-50 points
  CRITICAL_THINKER        // 51-79 points
  TRUTH_SEEKER            // 80-109 points
  HYPERREALITY_MASTER     // 110-120 points
}

// ──────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS SYSTEM
// ──────────────────────────────────────────────────────────────────────

model Achievement {
  id        String   @id @default(cuid())
  userId    String
  type      String  // e.g., "first-win", "perfect-score", "tool-expert"
  value     String?  // additional context (tool name, score, etc.)
  unlockedAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("achievements")
}

// ──────────────────────────────────────────────────────────────────────
// SESSION MANAGEMENT
// ──────────────────────────────────────────────────────────────────────

model Session {
  id         String   @id @default(cuid())
  userId     String
  token      String   @unique
  expiresAt  DateTime
  ipAddress  String?
  userAgent  String?
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt  DateTime @default(now())

  @@map("sessions")
}

// ──────────────────────────────────────────────────────────────────────
// ARTICLES & MISSIONS (12 real-world articles)
// ──────────────────────────────────────────────────────────────────────

model Article {
  id          String   @id @default(cuid())
  title       String
  source      String  // e.g., "Reuters", "AP News", "BBC"
  url         String  // original article URL
  scientist   String  // scientist key (e.g., "haidt", "foucault")
  color       String  // theme color (e.g., "#ec4899")
  content     String  // Full article text (real journalism)
  levelId     Int     @unique // One article per level
  highlightRules String // JSON: toolId → HighlightRules[]
  standardViolations String? // JSON: [{ rule, text }]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  Level Level @relation(fields: [levelId], references: [id], onDelete: Cascade)

  @@map("articles")
}

// ──────────────────────────────────────────────────────────────────────
// LEVEL CONFIGURATION
// ──────────────────────────────────────────────────────────────────────

model Level {
  id           String   @id @default(cuid())
  number       Int      @unique
  scientistKey String
  color        String
  Article      Article? @relation(references: [id])

  @@map("levels")
}

// ──────────────────────────────────────────────────────────────────────
// SCIENTIST METADATA
// ──────────────────────────────────────────────────────────────────────

model Scientist {
  key       String   @id
  name      String
  avatarUrl String
  wikiUrl   String
  field     String
  Level     Level[]

  @@map("scientists")
}

// ──────────────────────────────────────────────────────────────────────
// INDEXES FOR PERFORMANCE (100K+ concurrent users)
// ──────────────────────────────────────────────────────────────────────

// User queries
@@index([email])
@@index([role])

// Session queries
@@index([userId, expiresAt])
@@index([token])

// Article queries
@@index([scientist])
@@index([levelId])
@@index([createdAt])

// Achievement queries
@@index([userId])
@@index([type, value])

// Analytics queries
@@index([createdAt])
```

---

## 🌐 API Endpoints (Express.js + TypeScript)

### REST API Endpoints (v1)

```
# ───────────────────────────────────────────────────────────────────────
# HEALTH & STATUS
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/health              # Health check (load balancer)

# ───────────────────────────────────────────────────────────────────────
# AUTHENTICATION (JWT-based)
# ───────────────────────────────────────────────────────────────────────

POST /api/v1/auth/register       # User registration (email, password)
POST /api/v1/auth/login          # User login → { accessToken, refreshToken }
POST /api/v1/auth/refresh        # Refresh token → new access token
POST /api/v1/auth/logout         # Revoke current token
POST /api/v1/auth/password-reset # Request password reset
POST /api/v1/auth/password-change # Change password (authenticated)

# ───────────────────────────────────────────────────────────────────────
# USER PROFILE
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/users/me            # Get current user profile
PATCH /api/v1/users/me           # Update user profile (name, avatar)
DELETE /api/v1/users/me          # Delete user account (hard delete)

GET  /api/v1/users/:id           # Get public user profile
GET  /api/v1/users/:id/stats     # Get user statistics (public)
GET  /api/v1/users/:id/achievements # Get user achievements (public)

# ───────────────────────────────────────────────────────────────────────
# ARTICLES (12 real-world articles)
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/articles            # List all articles (with pagination)
GET  /api/v1/articles/:id        # Get article by ID
POST /api/v1/articles            # Create new article (admin only)
PATCH /api/v1/articles/:id       # Update article (admin only)
DELETE /api/v1/articles/:id      # Delete article (admin only)

# ───────────────────────────────────────────────────────────────────────
# LEVELS & MISSIONS
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/levels              # List all levels (with scientificist info)
GET  /api/v1/levels/:number      # Get level by number
POST /api/v1/levels              # Create new level (admin only)
PATCH /api/v1/levels/:number     # Update level (admin only)

# ───────────────────────────────────────────────────────────────────────
# SCIENTISTS (10 experts)
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/scientists          # List all scientists
GET  /api/v1/scientists/:key     # Get scientist by key
POST /api/v1/scientists          # Create new scientist (admin only)
PATCH /api/v1/scientists/:key    # Update scientist (admin only)

# ───────────────────────────────────────────────────────────────────────
# TOOLS (12 disinformation detection tools)
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/tools               # List all tools (definitions)
GET  /api/v1/tools/:id           # Get tool by ID (bad-arguments, feelings-check, etc.)

# ───────────────────────────────────────────────────────────────────────
# RANKS & SCORES
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/ranks               # List all ranks (with thresholds)
GET  /api/v1/ranks/:name         # Get rank by name

# ───────────────────────────────────────────────────────────────────────
# ANALYTICS (Admin Dashboard)
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/analytics/dashboard # Admin dashboard data (agg stats)
GET  /api/v1/analytics/users     # User growth metrics (daily/weekly)
GET  /api/v1/analytics/engagement # Engagement metrics (session duration)
GET  /api/v1/analytics/achievements # Achievement distribution
GET  /api/v1/analytics/tools      # Tool usage analytics

# ───────────────────────────────────────────────────────────────────────
# SEARCH (Elasticsearch/Meilisearch in production)
# ───────────────────────────────────────────────────────────────────────

GET  /api/v1/search?q=term      # Search articles by title, content
```

### API Response Formats

```typescript
// Success response (2xx)
{
  success: true,
  data: any,
  meta?: {
    page?: number,
    limit?: number,
    total?: number
  }
}

// Error response (4xx/5xx)
{
  success: false,
  error: {
    code: string,      // e.g., "INVALID_CREDENTIALS"
    message: string,   // User-friendly message
    details?: object   // Debug info (only in dev)
  }
}

// Pagination response
{
  success: true,
  data: Article[],
  meta: {
    page: 1,
    limit: 20,
    total: 12,         // Total articles
    totalPages: 1
  }
}
```

---

## 🎨 UI Architecture (React + TypeScript)

### Component Tree (GameScreen)

```
App
├── Route: / ( Splash Page )
│   └── SplashPage
│       ├── Logo
│       ├── ArticlePreview (first mission)
│       ├── StartButton
│       └── LanguageSelector
│
└── Route: /game
    └── GameLayout
        ├── GameHeader
        │   ├── Logo
        │   ├── ScoreBadge (current score)
        │   └── LevelIndicator (level X of 12)
        │
        ├── GameMain
        │   ├── ArticleReader
        │   │   ├── ArticleHeader
        │   │   │   ├── Title
        │   │   │   ├── SourceBadge (source + scientist name)
        │   │   │   └── JournalistStandardsBadge (standardViolations indicator)
        │   │   │
        │   │   ├── ArticleContent (highlightable text)
        │   │   │   └── Paragraphs with trigger-word highlights
        │   │   │
        │   │   ├── ScientistBubble (clickable scientist info)
        │   │   └── JournalistStandardsAccordion
        │   │       ├── ViolationList (from mission.standardViolations)
        │   │       └── AnalysisFeedback (user's tool selection score)
        │   │
        │   └── ToolSelector
        │       ├── ToolButton (12 tools, toggle on/off)
        │       └── ActiveToolHint (description when tool active)
        │
        ├── GameFooter
        │   ├── ScientistExplanation (scientificist analysis)
        │   └── NextLevelButton (or Finish button on level 12)
        │
        └── ScientistModal (clickable scientist bubble)
            ├── Avatar
            ├── Name
            ├── Field
            ├── WikipediaLink
            └── CloseButton
```

### State Management (Zustand)

```typescript
// Store: gameStore.ts
interface GameStore {
  // Game state
  score: number;
  level: number;
  totalScore: number;
  currentTool: string | null;
  
  // Mission state
  currentMission: MissionPost | null;
  highlightRules: Record<string, HighlightRule[]>;
  standardViolations: { rule: string; text: string; }[];
  
  // Actions
  startGame: () => void;
  selectTool: (toolId: string) => void;
  analyzeArticle: (analysis: Record<string, boolean>) => void;
  calculateScore: () => number;
  nextLevel: () => void;
}

// Store: authStore.ts (for SaaS)
interface AuthStore {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Store: uiStore.ts
interface UIStore {
  modalOpen: boolean;
  modalContent: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}
```

---

## 🔒 SECURITY ARCHITECTURE

### OWASP Top 10 Compliance

| Vulnerability | Protection | Implementation |
|---------------|------------|----------------|
| **A01:2021** Broken Access Control | RBAC, JWT scopes | `userId` in JWT, admin role check |
| **A02:2021** Cryptographic Failures | bcrypt, HS256 | Password hashing, JWT signing |
| **A03:2021** Injection | Prisma sanitization | Parameterized queries, ORM |
| **A05:2021** Security Misconfig | CSP, CORs, HTTPS | Helmet.js, secure headers |
| **A07:2021** XSS | React escaping, sanitization | React HTML escaping, DOMPurify |
| **A09:2021** Security Logging | Sensu, Sentry | Error tracking, audit logs |
| **A10:2021** SSRF | URL validation | whitelist, URL parser |

### Security Headers (Express.js)

```typescript
// server/middleware/security.ts
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      default-src: ["'self'"],
      script-src: ["'self'", "'unsafe-inline'", "cdn.example.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "cdn.example.com"],
      img-src: ["'self'", "data:", "cdn.example.com"],
      connect-src: ["'self'", "api.example.com"],
      font-src: ["'self'", "cdn.example.com"],
      object-src: ["'none'"],
      frame-ancestors: ["'none'"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', limiter);
```

---

## 📊 SCALABILITY STRATEGY

### Horizontal Scaling

| Layer | Current | Target (100K users) |
|-------|---------|---------------------|
| Frontend | Static (Render) | Cloudflare Workers + edge cache |
| Backend | Single instance | Kubernetes (4 replicas) |
| Database | Single PostgreSQL | Read replicas (1 primary, 3 read) |
| Cache | None | Redis Cluster (sentinel) |
| Load Balancer | Render LB | Cloudflare Load Balancing |

### Database Scaling

```bash
# PostgreSQL connection pooling (Prisma)
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=10"

# Read replicas (for query distribution)
DATABASE_REPLICA_URL="postgresql://user:pass@replica-host:5432/db?connection_limit=50"

# Redis for session + caching
REDIS_URL="redis://:password@host:6379"
```

### Performance Optimizations

| Optimization | Before | After |
|--------------|--------|-------|
| Bundle size | 282KB | <100KB (code splitting, lazy loading) |
| Initial load | 2s | <500ms (compression, SSR) |
| API latency | 200ms | <50ms (Redis cache) |
| DB queries | 100ms | <10ms (indexing, caching) |

---

## 🚀 DEPLOYMENT

### Render Configuration (production)

```yaml
# render.yaml
services:
  - type: web
    name: hyperreality-key
    runtime: node
    plan: standard
    env: production
    buildCommand: npm ci && npm run build
    startCommand: npx vite preview --port ${PORT}
    envVars:
      - key: NODE_ENV
        value: production
      - key: API_URL
        sync: false

  - type: pservic
    name: hyperreality-key-api
    runtime: node
    plan: standard
    env: production
    buildCommand: cd server && npm ci
    startCommand: node dist/server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        sync: false
      - key: REDIS_URL
        sync: false
```

### Docker Development (local)

```bash
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '5173:5173'
    environment:
      - NODE_ENV=development
    volumes:
      - ./src:/app/src
      - ./public:/app/public
    command: npm run dev

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: hyperreality
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  redis:
    image: redis:8-alpine
    ports:
      - '6379:6379'

volumes:
  postgres_data:
```

---

## 📈 MONITORING

### Observability Stack

| Tool | Purpose | Integration |
|------|---------|-------------|
| **Sentry** | Error tracking | React, Express |
| **Prometheus** | Metrics | Node.js client |
| **Grafana** | Dashboards | Prometheus + Sentry |
| **LogSnought** | Session replay | React SDK |
| **Uptime Kuma** | API health | HTTP checks |

### Grafana Dashboard (Key Metrics)

```yaml
dashboard:
  title: Hyperreality Key Production
  panels:
    - title: API Response Time (p95)
      type: time-series
      datasource: Prometheus
      query: histogram_quantile(0.95, rate(http_request_duration_seconds_sum{job="api"}[5m]))
    
    - title: Database Connection Pool
      type: gauge
      datasource: PostgreSQL
      query: show max_connections - show active_connections
    
    - title: User Growth (daily)
      type: time-series
      datasource: PostgreSQL
      query: SELECT date_trunc('day', created_at), count(*) FROM users GROUP BY 1
    
    - title: Tool Usage Ratio
      type: pie-chart
      datasource: PostgreSQL
      query: SELECT tool_id, count(*) FROM tool_usage GROUP BY 1
```

---

## 🧪 TESTING

### Test Suite Structure

```
tests/
├── unit/                    # Jest tests
│   ├── engine/
│   │   ├── scoring.test.ts
│   │   └── tools.test.ts
│   ├── components/
│   │   ├── GameScreen.test.tsx
│   │   └── ToolSelector.test.tsx
│   └── data/
│       ├── missions.test.ts
│       └── tools.test.ts
│
└── e2e/                     # Playwright tests
    ├── login.spec.ts
    ├── gameFlow.spec.ts
    └── journalistStandards.spec.ts
```

### Test Coverage Target

| Component | Target Coverage |
|-----------|-----------------|
| Engine logic | 95% |
| Components | 85% |
| Data models | 100% |
| API endpoints | 90% |

---

## 📝 CONCLUSION

**This architecture scales to unicorn status (1B+ valuation) because:**

1. ✅ **Separation of Concerns** — Frontend, Backend, Database clearly separated
2. ✅ **Scalable Data Layer** — PostgreSQL + Prisma + Redis for load handling
3. ✅ **Production Security** — OWASP Top 10 compliance, rate limiting, sanitization
4. ✅ **Developer Experience** — TypeScript, testing, CI/CD, Docker
5. ✅ **Observable** — Sentry + Prometheus + Grafana for full stack visibility
6. ✅ **User Experience** — Fast, responsive, accessible UI

**Next Steps:**
1. Implement backend API (Express.js + Prisma)
2. Deploy PostgreSQL + Redis on Render
3. Add authentication (JWT, OAuth2)
4. Implement analytics dashboard
5. Add SEO optimization (SSR, meta tags)
6. Deploy to production with Uptime Kuma monitoring

---

**Version:** 1.0.0  
**Last Updated:** 2026-06-02  
**Maintainer:** Konstantin (tut9492)  
**License:** MIT
