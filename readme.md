# LINE Contact Page

A single-page site with one job: let visitors reach out on LINE with one tap.

## What it is

- A centered card with a headline, short intro, and a "Contact Me on LINE" button.
- The button links to a LINE contact URL (`https://line.me/ti/p/~weya.exe`), opening the LINE app or `line.me` in a new tab.

## Technologies

- Plain static HTML and CSS — no framework, build step, or JavaScript needed.
- Deployed on Netlify as a static site (see `netlify.toml`).

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

Or with the Netlify CLI (matches production behavior, including redirects if any are added later):

```bash
netlify dev
```

## Notes

- No backend, database, or forms are used — this page only needs a static link.
