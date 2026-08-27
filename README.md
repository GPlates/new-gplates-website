### How to develop locally

On my macbook, the Python in the system is no good. Use a conda env for good Python instead.

- Step 0: nvm use 24
- Step 1: `npm install --legacy-peer-deps`
- Step 2: `npm run build`
- Step 3: `gatsby develop`

### Deployment

The site is deployed to GitHub Pages by [the deployment workflow](.github/workflows/deploy-pages.yml) whenever changes are pushed to `main`.

GitHub Pages must be configured to use **GitHub Actions** as its source in the repository's **Settings → Pages**. The workflow supports the standard project-site URL (`https://gplates.github.io/new-gplates-website/`) by applying the correct Gatsby path prefix.

If deploying at a custom domain such as `www.gplates.org`, configure that domain in GitHub Pages and update its DNS records before retiring the Netlify site. The existing root-relative links will continue to work at the custom domain.

### Netlify-only features

- `static/admin/config.yml` is configured for Netlify Git Gateway. GitHub Pages cannot provide that service, so a GitHub-compatible CMS or another editing workflow is needed before using `/admin`.
- `lambda/hello.js` is a Netlify Function. GitHub Pages only serves static files; move that endpoint to another serverless host if it becomes used.
