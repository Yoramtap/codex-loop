#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB_DIR="$SCRIPT_DIR/../web"

if [ ! -d "$WEB_DIR" ]; then
  echo "Typecheck: failed - expected web/ directory not found."
  exit 1
fi

if [ ! -f "$WEB_DIR/package.json" ]; then
  echo "Typecheck: failed - web/package.json not found."
  exit 1
fi

if [ ! -x "$WEB_DIR/node_modules/.bin/tsc" ]; then
  echo "Typecheck: failed - dependencies not installed. Run 'npm install' in web/."
  exit 1
fi

echo "Typecheck: running tsc --noEmit"
cd "$WEB_DIR"
./node_modules/.bin/tsc --noEmit
