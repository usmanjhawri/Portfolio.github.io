# Muhammad Usman Yousaf Portfolio Website

This is a static portfolio website built with plain HTML, CSS, and JavaScript.

There is no framework, build tool, server, or database. Netlify can host the site directly from the repository.

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
- Project images and the downloadable CV are currently embedded in `projects.js` / `styles.css` as optimized data links so GitHub and Netlify can deploy without separate binary uploads.
- To replace the CV or project images, ask Codex to update them from the source files.
- For each project, keep `summary`, `role`, `quickScan`, `metrics`, `facts`, `caseStudy`, and `tools` complete.
- The `caseStudy` object controls the detailed popup content: challenge, contribution, design decisions, deliverables, validation, and outcome.

## Netlify Settings

Netlify settings are configured in `netlify.toml`.

- Build command: leave empty
- Publish directory: `.`
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
