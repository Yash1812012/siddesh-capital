# Siddhesh Capital Market Services Private Limited — Production Frontend Bundle

Complete production-ready frontend package reflecting the official corporate profile, capital structure, commercial credit facility tools, and Nariman Point Mumbai desk.

---

## 📦 What's Included in this Bundle

This package includes **both** the ready-to-run standalone static frontend and the complete React + Vite source code:

```
├── standalone/                  # Pure HTML/CSS/JS (Runs immediately without Node.js)
│   ├── index.html               # Semantic, responsive, production HTML5 structure
│   ├── styles.css               # Animations, glows, custom slider styling, & typography
│   └── app.js                   # Interactive loan/EMI calculation engine & UI logic
│
├── dist/                        # Optimized & minified production build (Vite output)
│   ├── index.html               # Minified entry point
│   └── assets/                  # Bundled, minified JS and CSS bundles
│
├── src/                         # Full React 19 + TypeScript + Tailwind source code
│   ├── components/              # Modular UI components (Hero, Calculator, Facilities, etc.)
│   ├── constants/               # Company data, MCA identity, capital details
│   ├── hooks/                   # Custom business logic & data hooks
│   ├── types/                   # Strict TypeScript definitions
│   └── App.tsx                  # Main application container
│
├── server.ts                    # Optional Express backend proxy for Search & Maps grounding
├── package.json                 # Dependency manifests & npm scripts
└── README.md                    # Documentation
```

---

## 🚀 Quick Start Options

### Option 1: Standalone (Instant Double-Click — No Setup Required)
1. Open the `standalone/` directory.
2. Double-click `index.html` to open directly in any web browser (Chrome, Safari, Edge, Firefox).
3. Everything works out-of-the-box:
   - Interactive Loan EMI Sizer (₹25 Lakh to ₹50 Crore)
   - Commercial credit facility cards
   - Capital & Board of Directors directory with filter tabs
   - Nariman Point spatial address & verified links
   - Responsive mobile navigation drawer

### Option 2: Deploying the Pre-Built Distribution (`dist/`)
The `dist/` directory contains the production-compiled static assets:
- **Netlify:** Drag and drop the `dist/` folder into your Netlify dashboard.
- **Vercel:** Run `vercel deploy dist/` or push to GitHub.
- **GitHub Pages / Cloudflare Pages / AWS S3:** Upload the contents of `dist/`.

### Option 3: Developing with Node.js & React
If you wish to modify the React TypeScript codebase:
```bash
# 1. Install dependencies
npm install

# 2. Run the local development server (port 3000)
npm run dev

# 3. Create a fresh production build
npm run build
```

---

## 🏛️ Company Profile & Statutory Details
- **Corporate Name:** Siddhesh Capital Market Services Private Limited
- **CIN:** `U65923MH1995PTC088811` (Active • RoC-Mumbai)
- **Authorized Capital:** ₹80,00,00,000 (₹80 Crore)
- **Paid-Up Equity Capital:** ₹74,85,00,000 (₹74.85 Crore — 93.56% Paid-up Ratio)
- **Date of Incorporation:** 26 May 1995
- **Principal Business Activity:** NIC 6592 (Other credit granting / commercial loan operations)
- **Registered Office:** 122, Maker Chambers III, Nariman Point, Mumbai, Maharashtra 400021, India
- **Direct Phone:** `099198 05234`
- **Email:** `reshma@sekhsaria.com`
