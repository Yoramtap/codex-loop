# PRD: Mobile Usability Polish (v1)

## 1. Introduction/Overview
The current mobile experience feels cramped and hard to scan. This PRD covers spacing, typography, and tap‑target improvements for the home page, blog index, and blog post pages to make the site easier to use on phones.

## 2. Goals
- Improve readability and scanning on mobile.
- Increase tap targets and spacing for links and cards.
- Reduce visual crowding in the hero and card lists.
- Keep the existing visual style and typography.

## 3. User Stories

### US-201: Mobile Hero Readability
**Description:** As a mobile visitor, I want the hero section to feel clear and breathable so that I can understand the site quickly.

**Acceptance Criteria:**
- [ ] Hero buttons stack vertically with comfortable spacing and larger tap targets.
- [ ] Hero image scales down on small screens and does not dominate above‑the‑fold.
- [ ] Hero meta line is readable and not cramped.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-202: Mobile Card Scannability
**Description:** As a mobile visitor, I want cards to be easy to scan and tap so that I can browse notes comfortably.

**Acceptance Criteria:**
- [ ] Card vertical spacing increases on mobile (more separation between cards).
- [ ] Metadata text is more readable (slightly larger size or reduced tracking).
- [ ] Card tap target remains full‑card and feels obvious on mobile.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-203: Mobile Post Readability
**Description:** As a mobile reader, I want the post page to feel easy to navigate so that I can read without friction.

**Acceptance Criteria:**
- [ ] “Back to blog” link is visually stronger (button or larger link).
- [ ] Post body spacing increases between sections and lists.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

## 4. Functional Requirements
1. Apply mobile‑first spacing adjustments in CSS modules for home, blog index, and post pages.
2. Maintain current typography and palette.
3. Keep existing routes and data model unchanged.

## 5. Non-Goals (Out of Scope)
- New pages or layout changes on desktop.
- Adding search or filters.
- Changing content or post data structures.

## 6. Design Considerations
- Minimum 44–48px tap targets for mobile links.
- Use larger line‑height on mobile for better readability.
- Avoid overly tall hero imagery on small screens.

## 7. Technical Considerations
- Required: use `agent-browser` skill to verify mobile layout.
- Optional: review with `web-design-guidelines` after changes.

## 8. Success Metrics
- Mobile pages feel more breathable with clear tap targets.
- Reduced visual crowding on home and blog index.
- No layout regressions on desktop.

## 9. Open Questions
- Should we add a “top” anchor on long mobile blog lists?
