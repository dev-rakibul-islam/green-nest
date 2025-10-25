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

## Folder structure (high-level)

```
src/
	assets/                  # Static assets (if any)
	components/              # Reusable UI components (Hero, NavBar, etc.)
	context/                 # Auth context/provider/hooks
	firebase/                # Firebase config + init
	hooks/                   # Custom hooks (e.g., usePlants)
	layout/                  # Layout wrappers
	pages/                   # Route components
	routes/                  # Router definition
	index.css                # Global styles (Tailwind)
	main.jsx                 # App entry
public/
	data/plants.json         # Demo data
	images/                  # Public images
```

## Getting started

Prerequisites:

- Node.js 18+ and npm

1. Install dependencies

```
npm install
```

2. Environment variables

Create a `.env` file in the project root and add your Firebase credentials (Vite expects the `VITE_` prefix):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. Start the dev server

```
npm run dev
```

The app runs locally with Vite; follow the URL printed in your terminal.

## Available scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build locally
- `npm run lint` — Lint the codebase

## Deployment

This repo includes configuration for both Netlify and Vercel:

- Netlify: `netlify.toml` already configures the build and SPA redirects to `index.html`.
- Vercel: `vercel.json` is set up for a static build (`dist`) and SPA routing.

Typical steps:

1. Push to GitHub
2. Import the repo into Netlify or Vercel
3. Set the same environment variables as in your local `.env`
4. Trigger a build and deploy

## Environment & configuration

- Firebase config is read from environment variables via `import.meta.env` in `src/firebase/firebase.config.js`.
- Authentication instance and Google provider are initialized in `src/firebase/firebase.init.js`.
- Auth context lives in `src/context/AuthProvider.jsx` and exposes `signup`, `login`, `logout`, `googleSignIn`, `forgotPassword`, and `updateProfile`.

## Notes

- If you plan to add a real backend or payments, replace the static `plants.json` and wire API calls accordingly.
- Consider adding SEO tags per route and Open Graph metadata for better sharing.
- Add a LICENSE file appropriate for your project needs.

---

Made with React, Tailwind, and plants 🌿
