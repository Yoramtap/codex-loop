#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="$ROOT/workflows/prd.md"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Missing $PROMPT_FILE"
  exit 1
fi

{
  cat "$PROMPT_FILE"
  if [[ $# -gt 0 ]]; then
    FEATURE_DESC="$*"
    echo ""
    echo "Feature description:"
    echo "$FEATURE_DESC"
  fi
} | codex exec --full-auto --cd "$ROOT" -
