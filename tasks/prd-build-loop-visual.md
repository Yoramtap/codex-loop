# PRD: Build Loop Visualization (v1)

## 1. Introduction/Overview
Add a small animated “Build Loop” visualization to the home page that reinforces the site’s narrative: ship, note, repeat. The component should animate once when it scrolls into view.

## 2. Goals
- Visually express the build cycle in a compact, tasteful way.
- Keep the animation subtle and non‑distracting.
- Fit the current editorial aesthetic and mobile layout.

## 3. User Stories

### US-401: Build Loop Section
**Description:** As a visitor, I want a clear build‑loop visualization so that the iterative nature of the blog is obvious.

**Acceptance Criteria:**
- [ ] A new “Build Loop” section appears between the hero and the build notes cards.
- [ ] It lists: Code → Commit → Test → Write note → Ship.
- [ ] Animation plays once when the section scrolls into view.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-402: Mobile Behavior
**Description:** As a mobile visitor, I want the build loop to remain legible so that it’s usable on small screens.

**Acceptance Criteria:**
- [ ] Steps stack cleanly on mobile with comfortable spacing.
- [ ] Animation timing remains subtle and not jarring on mobile.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

## 4. Functional Requirements
1. Use minimal line icons or simple shapes for each step.
2. Use IntersectionObserver (or equivalent) to trigger animation on scroll.
3. Keep the animation purely decorative; no functional dependencies.

## 5. Non-Goals (Out of Scope)
- Complex interactive timeline controls.
- Looping animation or autoplay on page load.
- New routes or data structures.

## 6. Design Considerations
- Match existing palette and typography.
- Keep motion under ~1.5s total to avoid distraction.
- Use soft opacity/translate transitions rather than loud movement.

## 7. Technical Considerations
- Required: use `agent-browser` skill to verify the animation triggers.
- Consider `prefers-reduced-motion` to disable or simplify animation.
- Optional: apply `vercel-react-best-practices` skill while implementing the component.
- Optional: review with `web-design-guidelines` after implementation.

## 8. Success Metrics
- Build loop is visible and legible on desktop and mobile.
- Animation triggers once on scroll and feels subtle.

## 9. Open Questions
- Do we want icons or text‑only steps for the first iteration?
