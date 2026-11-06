# Software Engineer Portfolio (Next.js template)

A fast, accessible, dark-mode-ready portfolio built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. All content lives in one file, so you only edit text, not components.

Sections: Hero (with "open to work" badge) · About · Skills · Experience · Projects · Contact. Includes SEO metadata, Open Graph tags, JSON-LD, sitemap and robots.txt.

## 1. Run locally

Requires Node.js 18.18+ (20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Make it yours

| What | Where |
| --- | --- |
| Name, role, email, links, résumé, "open to work" | `src/data/portfolio.ts` → `profile` |
| About text and stats | `src/data/portfolio.ts` → `about` |
| Skills, experience, projects, education | `src/data/portfolio.ts` |
| Accent color | `tailwind.config.ts` → `colors.accent` |
| Résumé PDF | add `public/resume.pdf` |
| Favicon | `src/app/icon.svg` |
| Social preview image (optional) | add `src/app/opengraph-image.png` (1200×630) |

Tips for job applications:
- Lead experience bullets with results and numbers (latency cut, users served, coverage raised).
- Keep 2–4 strong projects, each with a live demo and a GitHub link.
- Tailor the tagline and skills order to the role you apply for.
- Set `siteUrl` to your real domain after the first deploy so SEO and sitemap are correct.

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and sign in with GitHub.
3. Import the repository. Vercel auto-detects Next.js; leave the defaults.
4. Click **Deploy**. You get a URL like `your-project.vercel.app`.
5. Update `siteUrl` in `src/data/portfolio.ts` to that URL and push. Vercel redeploys automatically on every push to `main`.

Prefer the CLI?
```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

Custom domain: Vercel project → **Settings → Domains**.

## Project structure

```
src/
  app/            layout, page, sitemap, robots, icon, global styles
  components/     Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
  data/portfolio.ts   <- your content
public/           static files (resume.pdf goes here)
```
