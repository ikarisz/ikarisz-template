# ikarisz WebApp Template Suite (Rigen Ember Console 3D)

A production-grade, zero-API dependency WebApp mockup and template collection built with strict high-contrast dark console design principles:
- **Design System**: Rigen Ember Console Dark Glassmorphism with tactile 3D skeuomorphic bevels, warm charcoal surfaces, and deep glass cards.
- **Strict Color Architecture**: Solid Royal Blue (`#2563EB`) preserved as the sole primary CTA color.
- **Zero Unicode Emojis**: 100% crisp vector SVG icons.
- **Zero API Required**: Fully interactive, self-contained state transitions with rich realistic mock data.
- **Realistic Skeleton Loaders**: High-contrast charcoal opacity pulse state transitions across all templates.
- **Responsive & Centered**: Optimized for Desktop, Tablet (820px), and Mobile (390px) viewports with grid-stabilized template switcher.
- **Unified Identity**: All templates unified under the **`ikarisz`** product family.

[![GitHub Repository](https://img.shields.io/badge/GitHub-ikarisz--template-181717?style=flat&logo=github)](https://github.com/ikarisz/ikarisz-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Repository Structure

```
ikarisz-templates/
├── index.html                  # Master Suite Hub & Viewport Console
├── templates/                  # Modular WebApp Templates
│   ├── saas/                   # ikarisz SaaS Cloud Dashboard
│   │   └── index.html
│   ├── store/                  # ikarisz Game Arsenal & Digital Store
│   │   └── index.html
│   └── ai/                     # ikarisz AI Engineering Chat (Floating Card UI)
│       └── index.html
├── shared/                     # Shared Foundation & Assets
│   ├── css/
│   │   └── styles.css          # Rigen Ember Console Dark Glass 3D tokens
│   └── js/
│       ├── icons.js            # 100% Vector SVG Icons (Zero Emojis)
│       └── mock-data.js        # Deterministic self-contained datasets
├── assets/
│   └── .gitkeep
├── .assetsignore
├── .gitignore
├── README.md
└── wrangler.jsonc              # Cloudflare Workers Static Assets Configuration
```

---

## Included Templates

### 1. `ikarisz SaaS` (`templates/saas/index.html`)
- **Category**: Enterprise Cloud Infrastructure & Telemetry Dashboard.
- **Features**:
  - Live KPI metric cards with period-over-period delta badges.
  - Interactive SVG Throughput & MRR Chart (solid bars, tab switching, zero gradients).
  - Searchable microservices data table with real-time status filtering (`Active`, `Deploying`, `Testing`).
  - Interactive **"New Service"** modal that inserts live microservices into the local table.
  - Real-time security audit log feed.
  - **Skeleton loading state** with realistic toggle and 1.2s simulated async reload.

### 2. `ikarisz Store` (`templates/store/index.html`)
- **Category**: Gaming Item Shop, Digital Arsenal & Marketplace.
- **Features**:
  - 8+ meticulously detailed gaming items (Plasma Blade, Quantum Railgun, Exo-Suit, Void Daggers, Battle Pass, etc.).
  - Detailed stats (DPS, Defense, Cooldown, Level requirements, Lore).
  - Balanced 3-part navbar (Brand, Search Bar, Balances & Cart).
  - Category pill filter tabs and price/rating sorting.
  - Interactive **Cart Slide-Over Drawer** with item quantity adjustments (`+` / `-`), remove items, and live balance calculation.
  - Working **Checkout simulation** that deducts credits from the user's live balance and issues an inventory receipt.
  - **Quick Inspect Modal** for weapon statistics and lore.
  - Responsive layout optimized for Desktop, Tablet (820px), and Mobile (390px).

### 3. `ikarisz AI` (`templates/ai/index.html`)
- **Category**: Conversational AI Assistant & Code Engineering (ChatGPT Style).
- **Features**:
  - **Floating Prompt Card**: Seamless, floating input box without full-width bottom bar background.
  - Foundation model selector (`ikarisz 4.5 Turbo`, `ikarisz Reasoner`, `ikarisz Code 2.0`).
  - Sidebar conversation history list.
  - 4 one-click starter prompt preset cards.
  - Live **Streaming Typewriter Simulation** (realistic token generation stream).
  - Code block renderer with syntax styling and working **"Copy Code"** button.
  - Thumbs up / down feedback interactions and response copying.
  - Dedicated **skeleton loading state** for conversation thread and history.

### 4. `ikarisz Console Hub` (`index.html`)
- **Master Controller**:
  - Switch between all 3 templates with a single click.
  - CSS Grid 3-column header (prevents overlapping/collisions on any screen size).
  - **Device Frame Switcher**: Preview in Desktop (100%), Tablet (820px iPad Pro frame), or Mobile (390px iPhone frame).
  - **Global Skeleton Preview** button and **Simulate 1.2s Network Delay** trigger.
  - Live GitHub repository badge with dynamic star counter.
  - Direct standalone launch links.

---

## Deployment to Cloudflare Workers

This repository is pre-configured for instant zero-config static deployment via Cloudflare Workers:

```bash
# Deploy to Cloudflare Workers
npx wrangler deploy
```

---

## Local Development

You can open the templates directly in any modern web browser or start a local HTTP server:

```bash
# Python
python -m http.server 8080 --directory ikarisz-templates

# Node.js
npx serve ikarisz-templates
```
