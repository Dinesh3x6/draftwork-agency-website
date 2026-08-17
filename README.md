# Draftwork — Agency Website

A single-page, production-ready website for a web development agency, built with plain HTML/CSS/JS (no build step required) so it runs anywhere immediately.

## Files
- `index.html` — full page markup and semantic structure
- `styles.css` — complete design system and responsive styles
- `script.js` — all content data (services, projects, FAQ, testimonials, etc.) and interactivity (mobile menu, project filter + case-study modal with focus trap, FAQ accordion, animated stats, scroll reveal, form validation with loading state, scroll-to-top, WhatsApp deep link)
- `favicon.svg` — SVG favicon matching the Draftwork logo mark
- `sitemap.xml` — XML sitemap for SEO
- `robots.txt` — search engine crawl directives
- `img/` — project screenshots, OG sharing image

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Customize
- All copy (services, projects, pricing, FAQ, testimonials) lives at the top of `script.js` — edit the arrays there.
- Contact details (email, phone, WhatsApp number) are in `index.html`'s contact section and in the `waMessage`/`waFloat` code in `script.js`.
- Colors, type and spacing are CSS variables at the top of `styles.css` (`--navy`, `--accent`, `--cyan`, etc.).
- The contact form currently shows a loading state and success message on submit — wire it to your backend, a form service (e.g. Formspree), or an API route by replacing the `setTimeout` in `script.js`.
- Social media links in the footer point to placeholder URLs — update them with your actual profiles.
- Replace `draftwork.studio` in meta tags, structured data, canonical URL, sitemap.xml and robots.txt with your actual domain.

## Features
- Blueprint/technical-drafting aesthetic with dark navy palette
- 18 content sections with smooth scroll-reveal animations
- Hero entrance animations (respects `prefers-reduced-motion`)
- 10 service cards with inline SVG icons
- 8-step development process timeline
- 6 portfolio projects with real thumbnails and modal case studies
- Category-filtered project grid
- 3 pricing tiers with starting prices
- 14 FAQ accordion items
- Full project inquiry form (10 fields + file upload)
- WhatsApp floating button
- Scroll-to-top button
- Modal focus trap for accessibility
- Skip-navigation link
- Semantic HTML with `<main>` landmark
- Open Graph + Twitter Card meta tags
- JSON-LD structured data
- SVG favicon
- Print stylesheet
- Mobile-responsive with hamburger menu
