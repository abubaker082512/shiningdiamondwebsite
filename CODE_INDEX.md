# Shining Diamond Land & House - Code Index

## Project Overview
A full-stack landscaping company website built with React 19, Express.js, and Tailwind CSS v4.

## File Structure

```
D:\Shiningdiamondlandhouse.com\
├── .env.example
├── .gitignore
├── components.json
├── index.html
├── metadata.json
├── package-lock.json
├── package.json
├── README.md
├── server.ts
├── tsconfig.json
├── vite.config.ts
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── scroll-area.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── components/
    │   ├── Footer.tsx
    │   ├── LeadForm.tsx
    │   ├── Navbar.tsx
    │   └── ui/
    │       ├── button.tsx
    │       └── sonner.tsx
    ├── lib/
    │   ├── api.ts
    │   └── utils.ts
    └── pages/
        ├── About.tsx
        ├── Admin.tsx
        ├── Contact.tsx
        ├── Gallery.tsx
        ├── Home.tsx
        └── Services.tsx
```

## Configuration Files

| File | Description |
|------|-------------|
| `package.json` | Project manifest with React 19, Express, Tailwind CSS v4, shadcn, Framer Motion, Firebase, Gemini AI dependencies |
| `tsconfig.json` | TypeScript config targeting ES2022, react-jsx, path alias `@/*` -> `./src/*` |
| `vite.config.ts` | Vite build config with React plugin, Tailwind integration, GEMINI_API_KEY injection |
| `components.json` | shadcn/ui configuration (base-nova style, TSX, Tailwind v4, neutral colors) |
| `index.html` | HTML entry point with `<div id="root">` mount point |
| `.gitignore` | Ignores node_modules, build artifacts, .env files |
| `.env.example` | Environment variable template (GEMINI_API_KEY, APP_URL) |
| `metadata.json` | App metadata for AI Studio |

## Server

| File | Description |
|------|-------------|
| `server.ts` | Express.js server (port 3000) with in-memory REST API for leads, gallery, and content management |

## Source Core

| File | Description |
|------|-------------|
| `src/main.tsx` | React entry point with StrictMode wrapper |
| `src/App.tsx` | Root component with React Router (6 routes: Home, About, Services, Gallery, Contact, Admin) |
| `src/index.css` | Global styles, Google Fonts (Inter + Space Grotesk), Tailwind v4, shadcn themes, emerald palette |

## Library Utilities

| File | Description |
|------|-------------|
| `src/lib/utils.ts` | `cn()` utility for merging Tailwind class names (clsx + tailwind-merge) |
| `src/lib/api.ts` | API client for all backend endpoints (leads, gallery, content CRUD operations) |

## Pages

| File | Description |
|------|-------------|
| `src/pages/Home.tsx` | Landing page with hero, services overview, stats, why choose us, testimonials, FAQ, CTA |
| `src/pages/About.tsx` | About page with company story, core values (Precision, Trust, Quality, Local Expertise) |
| `src/pages/Services.tsx` | Services page with 6 service cards and 4-step process timeline |
| `src/pages/Gallery.tsx` | Gallery page with masonry layout and fullscreen lightbox |
| `src/pages/Contact.tsx` | Contact page with info columns and LeadForm component |
| `src/pages/Admin.tsx` | Admin dashboard (password: admin123) with leads, gallery, and content management tabs |

## Custom Components

| File | Description |
|------|-------------|
| `src/components/Navbar.tsx` | Responsive navbar with desktop/mobile views, active states, hamburger menu |
| `src/components/Footer.tsx` | Four-column footer with brand, services, contact, working hours |
| `src/components/LeadForm.tsx` | Contact form with name, email, phone, service dropdown, message fields |

## UI Components (src/components/ui/)

| File | Description |
|------|-------------|
| `src/components/ui/button.tsx` | shadcn Button with CVA variants (default, outline, secondary, ghost, destructive, link) |
| `src/components/ui/sonner.tsx` | Toaster wrapper for sonner toast library |

## UI Components (components/ui/) - Base UI

| File | Description |
|------|-------------|
| `components/ui/button.tsx` | Button using @base-ui/react/button |
| `components/ui/badge.tsx` | Badge component with CVA variants |
| `components/ui/card.tsx` | Card with sub-components (Header, Title, Content, Footer) |
| `components/ui/dialog.tsx` | Dialog/modal with animated overlay |
| `components/ui/input.tsx` | Styled text input with focus ring |
| `components/ui/label.tsx` | Styled label element |
| `components/ui/scroll-area.tsx` | Custom scrollbars with thumb indicator |
| `components/ui/switch.tsx` | Toggle switch with animated thumb |
| `components/ui/tabs.tsx` | Tab component with pill/underline variants |
| `components/ui/table.tsx` | Table with sub-components and hover states |
| `components/ui/textarea.tsx` | Multi-line input with auto-sizing |
