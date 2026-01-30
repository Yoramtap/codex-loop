# PRD: Recipe Converter

## 1. Introduction/Overview
Build a standalone HTML page that converts a recipe into a lower-calorie version of the same dish using fixed substitutions. The user provides a single input (the original recipe text), and the tool returns a rewritten, lower-calorie recipe with clear substitutions.

## 2. Goals
- Accept a single text input containing a full recipe (ingredients + steps).
- Produce a lower-calorie version of the same dish using a fixed substitution list.
- Clearly label substitutions so users can see what changed.
- Run entirely in a standalone HTML file with no external dependencies.

## 3. User Stories
### US-001: Paste a Recipe and Convert
**Description:** As a home cook, I want to paste a recipe into one input field so that I can get a lower-calorie version quickly.

**Acceptance Criteria:**
- [ ] Page has one primary text input for the full recipe.
- [ ] A single action (button or auto-run) converts the recipe.
- [ ] Output displays the converted recipe in a readable format.
- [ ] Typecheck passes

### US-002: See Clear Substitutions
**Description:** As a user, I want to see what substitutions were made so that I understand how calories were reduced.

**Acceptance Criteria:**
- [ ] Output highlights or lists each substitution used.
- [ ] If no substitutions apply, output states that explicitly.
- [ ] Typecheck passes

### US-003: Use Offline Without Dependencies
**Description:** As a user, I want a standalone HTML file so that I can use the converter offline.

**Acceptance Criteria:**
- [ ] The solution runs in a single HTML file.
- [ ] No external scripts, styles, or APIs are required.
- [ ] Typecheck passes

## 4. Functional Requirements
1. Provide a single text input area for the full recipe.
2. Provide a convert action that generates the lower-calorie recipe.
3. Apply a fixed substitution mapping (e.g., sugar -> sweetener, whole milk -> skim milk).
4. Preserve the original dish structure (ingredients list and steps remain recognizable).
5. Output the converted recipe and a substitution summary.
6. Handle recipes with no applicable substitutions by returning the original with a notice.

## 5. Non-Goals (Out of Scope)
- No dynamic calorie calculation or nutritional analysis.
- No user accounts or saved history.
- No multi-recipe batch processing.
- No external recipe API integration.

## 6. Design Considerations (Optional)
- Simple two-panel layout: input on the left, output on the right (or stacked on mobile).
- Clear typography for ingredients vs. steps (headings or bold labels).
- Substitution summary in a distinct section.

## 7. Technical Considerations (Optional)
- Pure HTML/CSS/JS in one file.
- Deterministic substitution list stored in JS.
- Basic parsing heuristics to keep sections intact (e.g., split by headings like “Ingredients” and “Directions”).

## 8. Success Metrics
- 90%+ of test recipes convert with at least one substitution when applicable.
- Users can generate output within 1 click or keystroke.
- Output remains readable and maintains the original recipe’s structure.

## 9. Open Questions
- What is the exact fixed substitution list?
- Should substitutions be applied only to ingredients or also within steps?
- Should the converter preserve original measurements or adjust them?
- Should the UI auto-run on paste or require a button click?
