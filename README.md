# GreenNest

Discover, care for, and shop beautiful indoor plants in a fast, modern single-page app.

## Project details

GreenNest is a React SPA focused on plant discovery and care guidance with a lightweight storefront feel. It ships with client-side routing, authentication, lazy-loaded routes, and a clean, responsive UI.

- Core goals:

  - Browse curated plants with images and essentials from a local dataset
  - View plant details and care tips (protected route)
  - Create an account, sign in with email/password or Google, and manage profile
  - Smooth, app-like navigation with skeletons/loaders and toasts

- Key pages/routes:

  - `/` Home
  - `/plants` Plant listing
  - `/plants/:id` Plant details (protected)
  - `/login`, `/signup`, `/forgot` Auth flows
  - `/profile` Profile (protected)
  - `/about`, `/contact`, `/privacy`, `*` 404

- Data: Static JSON at `public/data/plants.json` loaded via a custom hook (`usePlants`).
- Auth: Firebase Authentication (Email/Password + Google OAuth) via context.
- UX/Nice-to-haves: Lazy route bundles, skeleton/loader components, theme toggle, toast notifications.

## Technology stack

- React 19 + React DOM
- React Router 7 (createBrowserRouter + lazy routes)
- Vite 7 (DEV/Build/Preview)
- Tailwind CSS 4 + DaisyUI (via `@tailwindcss/vite` plugin)
- Firebase 12 (Auth)
- Swiper (carousel), Lucide React (icons), React Hot Toast (notifications)
- ESLint 9 (React hooks + React Refresh rules)

## Features

- Authentication: signup, login, logout, Google sign-in, password reset
- Protected routes with `ProtectedRoute` wrapper
- Plant catalog from static JSON with loading and error states
- Responsive UI with utility-first styling and accessible components
- Code-splitting/lazy-loading for faster initial load
- Netlify and Vercel configuration included for zero-config deploys

---

Made with React, Tailwind, and plants 🌿
