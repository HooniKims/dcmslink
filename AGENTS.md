# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static web app. The page shell lives in `index.html`. Runtime behavior and data-driven card rendering live in `assets/app.js`. Visual styling is centralized in `assets/styles.css`. Fonts and image assets are stored under `assets/fonts/` and the repo root (`DCMS_Logo.png`).

Tests are in `tests/app.test.js`. Design references and planning artifacts live in `DESIGN.md` and `docs/superpowers/`. Keep product-facing code in `assets/` and keep process documents in `docs/`.

## Build, Test, and Development Commands
- `npm test`  
  Runs the Node test suite with `node --test tests/app.test.js`.
- `start index.html` or open `index.html` in a browser  
  Useful for quick visual checks on the static page.

There is no separate build step, bundler, or dev server in this project.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, and JavaScript. Prefer small, data-driven functions over inline DOM duplication. In JavaScript, use `const` by default and camelCase for variables and functions (`renderDepartmentSection`, `visibleDepartmentNames`). Keep CSS class names in kebab-case with component-style grouping (`department-lane__title`, `link-card__cta`).

When adding card-specific visuals, extend the existing data model instead of hardcoding markup. Example: add `icon: 'repair'` to a link object, then render it through the shared icon map.

## Testing Guidelines
Tests use Node’s built-in `node:test` runner with `assert/strict`. Add or update tests in `tests/app.test.js` whenever you change rendering logic, navigation behavior, or shared styling assumptions. Name tests by observable behavior, for example: `renderDepartmentSection outputs section anchor and sample link cards`.

Run `npm test` before every commit.

## Commit & Pull Request Guidelines
Recent history mixes concise Korean summaries (`모바일 스크롤 성능 개선`) with conventional commit style (`feat: add dcms departmental link hub`). Follow that pattern: keep messages short, imperative, and specific to the user-facing change.

Pull requests should include:
- a short summary of what changed
- affected files or behaviors
- screenshots for visual changes
- confirmation that `npm test` passed

## Agent-Specific Notes
Preserve `archivedDepartments` when hiding departments. New visible cards should continue to use the shared expanded card layout so restored departments inherit the same presentation automatically.
When editing or inserting a specific card on request, preserve the user's exact Korean wording and spacing for the title and description instead of normalizing it.
When a new or replaced card sits beside cards that already use title icons, add a matching `icon` entry through the shared icon map so the neighboring cards keep a consistent title treatment, unless the user explicitly asks for no icon.
