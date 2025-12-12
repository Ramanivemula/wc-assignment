WC Assignment — Deploy & Build
=============================

Quick notes for building and deploying this project.

Repository layout
- `wc-assignment/` — the Vite + React app (this is the project root for builds).

Local build & dev
- Install deps (from repo root or inside `wc-assignment`):

```bash
cd wc-assignment
npm install
npm run dev      # start dev server
npm run build    # production build -> outputs to `dist`
```

Vercel deployment
- This repo includes `vercel.json` at the repository root which instructs Vercel to use `wc-assignment/package.json` and serve the `dist` folder.
- Recommended Vercel settings (Project Settings → Build & Output):
  - Root Directory: `wc-assignment`
  - Install Command: `npm ci` (or `npm install`)
  - Build Command: `npm run build`
  - Output Directory: `dist`

If you prefer config-as-code, the existing `vercel.json` should handle this automatically on deploy.

Troubleshooting
- If Vercel returns a 404 after deploy, confirm the Root Directory is set to `wc-assignment` and that `dist` exists after the build.
# wc-assignment