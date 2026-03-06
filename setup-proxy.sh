#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  OMIG Conditional Proxy Setup
#  Run this once in your terminal: bash setup-proxy.sh
# ─────────────────────────────────────────────────────────────

PROXY_HOST="hacluster.za.investment.int"
PROXY_PORT="3128"
PROXY_URL="http://${PROXY_HOST}:${PROXY_PORT}"

CLAUDE_SETTINGS="$HOME/.claude/settings.json"
SHELL_RC="$HOME/.zshrc"
# Fall back to .bash_profile if zsh is not present
[ ! -f "$SHELL_RC" ] && SHELL_RC="$HOME/.bash_profile"

MARKER="# >>> OMIG conditional proxy (auto-added by setup-proxy.sh) <<<"
MARKER_END="# <<< OMIG conditional proxy end <<<"

# ── 1. Remove static proxy from ~/.claude/settings.json ──────
if [ -f "$CLAUDE_SETTINGS" ]; then
  echo "📄 Updating $CLAUDE_SETTINGS ..."
  # Back up first
  cp "$CLAUDE_SETTINGS" "${CLAUDE_SETTINGS}.backup"
  # Use Python to safely remove the env block containing proxy keys
  python3 - "$CLAUDE_SETTINGS" <<'PYEOF'
import json, sys

path = sys.argv[1]
with open(path) as f:
    data = json.load(f)

env = data.get("env", {})
env.pop("HTTP_PROXY", None)
env.pop("HTTPS_PROXY", None)
env.pop("http_proxy", None)
env.pop("https_proxy", None)

# Remove the env key entirely if it's now empty
if not env:
    data.pop("env", None)
else:
    data["env"] = env

with open(path, "w") as f:
    json.dump(data, f, indent=2)

print("  ✅ Removed static proxy from settings.json")
PYEOF
else
  echo "⚠️  $CLAUDE_SETTINGS not found — skipping (Claude Code may not be installed yet)"
fi

# ── 2. Add conditional proxy block to shell profile ──────────
echo ""
echo "📄 Updating $SHELL_RC ..."

# Remove any previous block we added (idempotent)
if grep -q "$MARKER" "$SHELL_RC" 2>/dev/null; then
  echo "  ♻️  Replacing existing proxy block ..."
  # Delete lines between markers (inclusive)
  sed -i.bak "/$MARKER/,/$MARKER_END/d" "$SHELL_RC"
fi

# Append the new conditional block
cat >> "$SHELL_RC" <<SHELLEOF

${MARKER}
# Proxy is only set when the work proxy host is reachable (i.e. on the work network).
# At home, nc will time out silently and the variables will remain unset.
if nc -z -w1 ${PROXY_HOST} ${PROXY_PORT} 2>/dev/null; then
  export HTTP_PROXY="${PROXY_URL}"
  export HTTPS_PROXY="${PROXY_URL}"
  export NO_PROXY="localhost,127.0.0.1,::1"
else
  unset HTTP_PROXY HTTPS_PROXY NO_PROXY
fi
${MARKER_END}
SHELLEOF

echo "  ✅ Conditional proxy block added to $SHELL_RC"

# ── 3. Summary ───────────────────────────────────────────────
echo ""
echo "────────────────────────────────────────────────────────"
echo "✅  Setup complete!"
echo ""
echo "What was done:"
echo "  • Removed static proxy from ~/.claude/settings.json"
echo "  • Added a network-aware proxy block to $SHELL_RC"
echo ""
echo "How it works:"
echo "  • On work network  → proxy is detected & set automatically"
echo "  • On home wifi     → proxy is unreachable, variables are cleared"
echo ""
echo "To apply immediately in this terminal session, run:"
echo "  source $SHELL_RC"
echo "────────────────────────────────────────────────────────"
