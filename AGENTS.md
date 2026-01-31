# Ralph Agent Instructions

## Overview

Ralph is an autonomous AI agent loop that runs Codex repeatedly until all PRD items are complete. Each iteration is a fresh instance with clean context.

## Commands

```bash
# Create a PRD with Codex
./scripts/prd.sh "Describe the feature you want"

# Convert a PRD to prd.json
./scripts/convert-prd.sh tasks/prd-[feature-name].md

# Run Ralph
./ralph.sh [max_iterations]
```

## Key Files

- `ralph.sh` - The bash loop that spawns fresh AI instances (supports `--tool amp`, `--tool claude`, or `--tool codex`)
- `CODEX.md` - Instructions given to each Codex instance
- `workflows/prd.md` - Codex PRD generator prompt
- `workflows/ralph.md` - Codex PRD → prd.json converter prompt
- `scripts/prd.sh` - Run the Codex PRD generator
- `scripts/convert-prd.sh` - Convert a PRD to prd.json with Codex
- `prd.json.example` - Example PRD format

## Patterns

- Each iteration spawns a fresh Codex instance with clean context
- Memory persists via git history, `progress.txt`, and `prd.json`
- Stories should be small enough to complete in one context window
- Always update AGENTS.md with discovered patterns for future iterations
- This repo uses `skills/` for agent skills; PRDs are generated via `scripts/prd.sh`

## Skills

### Available skills

- agent-browser: Automates browser interactions for web testing, form filling, screenshots, and data extraction. (file: /Users/yoramtap/Documents/AI/codex-loop/skills/agent-browser/SKILL.md)
- vercel-react-best-practices: React and Next.js performance optimization guidelines from Vercel Engineering. (file: /Users/yoramtap/Documents/AI/codex-loop/skills/vercel-react-best-practices/SKILL.md)
- web-design-guidelines: Review UI code for Web Interface Guidelines compliance. (file: /Users/yoramtap/Documents/AI/codex-loop/skills/web-design-guidelines/SKILL.md)
