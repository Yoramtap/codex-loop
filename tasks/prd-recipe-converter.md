# PRD: Recipe Converter

## 1. Introduction/Overview
Users often need to scale recipes or convert units between metric and US customary. The Recipe Converter feature lets a user enter a recipe once and quickly generate a converted version with consistent ingredient amounts, units, and optional yield adjustments.

## 2. Goals
- Convert ingredient quantities between metric and US customary accurately.
- Support scaling recipes up or down by a user-selected factor.
- Preserve ingredient names and notes while changing only amounts/units.
- Provide a clear, printable converted view.

## 3. User Stories

### US-001: Convert Units
**Description:** As a home cook, I want to convert a recipe between metric and US customary so that I can follow it with my local measuring tools.

**Acceptance Criteria:**
- [ ] User can select source and target unit systems (metric <-> US customary).
- [ ] Ingredient quantities are converted using standard conversion factors.
- [ ] Ingredient text (name, preparation notes) remains unchanged.
- [ ] Converted recipe displays in a separate panel or view from the original.
- [ ] Typecheck passes.
- [ ] **[UI stories only]** Verify in browser using agent-browser skill.

### US-002: Scale Recipe Yield
**Description:** As a user, I want to scale a recipe by servings or a multiplier so that I can cook for different group sizes.

**Acceptance Criteria:**
- [ ] User can choose a multiplier (e.g., 0.5x, 2x) or target servings.
- [ ] Ingredient quantities update consistently across all items.
- [ ] Scaling can be applied before or after unit conversion without breaking results.
- [ ] Typecheck passes.
- [ ] **[UI stories only]** Verify in browser using agent-browser skill.

### US-003: Copy/Export Converted Recipe
**Description:** As a user, I want to copy or export the converted recipe so that I can save or share it.

**Acceptance Criteria:**
- [ ] User can copy the converted recipe text to clipboard.
- [ ] Exported text includes title, ingredients, and instructions in order.
- [ ] Exported text reflects current conversion and scaling settings.
- [ ] Typecheck passes.
- [ ] **[UI stories only]** Verify in browser using agent-browser skill.

## 4. Functional Requirements
1. Parse ingredient lines into quantity, unit, and ingredient text.
2. Convert supported units between metric and US customary (e.g., g <-> oz, ml <-> fl oz, C <-> g for water-equivalent by default).
3. Allow scaling by numeric multiplier and optionally by target servings.
4. Provide a UI for inputting recipe title, ingredients, and instructions.
5. Show original and converted recipes side-by-side or via toggle.
6. Provide copy/export for the converted recipe.

## 5. Non-Goals (Out of Scope)
- Nutrition calculation or calorie estimation.
- Ingredient substitutions or smart conversions (e.g., density per ingredient).
- Automatic parsing of recipes from URLs.

## 6. Design Considerations (Optional)
- Use a two-column layout: original on left, converted on right.
- Provide a clear toggle for metric/US and a multiplier control near the top.
- Highlight changed quantities to improve scanability.

## 7. Technical Considerations (Optional)
- Define a unit conversion map with normalized base units.
- Handle fractional quantities (e.g., 1/2, 1 1/4) and decimals.
- Keep conversion logic deterministic and testable with unit tests.

## 8. Success Metrics
- 95%+ conversion accuracy on a test set of common units.
- 80%+ of sessions that input a recipe complete a conversion.
- <2s time-to-convert for typical recipe sizes (<30 ingredients).

## 9. Open Questions
- Should density-based conversions be supported for specific ingredients (flour, sugar, butter)?
- What is the minimum unit list we must support for MVP?
- Should we allow mixed systems within a single output (e.g., tablespoons + grams)?
