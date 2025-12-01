<h1 align="center">
isaras — React + TypeScript + Vite
</h1>

**Project**

- **Name:** `isaras` — React + TypeScript app scaffolded with Vite.
- **Purpose:** Interview task / convert given html,css and js file into complete React application with TypeScript. Modern React patterns, best practices
and TypeScript interface design and implementation.

**Quick Start**

- **Clone in local**

```bash
git clone https://github.com/its-Inbarajan/isaras-interview-assignment/
```
- **navigate to root**
```bash
 cd isaras-interview-assignment
```

- **Install deps:**

```bash
npm install
```

- **Run dev server:**

```bash
npm run dev

```
- **Open localhost url**

```bash
 Open this url in web : http://localhost:5173/

```
- **Build:**

```bash
npm run build
```

**Project Structure (key files)**

- **`src/App.tsx`:** App entry — sets up `ScrollSmoother` wrapper and renders global layout.
- **`src/components/ui/navbar.tsx`:** Header + mobile sidebar and navigation.
- **`src/components/ui/button.tsx`:** Shared Button component (forwards props correctly).
- **`src/lib/smoothScroller.ts`:** Utility for programmatic smooth scrolling.
- **`src/pages/how-its-work-section.tsx`:** GSAP-powered pinned/stacked card animation (ScrollTrigger-aware).
- **`src/pages/*`:** Other page sections (hero, features, pricing, faq, contact, etc.).

**Implemented Features & Fixes**

- **Navbar:** fixed mobile sidebar toggle so `show-sidebar` class and body overflow are applied/removed correctly.
- **Button:** corrected prop forwarding and default `type="button"` behavior.
- **Tabs:** active tab state wired using controlled Radix Tabs.
- **Features grid:** first two items use `col-span-6`, remaining items use `col-span-4` at md/lg breakpoints.
- **GSAP animations:** implemented stacked/pinned card animation in `how-its-work-section` using `ScrollTrigger` and made it compatible with `ScrollSmoother`.
- **Smooth scrolling:** added `src/lib/smoothScroller.ts` and `ScrollSmoother` initialization in `App.tsx` (wrapper uses `className=\"smooth-wrapper\"`).
- **SVG & assets:** cropped/cleaned `src/assets/svg/x.svg` to remove extra padding and invalid attributes.
- **Overflow-x:** temporary global `html, body { overflow-x: hidden; }` applied to suppress horizontal scrollbar during iterations (recommended to fix root causes later).

**GSAP / ScrollSmoother Notes**

- **Registration:** `gsap.registerPlugin(ScrollTrigger, ScrollSmoother)` is done in `App.tsx` and should not be re-registered in child components.
- **scroller:** When using `ScrollSmoother`, pass `scroller: '.smooth-wrapper'` in `ScrollTrigger` configs so triggers attach to the smoother wrapper.

**Known Issues & Recommendations**

- **App.tsx linting:** earlier edits exposed TypeScript/ESLint complaints when `window` was used with `any`. Prefer using a small context or `useSmoothScroll` hook rather than attaching values on `window`

**Commands**

- Dev server: `npm run dev`
- Build: `npm run build`
- Lint (if configured): `npm run lint`
