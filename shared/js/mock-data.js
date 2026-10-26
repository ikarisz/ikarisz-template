/**
 * ikarisz Mock Datasets
 * Zero API calls required - 100% self-contained realistic mock data
 */

const IkariszData = {
  // 1. SaaS Mock Data
  saas: {
    stats: [
      {
        id: "revenue",
        title: "Monthly Recurring Revenue",
        value: "$128,450.00",
        change: "+14.6%",
        isPositive: true,
        period: "vs last month"
      },
      {
        id: "deployments",
        title: "Active Microservices",
        value: "1,428",
        change: "+8.2%",
        isPositive: true,
        period: "in 12 regions"
      },
      {
        id: "latency",
        title: "Global Edge Latency",
        value: "22.4 ms",
        change: "-3.1 ms",
        isPositive: true,
        period: "p99 percentile"
      },
      {
        id: "uptime",
        title: "Service Reliability",
        value: "99.985%",
        change: "+0.02%",
        isPositive: true,
        period: "past 90 days"
      }
    ],

    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [45, 52, 58, 64, 71, 78, 86, 94, 102, 114, 121, 128],
      requests: [120, 135, 148, 162, 185, 210, 240, 268, 295, 330, 365, 410]
    },

    deployments: [
      {
        name: "auth-gateway-service",
        env: "Production-US-East",
        version: "v3.12.4",
        status: "Active",
        cpu: "14%",
        ram: "512 MB",
        updated: "4 mins ago"
      },
      {
        name: "payment-stripe-webhook",
        env: "Production-EU-Central",
        version: "v2.8.1",
        status: "Active",
        cpu: "28%",
        ram: "1,024 MB",
        updated: "18 mins ago"
      },
      {
        name: "roblox-datastore-daemon",
        env: "Production-Global",
        version: "v4.0.0",
        status: "Active",
        cpu: "42%",
        ram: "2,048 MB",
        updated: "1 hour ago"
      },
      {
        name: "ai-inference-vector-db",
        env: "Cluster-AP-East",
        version: "v1.9.0",
        status: "Deploying",
        cpu: "65%",
        ram: "4,096 MB",
        updated: "Just now"
      },
      {
        name: "realtime-websocket-sync",
        env: "Staging-US-West",
        version: "v3.14.0-rc1",
        status: "Testing",
        cpu: "8%",
        ram: "256 MB",
        updated: "2 hours ago"
      },
      {
        name: "legacy-export-worker",
        env: "Production-US-East",
        version: "v1.4.2",
        status: "Idle",
        cpu: "2%",
        ram: "128 MB",
        updated: "5 hours ago"
      }
    ],

    auditLogs: [
      { actor: "Napat P.", action: "Rolled out release v4.0.0 to roblox-datastore-daemon", time: "12m ago" },
      { actor: "System Daemon", action: "Auto-scaled ai-inference-vector-db to 8 nodes", time: "34m ago" },
      { actor: "Sarah Jenkins", action: "Updated API key permissions for Client Token #402", time: "1h ago" },
      { actor: "Security Sentinel", action: "SSL Certificates renewed for *.ikarisz.cloud", time: "3h ago" }
    ]
  },

  // 2. Gaming Store Mock Data
  store: {
    userBalance: {
      credits: 42850,
      shards: 1450
    },

    categories: ["All Items", "Weapons", "Armor", "Gadgets", "Battle Pass"],

    items: [
      {
        id: "item-01",
        name: "Aetherion Plasma Blade",
        category: "Weapons",
        rarity: "Mythic",
        price: 3400,
        currency: "credits",
        levelReq: 45,
        rating: "4.9",
        stock: 12,
        stats: { damage: "980 DPS", range: "Melee", speed: "1.4s Attack Rate", durability: "Unbreakable" },
        description: "Forged from condensed solar plasma and titanium alloy. Discharges an electromagnetic pulse on every 4th consecutive slash.",
        svgType: "sword"
      },
      {
        id: "item-02",
        name: "Quantum Railgun XT-9",
        category: "Weapons",
        rarity: "Legendary",
        price: 4200,
        currency: "credits",
        levelReq: 50,
        rating: "5.0",
        stock: 5,
        stats: { damage: "1,450 Burst", range: "650 Meters", speed: "0.8s Charge", durability: "Reinforced" },
        description: "Heavy anti-matter sniper rifle capable of piercing through reinforced energy barriers with precision projectile trajectory.",
        svgType: "crosshair"
      },
      {
        id: "item-03",
        name: "Valkyrie Exo-Armor MK IV",
        category: "Armor",
        rarity: "Legendary",
        price: 4800,
        currency: "credits",
        levelReq: 40,
        rating: "4.8",
        stock: 8,
        stats: { defense: "+650 Shield", mobility: "+35% Sprint", absorption: "25% Kinetic", durability: "Nano-Regen" },
        description: "High-mobility tactical exoskeleton suit designed for deep-space planetary reconnaissance and heavy urban combat.",
        svgType: "shield"
      },
      {
        id: "item-04",
        name: "Chronos Time-Dilator",
        category: "Gadgets",
        rarity: "Epic",
        price: 2100,
        currency: "credits",
        levelReq: 30,
        rating: "4.7",
        stock: 24,
        stats: { duration: "4.5s Freeze", cooldown: "45 Seconds", radius: "12 Meters", charges: "3 per Match" },
        description: "Generates a localized tachyon distortion field that slows down enemy projectiles and movement within a 12m sphere.",
        svgType: "zap"
      },
      {
        id: "item-05",
        name: "Phantom Void Daggers",
        category: "Weapons",
        rarity: "Epic",
        price: 1850,
        currency: "credits",
        levelReq: 25,
        rating: "4.6",
        stock: 30,
        stats: { damage: "720 DPS", stealth: "+40% Cloaking", speed: "0.4s Attack Rate", bleed: "80 DPS / 5s" },
        description: "Twin obsidian blades that slice through the dimensional veil, granting temporary invisibility upon landing backstab strikes.",
        svgType: "sword"
      },
      {
        id: "item-06",
        name: "ikarisz Season 4 Pass: Odyssey",
        category: "Battle Pass",
        rarity: "Mythic",
        price: 1000,
        currency: "credits",
        levelReq: 1,
        rating: "4.9",
        stock: 999,
        stats: { tiers: "100 Tiers", rewards: "4 Exclusive Skins", bonus: "+50% XP Boost", refund: "1,200 Credits Back" },
        description: "Unlock immediate access to 100 prestige tiers, including the mythic 'Starlight Vanguard' rig and custom animated banners.",
        svgType: "package"
      },
      {
        id: "item-07",
        name: "Hyperdrive Kinetic Boots",
        category: "Armor",
        rarity: "Rare",
        price: 1250,
        currency: "credits",
        levelReq: 15,
        rating: "4.5",
        stock: 50,
        stats: { jump: "+80% Vertical", sound: "-50% Footsteps", wallrun: "Enabled", stamina: "-20% Drain" },
        description: "Hydraulic boots equipped with micro-thrusters allowing triple jumps and sustained wall-running maneuvers.",
        svgType: "zap"
      },
      {
        id: "item-08",
        name: "Primordial Energy Core Pack",
        category: "Gadgets",
        rarity: "Special",
        price: 850,
        currency: "shards",
        levelReq: 1,
        rating: "4.9",
        stock: 100,
        stats: { capacity: "5x Power Cells", overcharge: "+15% Damage", craft: "Tier V Materials", trade: "Tradable" },
        description: "Pure crystallized energy bundle used to overcharge weapon attachments and craft elite masterwork modifications.",
        svgType: "coins"
      }
    ]
  },

  // 3. AI Chat Mock Data
  ai: {
    models: [
      { id: "ikarisz-4.5", name: "ikarisz 4.5 Turbo", badge: "Default", desc: "Balanced reasoning, coding, and general tasks" },
      { id: "ikarisz-reasoner", name: "ikarisz Reasoner", badge: "Deep", desc: "Advanced step-by-step logic and mathematical analysis" },
      { id: "ikarisz-coder", name: "ikarisz Code 2.0", badge: "Pro", desc: "Specialized for Luau, TypeScript, and systems architecture" }
    ],

    conversations: [
      { id: "c-1", title: "Roblox Luau Netcode Optimization", date: "Today", active: true },
      { id: "c-2", title: "Enterprise SaaS Multi-Tenant Architecture", date: "Today", active: false },
      { id: "c-3", title: "Game Economy Balancing & Drop Rates", date: "Yesterday", active: false },
      { id: "c-4", title: "Zero-Gradient Minimalist UI Principles", date: "3 days ago", active: false }
    ],

    prompts: [
      {
        title: "Optimize Luau Server Code",
        desc: "Refactor character movement replication with delta compression",
        prompt: "How can I optimize network bandwidth for 50 concurrent Roblox players using Luau byte packing?"
      },
      {
        title: "Design Clean SaaS Architecture",
        desc: "Draft a modern decoupled microservice schema with zero-gradient UI",
        prompt: "Provide a complete architectural specification for a minimalist, high-availability SaaS platform."
      },
      {
        title: "Simulate Game Drop Probability",
        desc: "Calculate Gacha pity mechanics and expected return values",
        prompt: "Write a mathematical formula and Luau loot table algorithm with a 75-roll soft pity mechanism."
      },
      {
        title: "Generate SQL Schema for Billing",
        desc: "Design Stripe subscription lifecycle tracking with idempotency",
        prompt: "Draft a PostgreSQL schema for tracking monthly subscriptions, invoices, and webhook audit trails."
      }
    ],

    seedMessages: [
      {
        role: "user",
        text: "Please provide a clean, production-ready Luau module for rate-limiting RemoteEvents on the server without memory leaks."
      },
      {
        role: "assistant",
        text: `Here is a high-performance, garbage-collection-safe RateLimiter module built for server-authoritative Roblox games:

\`\`\`lua
-- ServerScriptService/Modules/RateLimiter.luau
local Players = game:GetService("Players")

local RateLimiter = {}
RateLimiter.__index = RateLimiter

function RateLimiter.new(maxRequestsPerSecond: number)
    local self = setmetatable({}, RateLimiter)
    self.maxRate = maxRequestsPerSecond
    self.buckets = {} -- [Player] = { count: number, lastReset: number }
    
    -- Automatically clean up when players leave to prevent memory leaks
    Players.PlayerRemoving:Connect(function(player)
        self.buckets[player] = nil
    end)
    
    return self
end

function RateLimiter:Check(player: Player): boolean
    local now = os.clock()
    local bucket = self.buckets[player]
    
    if not bucket or (now - bucket.lastReset) >= 1.0 then
        self.buckets[player] = { count = 1, lastReset = now }
        return true
    end
    
    if bucket.count < self.maxRate then
        bucket.count += 1
        return true
    end
    
    -- Rate limit exceeded
    return false
end

return RateLimiter
\`\`\`

### Key Architectural Strengths:
1. **Zero Memory Leaks**: Uses \`Players.PlayerRemoving\` lifecycle hook to prune memory tables instantly.
2. **High Precision**: Relies on \`os.clock()\` for sub-millisecond CPU timestamp comparisons.
3. **Fail-Closed**: Blocks suspicious burst traffic before executing expensive DataStore or physics calls.`
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = IkariszData;
}
