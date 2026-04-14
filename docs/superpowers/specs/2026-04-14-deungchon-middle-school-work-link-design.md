# Deungchon Middle School Work Link Design

## Summary

Build a desktop-first, Apple-inspired departmental link hub titled `Deungchon Middle School Work Link`.
The page organizes work links by department in a Kanban-board style layout with a sticky rounded top navigation.
Initial release uses sample links so the overall visual design can be reviewed first; real links will be swapped in later without changing the layout system.

## Goals

- Provide a single page where school staff can reach department-specific work links quickly.
- Prioritize PC usability while keeping the same content structure functional on tablet and phone.
- Balance operational clarity with a polished, calm visual tone.

## Non-Goals

- No authentication, personalization, or admin editing UI in this phase.
- No complex search or filtering in the first version.
- No CMS or backend dependency for initial delivery.

## Users And Context

- Primary users: school staff working from desktop or laptop browsers during normal office workflows.
- Secondary users: staff occasionally referencing the same link hub from tablets or phones.
- Main job to be done: jump to frequently used systems without hunting across bookmarks or separate documents.

## Visual Direction

### Overall Tone

- Apple-inspired light interface adapted into a practical Kanban board.
- Broad, bright page background with restrained depth and strong spacing rhythm.
- Rounded surfaces and glass-like navigation create softness without reducing clarity.

### Typography

- Use Paperlogy as the primary font family in the implementation.
- Headings should feel assertive and clean; body text should remain easy to scan at operational speeds.
- Preserve clear hierarchy through larger display sizes, moderate weight contrast, and short readable descriptions.

### Color And Surfaces

- Light background base with subtle blue-tinted neutrals.
- Blue is the only strong accent for interactive emphasis and section highlights.
- Avoid high-noise gradients, loud secondary accents, or heavy shadowing.

### Brand Assets

- Use the uploaded school emblem image as favicon.
- Reuse the same emblem in the header brand area where appropriate.

## Information Architecture

### Departments

The page contains these departments in fixed order:

1. 교무기획부
2. 교육연구부
3. 생활안전부
4. 창체활동부
5. 과학정보부
6. 인성상담부
7. 통합지원부
8. 진로진학부

## Page Structure

### Top Navigation

- A rounded department menu sits at the top of the page.
- On first load, the navigation appears more transparent.
- After scrolling, it remains pinned to the top and shifts to a slightly tinted translucent glass treatment.
- Each menu item scrolls to its matching department section.
- Desktop shows the full menu in one visual bar; smaller screens use horizontally scrollable menu pills inside the same sticky bar.

### Hero / Introduction Area

- A short hero block introduces the page title and purpose.
- This area should explain that the page is a departmental work-link board.
- The hero should not dominate the page so much that it delays access to the board.

### Department Board Lanes

- Each department is represented as its own board lane/section.
- A lane contains:
  - Department title
  - Short helper description or category hint
  - Grid of link cards
- All lanes follow the same visual system to keep scanning predictable.

### Link Cards

- Each link is represented as a prominent card/button hybrid.
- Cards should include:
  - Short label
  - Optional tag or category chip
  - One-line or two-line support text
  - Visual affordance that it opens a destination
- Cards use sample destinations in the initial release.

## Interaction Design

### Navigation Behavior

- Sticky behavior activates immediately when the user scrolls beyond the initial top state.
- The visual change between transparent and tinted states should be smooth and short.
- The top bar must remain rounded at both ends in all states.

### Card Feedback

- Clicking a link card should produce a short press effect.
- The effect should feel tactile rather than flashy: slight downward motion, scale reduction, or surface darkening.
- Hover states can be slightly elevated on desktop, but click feedback is more important than hover decoration.

### Link Behavior

- Each card should open its assigned URL directly.
- Initial implementation uses sample links until real URLs are provided later.
- Card data should be easy to update without rewriting layout code.

## Responsive Behavior

### Desktop

- Desktop is the primary layout target.
- Board lanes should feel wide and spacious.
- Link cards can use a four-column grid where space allows.

### Tablet

- Preserve the same lane order and same sticky-navigation concept.
- Card grid should reduce to two columns or a comfortable adaptive layout.

### Mobile

- Preserve the same department order and same content hierarchy.
- Lanes stack vertically with one-column cards.
- The top department menu remains sticky and becomes a horizontally scrollable pill row.

## Content Strategy

- Populate each department with sample link cards in the first implementation.
- Sample content should be realistic enough to judge density, rhythm, and readability.
- Later link replacement should only require editing structured data, not redesigning markup.

## Technical Design

### Implementation Shape

- Use a static single-page implementation.
- No backend is required for the first version.
- Prefer a simple data-driven rendering model where department and link content are defined in arrays or objects.

### Suggested Data Model

- A top-level department list ordered to match the approved sequence.
- Each department entry contains:
  - `id`
  - `name`
  - `description`
  - `links[]`
- Each link entry contains:
  - `title`
  - `subtitle` or `description`
  - `tag`
  - `url`

### Asset Handling

- Favicon and optional header emblem use the uploaded school logo file.
- Font loading must support Paperlogy reliably and degrade safely if unavailable.

## Accessibility And Robustness

- Sticky navigation and cards must be keyboard accessible.
- Focus states must remain visible on the light interface.
- Motion effects should degrade cleanly under reduced-motion preferences.
- Text and surfaces must maintain sufficient contrast.
- Long department or link labels should wrap cleanly without breaking card height rhythm excessively.

## Error Handling

- If a link URL is missing, the card should not break layout.
- Missing URLs can default to a safe placeholder or disabled sample behavior during development.
- Logo load failure should not break the header structure.

## Testing Strategy

### Visual Checks

- Verify first-load transparent nav state.
- Verify scrolled tinted sticky nav state.
- Verify department order and section anchors.
- Verify card density and spacing on desktop, tablet, and mobile.

### Interaction Checks

- Verify each sample card opens a destination.
- Verify press feedback appears consistently on pointer and touch interaction.
- Verify sticky menu items navigate to the correct section.

### Responsive Checks

- Desktop: wide-screen layout feels intentional and uncluttered.
- Tablet: card grid remains readable without awkward orphan spacing.
- Mobile: menu stays usable and cards remain comfortably tappable.

## Open Decisions Already Resolved

- Direction selected: `A. Apple Board`
- Primary usage context: PC-first
- Secondary support: tablet and mobile adaptation required
- Initial content mode: sample links first, real links added later one by one
- Favicon asset: uploaded school emblem

## Delivery Scope For First Build

- One polished page implementing the approved visual language
- Sticky rounded department navigation with transparent-to-tinted scroll state
- Eight department sections in fixed order
- Sample link cards with tactile click feedback
- Responsive behavior for desktop, tablet, and mobile
