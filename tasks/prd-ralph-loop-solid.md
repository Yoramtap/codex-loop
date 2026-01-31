# PRD: Ralph Loop Solidification (v1)

## 1. Introduction/Overview
We want the Ralph loop to feel “solid” quickly. This PRD focuses on the highest‑ROI fixes: real quality checks, stricter git hygiene in `ralph.sh`, and better error handling when Codex fails. These changes reduce false confidence and improve reliability of the loop.

## 2. Goals
- Make `typecheck.sh` a real gate (not a no‑op).
- Enforce clean working tree and correct branch in `ralph.sh`.
- Fail fast (or stop after repeated failures) when Codex errors occur.
- Improve shell safety with strict modes.

## 3. User Stories

### US-301: Real Quality Checks
**Description:** As a maintainer, I want quality checks to be real so that Ralph doesn’t report false success.

**Acceptance Criteria:**
- [ ] Replace the no‑op in `./scripts/typecheck.sh` with a real command (or fail with a clear message if missing).
- [ ] Add `./scripts/test.sh` and/or `./scripts/lint.sh` if relevant, or document why they are absent.
- [ ] `ralph.sh` runs real checks and fails the iteration if they fail.

### US-302: Git Hygiene Enforcement
**Description:** As a maintainer, I want Ralph to enforce a clean working tree and correct branch before work so that we avoid corrupted state.

**Acceptance Criteria:**
- [ ] `ralph.sh` checks for a clean working tree before starting an iteration.
- [ ] `ralph.sh` ensures the branch from `prd.json` exists or is created; if it cannot, it exits with a clear error.
- [ ] If branch creation fails (e.g., permissions), `ralph.sh` logs the reason and stops instead of proceeding on `main`.

### US-303: Fail Fast on Codex Errors
**Description:** As a maintainer, I want Ralph to stop on Codex execution errors so that failures don’t cascade.

**Acceptance Criteria:**
- [ ] `ralph.sh` detects Codex execution errors and exits immediately.
- [ ] If Codex fails repeatedly (N times), Ralph aborts and logs the failure.
- [ ] Error messages point to the failing command and iteration.

### US-304: Safer Shell Defaults
**Description:** As a maintainer, I want strict shell settings so that scripts fail fast on errors and unset variables.

**Acceptance Criteria:**
- [ ] Add `set -euo pipefail` to `ralph.sh`.
- [ ] Ensure any intentional non‑fatal command is guarded with `|| true` and a comment.

## 4. Functional Requirements
1. `typecheck.sh` performs a real check or fails explicitly if not configured.
2. `ralph.sh` validates branch and cleanliness before running Codex.
3. Codex failures terminate the iteration promptly.
4. `ralph.sh` runs in strict mode.

## 5. Non-Goals (Out of Scope)
- Rewriting the entire Ralph loop architecture.
- Adding new tools or external CI systems.
- Changing the PRD format or story schema.

## 6. Design Considerations
- Clear, actionable error messages for developers.
- Minimal behavior changes beyond reliability/guardrails.

## 7. Technical Considerations
- Required: update shell scripts carefully to avoid breaking existing workflows.
- Consider logging failures to `progress.txt` or a dedicated log file.

## 8. Success Metrics
- Ralph iterations fail when checks fail (no false green).
- Branch/dirty state errors are caught before work begins.
- Codex errors stop the loop reliably.

## 9. Open Questions
- What is the correct typecheck command for this repo (if any)?
- Should lint/test scripts be optional or required in all repos?
