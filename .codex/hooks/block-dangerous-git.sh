#!/bin/bash
# .codex/hooks/block-dangerous-git.sh

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')
BRANCH=$(git branch --show-current 2>/dev/null)
# Only enforce on main/master
if [[ "$BRANCH" != "main" && "$BRANCH" != "master" ]]; then
  exit 0
fi
DANGEROUS_PATTERNS=(
  "git push --force"
  "git push -f"
  "git reset --hard"
  "git clean -f"
  "git checkout -- ."
)
for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -q "$pattern"; then
    echo "Blocked: '$pattern' is not allowed on $BRANCH. Create a feature branch first." >&2
    exit 2
  fi
done
exit 0  