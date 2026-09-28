# AGENTS.md

## Project architecture

This is intentionally a plain static site, not a framework app:

- `index.html` — the single page: a card with a headline, blurb, and the LINE contact link/button.
- `styles.css` — all styling for that card (LINE-brand green, rounded card, button states).
- `netlify.toml` — publishes the repo root as-is (`publish = "."`), no build command.

## Key directories

There are no subdirectories. Everything lives at the project root by design, since the site is a single static page.

## Coding conventions

- No JavaScript is used or needed. Keep it that way unless a real interactive feature is requested.
- Keep the LINE button's `href` as the source of truth for the contact link. If the LINE ID/URL changes, update it in `index.html` only.
- Colors follow LINE's brand green (`#06c755`) defined as CSS variables in `styles.css`; reuse those variables rather than hardcoding new colors.

## Non-obvious decisions

- The project template scaffolder (TanStack Start templates) was unavailable when this was built (GitHub was unreachable), so the site was hand-built as static HTML/CSS instead of starting from the "marketing" template. There is no framework dependency to migrate away from later — this is a deliberate, permanent choice given the page's scope (one link, one action).
- No database, forms, or functions are used because the only requirement is an outbound link — there is nothing to persist or process server-side.
