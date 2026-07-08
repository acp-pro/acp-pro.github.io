# ACP Pro Homepage

## 1. Vision

ACP Pro Homepage is a static product site for ACP Pro, a VS Code extension for working with AI coding agents. It helps developers quickly understand the product, install it from the Visual Studio Marketplace, evaluate the Pro offering, and trust the project through fast loading, strong SEO metadata, and a polished AI-product user experience.

## 2. Capabilities

| ID | Name | Status | Spec |
|----|------|--------|------|
| cap-product-homepage | Product homepage | shipped | specs/cap-product-homepage/spec.md |

Status: `planned` | `shipped` | `deprecated`

## 3. Constraints

- **C-HOST-001** (Active): Hosting — The site must be deployable as static files on GitHub Pages at `https://acp-pro.github.io` — user-selected production domain.
- **C-SSR-001** (Active): Runtime — Public pages must not require server-side rendering or a server runtime — GitHub Pages serves static assets only.
- **C-SEO-001** (Active): Public pages — Pages must include crawler-friendly metadata and canonical URLs — product discovery and link previews are primary homepage goals.
- **C-PERF-001** (Active): Frontend — Client-side JavaScript must stay minimal and purposeful — fast first load is a stated project goal.
