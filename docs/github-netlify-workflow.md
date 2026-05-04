# GitHub and Netlify Workflow

This website is a plain static site. It does not use React, Next.js, Vite, Astro, Jekyll, a database, or a server.

## Netlify Build Settings

- Build command: leave empty
- Publish directory: `.`
- Environment variables: none required
- Production branch: `main`

These settings are saved in `netlify.toml`.

## How the Workflow Works

GitHub stores the website code. Netlify hosts the website.

When a pull request is opened, Netlify creates a deploy preview. This preview lets you check the website before it becomes public.

When the pull request is merged into `main`, Netlify updates the public production website automatically.

## Safe Update Flow

1. Make changes in a new branch.
2. Open a pull request.
3. Review the Netlify deploy preview.
4. Merge only after the preview looks right.
5. Production deploys from `main`.

Do not edit `main` directly for normal updates.

## What You Need to Do in Netlify Once

1. Open your Netlify project.
2. Go to Project configuration.
3. Open Build and deploy.
4. Connect this GitHub repository: `usmanjhawri/Portfolio.github.io`.
5. Set production branch to `main`.
6. Leave build command empty.
7. Set publish directory to `.`.
8. Keep deploy previews enabled.

After that, updates should happen through GitHub pull requests, not ZIP uploads.

## For Muhammad

You do not need to understand the code to maintain the workflow. Ask for an update, review the Netlify preview link, and approve the merge when it looks good.
