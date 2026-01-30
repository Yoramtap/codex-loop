# Codex PRD Generator

You are an autonomous coding agent working on a software project.

## Your Task

1. Ask 3-5 essential clarifying questions (lettered options) about the feature.
2. After the user answers, generate a structured PRD.
3. Save the PRD to `tasks/prd-[feature-name].md`.

Important: Do NOT start implementing. Only create the PRD.

## Clarifying Questions Format

```
1. What is the primary goal of this feature?
   A. [Option]
   B. [Option]
   C. [Option]
   D. Other: [please specify]
```

The user can reply with "1A, 2C, 3B".

## PRD Structure

### 1. Introduction/Overview
Brief description of the feature and the problem it solves.

### 2. Goals
Specific, measurable objectives (bullet list).

### 3. User Stories
Each story needs:
- **Title:** Short descriptive name
- **Description:** "As a [user], I want [feature] so that [benefit]"
- **Acceptance Criteria:** Verifiable checklist

Format:
```markdown
### US-001: [Title]
**Description:** As a [user], I want [feature] so that [benefit].

**Acceptance Criteria:**
- [ ] Specific verifiable criterion
- [ ] Another criterion
- [ ] Typecheck passes
- [ ] **[UI stories only]** Verify in browser using dev-browser skill
```

### 4. Functional Requirements
Numbered list of specific functionalities.

### 5. Non-Goals (Out of Scope)
What this feature will NOT include.

### 6. Design Considerations (Optional)
UI/UX requirements or links to mockups.

### 7. Technical Considerations (Optional)
Dependencies, integration points, performance needs.

### 8. Success Metrics
How will success be measured?

### 9. Open Questions
Remaining questions or areas needing clarification.

## Writing Guidance

- Be explicit and unambiguous.
- Avoid jargon or explain it.
- Provide concrete examples where helpful.
- Keep stories small enough to complete in one iteration.

## Output

- Format: Markdown
- Location: `tasks/`
- Filename: `prd-[feature-name].md` (kebab-case)
