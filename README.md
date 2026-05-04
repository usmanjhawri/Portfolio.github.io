# Muhammad Usman Yousaf Portfolio Website

This repository contains Muhammad Usman Yousaf's portfolio website.

The site is intentionally simple:

- Framework: plain HTML, CSS, and JavaScript
- Build command: none
- Publish directory: `.`
- Environment variables: none
- Production branch: `main`

Netlify should be used only for hosting and deployment. GitHub is the source of truth.

## How to Run Locally

Open `index.html` in a browser.

Optional local server:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## How to Make Future Updates

For normal updates, do not edit `main` directly.

1. Create a new branch from `main`.
2. Edit the website content.
3. Open a pull request.
4. Review the Netlify deploy preview.
5. Merge the pull request when the preview looks correct.
6. Netlify deploys production automatically from `main`.

## Where to Edit

Because this is a compact static site, the main content is currently in `index.html`.

Common edits:

- Project text: project data inside the `<script>` section of `index.html`
- Styling: the `<style>` section of `index.html`
- Contact links: the contact section near the bottom of `index.html`
- Netlify settings: `netlify.toml`

## GitHub and Netlify Connection

In Netlify:

1. Open the Netlify project.
2. Go to Project configuration.
3. Open Build and deploy.
4. Connect this GitHub repository.
5. Set production branch to `main`.
6. Keep deploy previews enabled for pull requests.

After this is connected, do not upload ZIP files to Netlify for normal changes.

## Netlify Build Settings

These are also stored in `netlify.toml`.

- Build command: leave empty
- Publish directory: `.`
- Production branch: `main`
- Environment variables: none required

## Review Checklist

Before merging a pull request:

- Homepage opens
- Search works
- Category filters work
- Project case studies expand
- Contact links work
- Netlify deploy preview looks correct on desktop and mobile
- GitHub checks pass
