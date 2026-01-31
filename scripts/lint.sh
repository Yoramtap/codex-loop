#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB_DIR="$SCRIPT_DIR/../web"

if [ ! -d "$WEB_DIR" ]; then
  echo "Lint: failed - expected web/ directory not found."
  exit 1
fi

if [ ! -f "$WEB_DIR/package.json" ]; then
  echo "Lint: failed - web/package.json not found."
  exit 1
fi

if [ ! -d "$WEB_DIR/node_modules" ]; then
  echo "Lint: failed - dependencies not installed. Run 'npm install' in web/."
  exit 1
fi

echo "Lint: running npm run lint"
cd "$WEB_DIR"
npm run lint
