# Muhammad Usman Yousaf Portfolio Website

This is a static portfolio website built with plain HTML, CSS, and JavaScript.

There is no framework, server, or database. Netlify runs one small build script that prepares the image files and the CV PDF for hosting.

## Local Preview

The simplest way is to open `index.html` in a browser.

Optional local server:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## How to Update Content

Most routine edits happen in `projects.js`.

- Update `portfolioData.profile` for headline, contact details, and summary.
- Update `portfolioData.projects` to add, remove, or reorder projects.
- Project image paths point to `assets/project-images/site/`.
- The downloadable CV path is `assets/downloads/Muhammad_Usman_Yousaf_CV.pdf`. The website currently offers only the CV as a download.
- For each project, keep `summary`, `role`, `quickScan`, `metrics`, `facts`, `caseStudy`, and `tools` complete.
- The `caseStudy` object controls the detailed popup content: challenge, contribution, design decisions, deliverables, validation, and outcome.

## Netlify Settings

Netlify settings are configured in `netlify.toml`.

- Build command: `node scripts/build-site.js`
- Publish directory: `dist`
- Environment variables: none required
- Production branch: `main`

## GitHub to Netlify Workflow

Use GitHub as the source of truth. Netlify should deploy automatically from GitHub.

1. Make updates in a new branch, not directly on `main`.
2. Open a pull request.
3. Review the Netlify deploy preview.
4. Merge the pull request when it looks correct.
5. Netlify deploys production from `main`.

More detail is in `docs/github-netlify-workflow.md`.
