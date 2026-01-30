#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="$ROOT/workflows/ralph.md"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Missing $PROMPT_FILE"
  exit 1
fi

PRD_PATH="${1:-}"
if [[ -z "$PRD_PATH" ]]; then
  PRD_PATH="$(ls -t "$ROOT"/tasks/prd-*.md 2>/dev/null | head -n 1 || true)"
fi

if [[ -z "$PRD_PATH" || ! -f "$PRD_PATH" ]]; then
  echo "PRD not found. Provide a path, e.g., scripts/convert-prd.sh tasks/prd-feature.md"
  exit 1
fi

{
  cat "$PROMPT_FILE"
  echo ""
  echo "PRD path: $PRD_PATH"
} | codex exec --full-auto --cd "$ROOT" -
