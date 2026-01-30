#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="$ROOT/workflows/prd.md"
ANSWERS=""
FEATURE_DESC=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --answers)
      ANSWERS="$2"
      shift 2
      ;;
    --answers=*)
      ANSWERS="${1#*=}"
      shift
      ;;
    *)
      FEATURE_DESC="${FEATURE_DESC:+$FEATURE_DESC }$1"
      shift
      ;;
  esac
done

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Missing $PROMPT_FILE"
  exit 1
fi

if [[ -t 0 && -z "$ANSWERS" ]]; then
  PROMPT="$(cat "$PROMPT_FILE")"
  if [[ -n "$FEATURE_DESC" ]]; then
    PROMPT+=$'\n\n'"Feature description:"$'\n'"$FEATURE_DESC"
  fi
  codex -C "$ROOT" "$PROMPT"
  exit 0
fi

if [[ -z "$ANSWERS" ]]; then
  echo "Non-interactive mode requires --answers \"1A, 2B, 3A\""
  exit 1
fi

{
  cat "$PROMPT_FILE"
  if [[ -n "$FEATURE_DESC" ]]; then
    echo ""
    echo "Feature description:"
    echo "$FEATURE_DESC"
  fi
  echo ""
  echo "Answers: $ANSWERS"
} | codex exec --full-auto --cd "$ROOT" -
