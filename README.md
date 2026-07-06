# Shalu Sharma — Academic & Research Portfolio

A single-page personal website built from Shalu Sharma's CV, designed for
academic and research use (job applications, university profiles, research
collaboration outreach). Pure HTML/CSS/JS — no build step, works directly on
GitHub Pages.

## Contents

```
index.html    Main page
style.css     Styles
script.js     Scroll-reveal + footer year
README.md     This file
```

## Deploy on GitHub Pages (step by step)

1. **Create a repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it anything, e.g. `shalu-sharma-portfolio`
   - Set it to **Public** (required for free GitHub Pages)
   - Click **Create repository**

2. **Upload these files**
   - On the new repo page, click **"uploading an existing file"**
   - Drag in `index.html`, `style.css`, `script.js`, and this `README.md`
   - Commit the changes

3. **Turn on GitHub Pages**
   - Go to **Settings → Pages** (left sidebar)
   - Under **Source**, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**

4. **Visit your site**
   - After a minute, your site will be live at:
     `https://<your-github-username>.github.io/<repo-name>/`
   - GitHub shows the exact link at the top of the Pages settings once it's ready

## Editing content later

- All text lives directly in `index.html` — open it in any text editor and
  update the relevant section (education, experience, project, skills,
  achievements, contact).
- Colors, fonts, and spacing are controlled from the `:root` variables at the
  top of `style.css`.

## Using a custom domain (optional)

If you own a domain, add a `CNAME` file to the repo root containing just the
domain (e.g. `shalusharma.com`), then configure the DNS records as described
in GitHub's [custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
