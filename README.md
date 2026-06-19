# RemoteRecruit – Features Page

A pixel-faithful recreation of the RemoteRecruit Features page built with React.js and Tailwind CSS.

## Live Demo

[Deployed on Vercel →]([https://your-deployed-url.vercel.app](https://remoterecrruit-cpcf.vercel.app/))

## 🛠 Project Setup

### Prerequisites
- Node.js v17 or above
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sadia-54/remoterecrruit.git
cd remoterecrruit

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Framework & Libraries

| Library | Version | Purpose |
|---|---|---|
| React.js | ^19.2.7 | UI framework |
| Tailwind CSS | ^3.4.19 | Utility-first styling |
| PostCSS | ^8.5.15 | CSS processing |
| Autoprefixer | ^10.5.0 | CSS vendor prefixes |

> No additional animation library needed — scroll animations are implemented with native `IntersectionObserver` API for optimal performance.

## Architecture

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   ├── Hero.jsx            # Hero section with wave divider
│   ├── Feature1.jsx        # Global Job Board section
│   ├── Feature2.jsx        # Fee-Free Forever section
│   ├── Feature3.jsx        # Showcase Your Talents section
│   ├── CTABanner.jsx       # Help is a few clicks away
│   ├── CommonQuestions.jsx # Accordion FAQ section
│   ├── Pricing.jsx         # Free vs Premium pricing
│   ├── Footer.jsx          # Footer with social links
│   └── ScrollToTop.jsx     # Floating scroll-to-top button
├── hooks/
│   └── useScrollReveal.js  # Custom IntersectionObserver hook
├── App.js
└── index.css               # Tailwind directives + Google Fonts
```

## Features Implemented

- **Fully responsive** — mobile, tablet, desktop
- **Scroll animations** — fade-in and slide-up via IntersectionObserver
- **Hover states** — all buttons and interactive elements
- **Smooth scroll** — anchor links + scroll-to-top button
- **Lazy loading** — images use loading="lazy"
- **Accessible** — semantic HTML, aria labels, keyboard nav
- **Component-based** — reusable, composable architecture

## Known Issues / Limitations

- Profile images and dashboard screenshots use styled placeholder components instead of actual images (no image assets were provided in the brief)
- FAQ answers use representative placeholder content as no copy was provided
- Google Fonts (Inter) requires an internet connection to load; a system font fallback is configured

