## Purpose

This file contains repository-specific instructions for AI coding agents (Copilot-style assistants) to be immediately productive in this React + Vite + TypeScript POS project.

## How to run / build

- Development: `npm run dev` — starts Vite dev server (hot reload).
- Build: `npm run build` — runs `tsc -b` then `vite build` to produce a production bundle.
- Preview: `npm run preview` — run a local preview of the production build.
- Lint: `npm run lint` — runs ESLint on the repo.

Files to check first: `package.json`, `vite.config.ts`, `tsconfig.json` / `tsconfig.app.json`.

## Big picture architecture

- Single-page React app built with Vite and TypeScript.
- Routing is configured in `src/App.tsx` using `react-router-dom`. Routes map directly to components in `src/Componenets/` (note the folder name misspelling: "Componenets").
- UI is primarily built with Bootstrap CSS (imported in `src/main.tsx`). Styles live in `src/App.css` and `src/index.css`.
- No centralized global state manager (Redux/MobX) is present — components currently use local React state.

## Project-specific conventions and patterns

- Component folder is `src/Componenets/` (typo is deliberate in the repo). When creating or editing imports, preserve this exact path. Be cautious: this works on Windows but is case-sensitive on other OSes.
- Many components are simple functional components (default export) with local state and uncontrolled form inputs. Example: `src/Componenets/Order.tsx` renders form controls and a table for orders.
- Naming inconsistencies exist (e.g., `Signnup.tsx`, `Crads/`); when adding files, follow the existing naming to reduce import errors unless you also update imports.

## API & network patterns

- `axios` is a dependency in `package.json`. Components reference an `AxiosInstance` (for example `src/Componenets/Customer.tsx`) but there is no obvious `AxiosInstance` file in the repo — search for or create `src/services/axios.ts` or similar when adding network code. Prefer a single exported axios instance with baseURL and interceptors.

## Important files to review when changing behavior

- `src/App.tsx` — central routes and navigation.
- `src/main.tsx` — app entry; imports Bootstrap CSS.
- `src/Componenets/*` — UI pages (Home, Customer, Product, Order, Login, Signnup).
- `public/` — static assets.

## Quick examples & guidance for changes

- Add a new route: create `src/Componenets/MyNew.tsx` (default export), then add a `<Route path="/mynew" element={<MyNew/>}/>` entry in `src/App.tsx`.
- If you introduce network code, add a single `src/services/axios.ts`:
  - export a default Axios instance configured with the API base URL.
  - update components to `import AxiosInstance from '../services/axios'`.
- Keep UI consistent by reusing Bootstrap classes and component structure used in `Order.tsx` and `Customer.tsx`.

## Checks and gotchas for AI edits

- Preserve the `Componenets` directory name unless you also update every import that references it.
- The codebase uses TypeScript and `tsc -b` in `npm run build`; ensure new files are included in tsconfig or build will fail.
- Watch for missing imports (`AxiosInstance` referenced but not defined in the repo). If you add a new import, ensure the file exists.
- Use existing default exports for components to match how `App.tsx` imports them.

## What I couldn't discover automatically

- There is no centralized API base URL or `.env` shown — ask the maintainer for API endpoints and auth expectations before wiring network calls.

## When in doubt

- Run `npm run dev` locally to verify UI changes and `npm run build` to verify type/bundle issues.

---
If you'd like, I can:

- add an `src/services/axios.ts` scaffold and wire `Customer.tsx` (and other components) to it,
- rename the `Componenets` folder for correctness and update imports (careful: this is cross-cutting), or
- expand these instructions with examples for common PR tasks (adding pages, adding API calls).

Please tell me which of the above you'd like me to do next or point out any missing assumptions.
