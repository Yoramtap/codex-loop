# PRD: Night Vision Mode (v1)

## 1. Introduction/Overview
Add a hidden “Night Vision” mode that toggles a green‑tinted, night‑vision theme when the user types “night” anywhere on the site. The effect should be subtle and keep the calm aesthetic.

## 2. Goals
- Add an easter‑egg style theme toggle without cluttering the main UI.
- Keep the visual tone calm and readable.
- Persist the mode across reloads.

## 3. User Stories

### US-501: Secret Trigger
**Description:** As a visitor, I want a hidden trigger so that I can unlock a special mode without UI clutter.

**Acceptance Criteria:**
- [ ] Typing “night” anywhere toggles Night Vision mode on/off.
- [ ] Typing “day” anywhere toggles Night Vision mode off.
- [ ] A subtle toast or text cue confirms the toggle every time.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-502: Night Vision Theme
**Description:** As a visitor, I want the theme to change so that the mode feels distinct.

**Acceptance Criteria:**
- [ ] Night Vision updates background, text, and accent colors to a green‑tinted palette.
- [ ] The theme remains readable and calm.
- [ ] Typecheck passes.

### US-503: Persistence
**Description:** As a visitor, I want the mode to persist so that I don’t have to re‑enter the trigger on reload.

**Acceptance Criteria:**
- [ ] Mode state is stored in localStorage.
- [ ] On page load, the mode restores if previously enabled.
- [ ] Typecheck passes.

## 4. Functional Requirements
1. Global key listener captures typed characters and matches “night” and “day”.
2. Theme applies via a CSS class or data attribute on `body` or `html`.
3. Mode can be toggled on/off by repeating the trigger.

## 5. Non-Goals (Out of Scope)
- Permanent UI toggle in settings.
- Multiple themes or customization.
- Sound effects or animations.

## 6. Design Considerations
- Palette should be soft green with low contrast drift (avoid harsh neon).
- Keep the existing typography and spacing.

## 7. Technical Considerations
- Required: use `agent-browser` skill to verify the toggle.
- Optional: apply `vercel-react-best-practices` for any state handling.

## 8. Success Metrics
- Trigger works consistently across pages.
- Theme is readable and not visually jarring.
- Mode persists across reloads.

## 9. Open Questions
- Should the toast appear on every toggle or only first time?
