# Codex PRD → prd.json Converter

You are an autonomous coding agent working on a software project.

## Your Task

1. Read the PRD (markdown file) provided by the user.
2. Convert it to `prd.json` format for Ralph.
3. Save to `prd.json` in the repo root.

## Output Format

```json
{
  "project": "[Project Name]",
  "branchName": "ralph/[feature-name-kebab-case]",
  "description": "[Feature description from PRD title/intro]",
  "userStories": [
    {
      "id": "US-001",
      "title": "[Story title]",
      "description": "As a [user], I want [feature] so that [benefit]",
      "acceptanceCriteria": [
        "Criterion 1",
        "Criterion 2",
        "Typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

## Rules

- Each PRD user story becomes one JSON entry.
- IDs: Sequential (US-001, US-002, etc.)
- Priority: Dependency order first, then PRD order.
- All stories: `passes: false` and `notes: ""`.
- branchName: kebab-case, prefixed with `ralph/`.
- Always include "Typecheck passes" in acceptance criteria.
- For UI stories, also include "Verify in browser using dev-browser skill".
- Split large stories into smaller, single-iteration chunks.

## Story Size Reminder

Each story must be completable in ONE iteration.
