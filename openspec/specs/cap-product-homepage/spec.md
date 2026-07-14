# Product Homepage

<!-- last-verified: 2026-07-14 -->

## Requirements

### Requirement: Static product homepage

Intent: Visitors can understand ACP Pro and reach install or purchase actions quickly.

#### Scenario: View product homepage

- GIVEN a visitor opens `https://acp-pro.github.io`
- WHEN the homepage loads
- THEN the visitor sees ACP Pro positioning, primary benefits, product visuals, an install call to action, and a Pro licensing call to action

#### Scenario: Serve without server runtime

- GIVEN GitHub Pages serves the site
- WHEN a public page is requested
- THEN the page is delivered as static HTML, CSS, JavaScript, and assets with no SSR dependency

### Requirement: SEO-ready metadata

Intent: The homepage can be indexed and shared professionally.

#### Scenario: Crawler reads homepage

- GIVEN a search or social crawler requests the homepage
- WHEN it parses the document head
- THEN it finds a title, description, canonical URL, Open Graph metadata, Twitter metadata, robots policy, and product-oriented structured metadata

#### Scenario: Canonical domain is generated

- GIVEN the site is built for production
- WHEN metadata URLs are generated
- THEN canonical and social URLs use `https://acp-pro.github.io`

### Requirement: GitHub Pages deployment

Intent: Publishing the main branch updates the static homepage.

#### Scenario: Deploy from main

- GIVEN a commit is pushed to `main`
- WHEN GitHub Actions runs
- THEN Astro builds the static output and deploys it to GitHub Pages

#### Scenario: Build fails

- GIVEN the static site has a build error
- WHEN GitHub Actions runs
- THEN deployment is rejected and the existing published site remains unchanged

### Requirement: Screenshot-led workflow story

Intent: Visitors can understand how ACP Pro supports visible execution, agent setup, and browser access through accurate, readable product screenshots.

#### Scenario: Understand the end-to-end workflow

- GIVEN a visitor is evaluating ACP Pro
- WHEN the visitor browses the homepage workflow showcase
- THEN the visitor encounters observable task execution before agent discovery and configuration, followed by browser access to the live workspace
- AND the screenshots retain their source proportions while their detail views keep the primary product context visible

#### Scenario: Understand remote access beyond teammate sharing

- GIVEN a visitor wants to leave the primary workstation while an agent continues working
- WHEN the visitor reads the remote workspace story
- THEN the visitor learns that the live workspace can be checked from a phone or desktop browser for personal monitoring as well as shared review
- AND the visitor sees that share-code, owner-password, access-mode, and workspace controls protect remote access

#### Scenario: Product screenshot is unavailable

- GIVEN a product screenshot cannot be displayed
- WHEN assistive technology or fallback content presents the workflow story
- THEN a meaningful text description identifies the product view and the capability it demonstrates
