# PRD: Build Notes Restructure (v1)

## 1. Introduction/Overview
Our current code structure and copy still reference “recipes” and “menus.” We want to reframe the site as a dev-log style food blog about building the site itself, using “Build Notes” language throughout. This PRD defines a refactor that updates routes, copy, data structures, and labels to remove recipe/food terms in favor of “build notes” and “updates,” while keeping the existing URL structure unchanged.

## 2. Goals
- Replace recipe/menu terminology with “Build Notes” and “Updates.”
- Keep URLs the same (no route changes), but update titles, labels, and content.
- Refactor data structures to reflect build-log content.
- Maintain consistent editorial tone and design.

## 3. User Stories

### US-101: Rename Copy & Labels
**Description:** As a visitor, I want the site to clearly communicate that it’s about building the blog so that the narrative feels coherent.

**Acceptance Criteria:**
- [ ] Home page headline, tagline, and section labels reference build notes rather than recipes.
- [ ] Blog index header and card CTA text reflect “build notes” or “updates.”
- [ ] Blog post page headings reference “build notes” instead of “recipes.”
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-102: Refactor Data Structure
**Description:** As a developer, I want the post data model to align with build-log content so that future posts are consistent.

**Acceptance Criteria:**
- [ ] Post data uses fields aligned to build notes (e.g., “summary,” “what shipped,” “learnings”).
- [ ] Any sample content referencing recipes is replaced with build-log entries.
- [ ] Typecheck passes.

### US-103: Update UI Content to Match Data
**Description:** As a visitor, I want the UI to show build-note content that matches the new data structure.

**Acceptance Criteria:**
- [ ] Home featured cards read from the updated build-note data.
- [ ] Blog index cards and blog post pages reflect updated build-note content and labels.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

## 4. Functional Requirements
1. Remove recipe/menu language from all UI copy and CTAs.
2. Keep existing URLs (`/`, `/blog`, `/blog/[slug]`).
3. Update post data to use build-note fields.
4. Ensure all pages read from the updated post data.

## 5. Non-Goals (Out of Scope)
- Changing routes or URL structure.
- Adding new pages beyond the current set.
- CMS integration or publishing workflows.

## 6. Design Considerations
- Preserve existing typography, color palette, and layout.
- Copy should feel calm, reflective, and “work-in-progress.”

## 7. Technical Considerations
- Required: use `agent-browser` skill to verify UI stories in browser.
- Optional: review with `web-design-guidelines` after changes.

## 8. Success Metrics
- No recipe/menu language remains in UI copy or data.
- Build notes read clearly and consistently on all pages.
- Typecheck passes.

## 9. Open Questions
- Do we want a new category taxonomy for build notes (e.g., “layout,” “infrastructure,” “polish”)?
