# Abdullah Zulfiqar – Developer Portfolio

A modern, dark‑mode friendly, developer‑focused portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
It showcases my work across backend, systems, mobile, and web engineering, plus open‑source contributions (OWASP ZAP, Haiku OS, CERN ROOT).

---

## Overview

This repo contains the source for my personal portfolio.  
The site is intentionally minimal, fast, and code‑centric:

- **Sidebar + content layout** on desktop, single‑column on mobile.
- **Dark/light theme** with system + local‑storage preference.
- **Framer Motion animations** with subtle motion (no flashy effects).
- **Projects** highlighting data‑heavy/backend work and real systems projects.
- **Experience** including education, open source, and freelance engineering.

Sections:

1. `Hero` – intro, photo, social links, resume download.  
2. `About` – background, interests, and long‑term goals.  
3. `Skills` – languages, backend/systems, tools, and research directions.  
4. `Projects` – backend, systems, mobile, and mini‑projects.  
5. `Experience` – education, open source, freelance work.  
6. `Contact` – email/social links + mailto contact form.

---

## Tech Stack

| Area        | Tech                          |
|------------|-------------------------------|
| Framework  | React 18                      |
| Build      | Vite                          |
| Styling    | Tailwind CSS                  |
| Animation  | Framer Motion                 |
| Icons      | Lucide React                  |
| Package    | npm                           |

---

## Getting Started (Local Development)

### Prerequisites

- **Node.js** ≥ 18 recommended  
- **npm** (comes with Node)

### Clone & install

```bash
git clone https://github.com/<your-username>/Portfolio.git
cd Portfolio
npm install
```

### Run dev server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

---

## Production Build

To create an optimized build:

```bash
npm run build
```

The output goes to the `dist/` folder.

You can preview the production build locally:

```bash
npm run preview
```

---

## Deploying

You can deploy the built `dist/` folder almost anywhere (GitHub Pages, Vercel, Netlify, etc.).

### GitHub Pages (static hosting)

One common approach with Vite is:

1. Build the project:

   ```bash
   npm run build
   ```

2. Push the repo to GitHub:

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

3. Use a GitHub Pages workflow (or a tool like `vite-plugin-gh-pages`) to publish the `dist/` folder to the `gh-pages` branch.  
   If you prefer, you can also host the `dist` output on **Vercel** or **Netlify** by connecting the repo and setting:

   - **Build command**: `npm run build`  
   - **Output directory**: `dist`

---

## Project Structure (high level)

```text
src/
  main.jsx         # Vite/React entry
  App.jsx          # Layout, theme + navigation
  index.css        # Tailwind base + custom utility classes
  components/
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
public/
  assets/
    me.png
    Abdullah-Zulfiqar-resume.pdf
```

---

## Git ignore / what not to commit

This project already includes a `.gitignore` that ignores:

- `node_modules/`
- build artifacts (`dist/`, `dist-ssr/`)
- log files (`*.log`, tool debug logs)
- editor/IDE config (`.vscode/`, `.idea/`, etc.)

That is enough for pushing this Vite/React project safely to GitHub.

---

## Contact

If something here is broken or you want to collaborate:

- **Email**: `abdullahzulfiqar580@gmail.com`  
- **GitHub**: `https://github.com/AbdullahZulfiqar2005`  
- **LinkedIn**: `https://www.linkedin.com/in/abdullah-zulfiqar-7a4240287`

Feel free to open an issue or a pull request if you spot improvements.  
This portfolio is meant to evolve as my work and interests do.

