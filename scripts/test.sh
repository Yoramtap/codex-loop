#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB_DIR="$SCRIPT_DIR/../web"

if [ ! -d "$WEB_DIR" ]; then
  echo "Tests: skipped - expected web/ directory not found."
  exit 0
fi

if [ ! -f "$WEB_DIR/package.json" ]; then
  echo "Tests: skipped - web/package.json not found."
  exit 0
fi

if ! grep -q '"test"' "$WEB_DIR/package.json"; then
  echo "Tests: skipped - no test script configured in web/package.json."
  exit 0
fi

if [ ! -d "$WEB_DIR/node_modules" ]; then
  echo "Tests: failed - dependencies not installed. Run 'npm install' in web/."
  exit 1
fi

echo "Tests: running npm test"
cd "$WEB_DIR"
npm test
