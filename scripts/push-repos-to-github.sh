#!/usr/bin/env bash
# Creates public GitHub repos (one by one) and pushes initial commits.
#
# Option A — GitHub CLI (recommended):
#   gh auth login -h github.com
#   ./scripts/push-repos-to-github.sh
#
# Option B — Personal access token (repo scope):
#   export GH_TOKEN="ghp_..."
#   ./scripts/push-repos-to-github.sh
set -euo pipefail

GITHUB_USER="${GITHUB_USER:-yashkapadi12}"

auth_ok=false
if gh auth status -h github.com &>/dev/null; then
  auth_ok=true
elif [[ -n "${GH_TOKEN:-}" ]]; then
  auth_ok=true
fi

if [[ "$auth_ok" != true ]]; then
  echo "Not authenticated for GitHub API."
  echo "  Run: gh auth login -h github.com"
  echo "  Or: export GH_TOKEN=<personal-access-token with repo scope>"
  exit 1
fi

create_remote_repo() {
  local name="$1"
  if gh auth status -h github.com &>/dev/null; then
    if gh repo view "${GITHUB_USER}/${name}" &>/dev/null; then
      echo "Repo exists: ${name}"
      return 0
    fi
    gh repo create "${GITHUB_USER}/${name}" --public --confirm
    return 0
  fi

  if gh repo view "${GITHUB_USER}/${name}" &>/dev/null 2>&1; then
    echo "Repo exists: ${name}"
    return 0
  fi

  curl -sf -X POST \
    -H "Authorization: Bearer ${GH_TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/user/repos" \
    -d "{\"name\":\"${name}\",\"private\":false,\"auto_init\":false}" \
    >/dev/null
  echo "Created via API: ${name}"
}

push_repo() {
  local name="$1"
  local dir="$2"

  echo ""
  echo "========== ${name} =========="
  cd "$dir"

  if [[ ! -d .git ]]; then
    echo "Missing git repo in ${dir}"
    exit 1
  fi

  if ! git rev-parse HEAD &>/dev/null; then
    echo "No commits in ${dir}"
    exit 1
  fi

  create_remote_repo "$name"

  if git remote get-url origin &>/dev/null; then
    git remote set-url origin "git@github.com:${GITHUB_USER}/${name}.git"
  else
    git remote add origin "git@github.com:${GITHUB_USER}/${name}.git"
  fi

  git push -u origin main
  echo "Pushed: https://github.com/${GITHUB_USER}/${name}"
}

push_repo "one-click-release-pipeline" "/Users/yash/Documents/one-click-release-pipeline"
push_repo "terraform-iac-platform" "/Users/yash/Documents/terraform-iac-platform"
push_repo "observability-stack" "/Users/yash/Documents/observability-stack"
push_repo "devops-portfolio" "/Users/yash/Documents/devops_portfolio_website"

echo ""
echo "All four repositories are on GitHub."
