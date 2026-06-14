# Portfolio

Personal portfolio site - built with React, MUI, and Vite.

## Tech Stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [MUI](https://mui.com/) for components and theming (with light/dark mode)
- [Vite](https://vitejs.dev/) for development and builds

## Getting Started

Requires Node `^20.9.0` or `>=22.0.0` (see `.nvmrc`).

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # build for production
pnpm preview   # preview the production build
```

## Project Structure

```
src/
  components/    # shared UI (nav, social links, dark mode toggle)
  contexts/       # theme context (light/dark mode)
  pages/          # route components (Home, About)
```

## Deployment

Deployed via Cloudflare Pages, which builds with `npm run build` using the
Node version pinned in `.nvmrc`.
