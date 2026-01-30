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
- This Codex-only repo does not use `skills/`; PRDs are generated via `scripts/prd.sh`
