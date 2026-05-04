# GitHub and Netlify Workflow

This website is a plain static site. It uses HTML, CSS, JavaScript, project image data, and a CV download. There is no React, Next.js, Vite, Astro, database, or server.

## Netlify Build Settings

These settings are stored in `netlify.toml`.

- Build command: leave empty
- Publish directory: `.`
- Environment variables: none required
- Production branch: `main`

Because the site is plain HTML/CSS/JS, Netlify only needs to copy the files and host them.

## How GitHub Connects to Netlify

1. Create or open the GitHub repository for this portfolio.
2. In Netlify, open the project.
3. Go to **Project configuration**.
4. Open **Build and deploy**.
5. Connect the site to the GitHub repository.
6. Set the production branch to `main`.
7. Keep deploy previews enabled for pull requests.

After this, do not upload ZIP files for normal updates. Push changes to GitHub instead.

## Safe Update Flow

Use this flow for every future website change.

1. Create a new branch from `main`.
2. Make the website update on that branch.
3. Open a pull request.
4. Netlify creates a deploy preview for the pull request.
5. Review the preview link.
6. Merge the pull request only when the preview looks correct.
7. Netlify deploys production automatically from `main`.

Production should only deploy from `main`.

## Pull Request Checks

GitHub runs a small check on every pull request using `.github/workflows/site-checks.yml`.

It checks:

- JavaScript syntax
- Project image data
- CV download data

The pull request also uses `.github/pull_request_template.md` so every change includes a summary, files changed, testing notes, and Netlify setup notes.

## What to Edit

- Main page structure: `index.html`
- Project content: `projects.js`
- Styling and layout: `styles.css`
- Interactions such as search and popups: `script.js`
- Project image data: `image-data/`
- CV download data: `cv-data/`

Most routine updates should be made in `projects.js`.

## Local Preview

The simplest way:

1. Open `index.html` in your browser.
2. Check the page visually.
3. Click project cards and test search/filtering.

Optional local server:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Review Checklist Before Merging

- The homepage opens.
- Project images load.
- Search and filters work.
- Project popups open and close.
- The CV download button works.
- The Netlify deploy preview looks correct on desktop and mobile.
- The GitHub checks pass.
