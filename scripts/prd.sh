#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="$ROOT/codex/prd.md"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Missing $PROMPT_FILE"
  exit 1
fi

if [[ $# -gt 0 ]]; then
  FEATURE_DESC="$*"
  PROMPT="$(cat "$PROMPT_FILE")"$'\n\n'"Feature description:"$'\n'"$FEATURE_DESC"
else
  PROMPT="$(cat "$PROMPT_FILE")"
fi

codex -C "$ROOT" "$PROMPT"
