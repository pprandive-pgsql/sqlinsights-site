# SQLInsights Static Website

This repository contains the static marketing/landing page for SQLInsights.

## Files

- `index.html` — landing page
- `styles.css` — responsive styling
- `script.js` — mobile navigation
- `CNAME` — custom domain configuration for GitHub Pages

## GitHub Pages

1. Create a GitHub repository for this website.
2. Upload these files to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. Configure the custom domain as `sqlinsights.in`.
8. At Hostinger, configure the DNS records recommended by GitHub Pages.
9. Enable HTTPS in GitHub Pages once DNS has propagated.

Do not cancel the existing SQLInsights hosting until the static site is live and verified on `https://sqlinsights.in`.

## Local Preview

Because this is a static site, it can be opened directly as `index.html`, or served with any simple static HTTP server.

No Python, Node.js, PostgreSQL, Docker, or backend service is required.


### Contact
The landing page uses a static contact panel with email-app, Gmail, and copy-email fallbacks; no backend contact form is required.
