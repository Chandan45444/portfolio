# Portfolio Website

## Overview
A modern, dark-themed single-page portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, anime.js v4, and React Three Fiber. The site features smooth animations, 3D visual elements, and a professional design inspired by the Next.js website aesthetic.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Animations**: anime.js v4
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **Package Manager**: npm

## Features
- ✅ Responsive dark-themed design
- ✅ Smooth scroll navigation between sections
- ✅ Animated hero section with timeline animations
- ✅ 3D scene with animated cube and spheres (React Three Fiber + anime.js)
- ✅ About Me section with intersection observer animations
- ✅ Projects showcase with staggered card animations
- ✅ Skills section with animated progress bars
- ✅ Contact section with social media links
- ✅ Mobile-responsive navigation with hamburger menu

## Project Structure
```
/
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── page.tsx             # Main page composing all sections
│   └── globals.css          # Global styles with Tailwind v4
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with 3D scene
│   ├── Scene3D.tsx          # React Three Fiber 3D component
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills with progress bars
│   └── Contact.tsx          # Contact and social links
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── package.json             # Dependencies
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind v4 configuration
├── postcss.config.mjs       # PostCSS with @tailwindcss/postcss
└── tsconfig.json            # TypeScript configuration
```

## Configuration Notes

### Tailwind CSS v4
This project uses Tailwind CSS v4 which requires:
- `@tailwindcss/postcss` plugin instead of the standard `tailwindcss` plugin
- `@import "tailwindcss";` in CSS files instead of `@tailwind` directives
- Custom colors are defined in both `tailwind.config.ts` AND CSS custom properties

### anime.js v4
anime.js v4 uses named imports:
```typescript
import { animate, createTimeline, stagger } from "animejs";
```
- Use `animate()` instead of `anime()`
- Use `createTimeline()` instead of `anime.timeline()`
- Use `stagger()` instead of `anime.stagger()`
- Use `ease` property instead of `easing`

### 3D Scene
The 3D scene uses React Three Fiber with dynamic import to avoid SSR issues:
```typescript
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
});
```

Note: WebGL may not be available in all environments (e.g., headless browsers). The 3D scene gracefully handles this with a loading fallback.

## Running the Project
```bash
npm install
npm run dev
```
The dev server runs on `http://localhost:5000` (configured for Replit port requirements).

## Customization
To personalize the portfolio:
1. Update `components/Hero.tsx` - Change "Your Name" to your actual name
2. Update `components/About.tsx` - Add your bio and details
3. Update `components/Projects.tsx` - Add your actual projects with links
4. Update `components/Skills.tsx` - Customize skills and proficiency levels
5. Update `components/Contact.tsx` - Add your real contact information and social links
6. Update `app/layout.tsx` - Change the metadata (title, description)

## Known Limitations
- WebGL 3D rendering requires browser support (not available in all screenshot/test environments)
- The portfolio currently uses placeholder content that should be customized
- Cross-origin warnings in development can be ignored or configured in `next.config.ts`

## Recent Changes (2025-10-30)
- Set up Next.js 16 with TypeScript and Tailwind CSS v4
- Integrated anime.js v4 for smooth animations throughout
- Added React Three Fiber for 3D visual elements in Hero section
- Configured all sections with intersection observer animations
- Fixed Tailwind v4 configuration to properly generate custom utilities
- Resolved Next.js Turbopack issues
- Configured workflow to run on port 5000 for Replit environment
