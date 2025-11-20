
# Neurialab | Neuralexica — v3 Portal

This repository holds the static front-of-house portal for **Neurialab / Neuralexica**.

The v3 portal is designed to be:

- **Static and portable** — pure HTML/CSS + assets, deployable on GitHub Pages, Neocities, or any static host.
- **Legible to collaborators** — clear mapping between the public surfaces and the underlying research stack.
- **Safe to extend** — you can grow it with generators later without breaking the base layer.

## Structure

- `index.html` — Codex landing surface with the four cymatic scalars (Self, System, Governance, Cosmologist).
- `blogs.html` — scalar-tagged fragment index for essays and white fragments.
- `contact.html` — minimal contact surface for studios, collaborators, and researchers.
- `assets/css/global.css` — global styling for all pages.
- `assets/img/logo_full.png` — Neurialab hero logo used across the portal.
- `assets/data/project-map.md` — seed project map for connecting this surface to deeper research artifacts.
- `LICENSE` — MIT license.

## Deployment

This folder can safely live at the **root of a GitHub repository** or a **Neocities site**.

- For **GitHub Pages**, point your Pages configuration at the branch containing this folder (usually `main`) and use the root directory.
- For **Neocities**, upload these files directly; no build step is required.

## Extending v3

- Add new blog fragments by editing `blogs.html`.
- Update channels and contact preferences in `contact.html`.
- Use `assets/data/project-map.md` as the canonical index describing how this portal maps to your devices, ledgers, and private research spaces.
