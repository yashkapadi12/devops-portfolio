#!/usr/bin/env bash
# Creates public GitHub repos (one by one) and pushes initial commits.
# Requires: gh auth login (account with repo create access)
set -euo pipefail

GITHUB_USER="${GITHUB_USER:-yashkapadi12}"

if ! gh auth status -h github.com &>/dev/null; then
  echo "GitHub CLI is not logged in. Run: gh auth login -h github.com"
  echo "Then re-run: ./scripts/push-repos-to-github.sh"
  exit 1
fi

push_repo() {
  local name="$1"
  local dir="$2"
  local message="$3"

  echo ""
  echo "========== $name =========="
  cd "$dir"

  if [[ ! -d .git ]]; then
    git init -b main
  fi

  if ! git rev-parse HEAD &>/dev/null; then
    git add -A
    git commit -m "$message"
  fi

  if git remote get-url origin &>/dev/null; then
    git push -u origin main
  else
    gh repo create "${GITHUB_USER}/${name}" --public --source=. --remote=origin --push
  fi

  echo "Done: https://github.com/${GITHUB_USER}/${name}"
}

push_repo "one-click-release-pipeline" \
  "/Users/yash/Documents/one-click-release-pipeline" \
  "Initial commit: Flask demo with GitHub Actions CI/CD pipeline"

push_repo "terraform-iac-platform" \
  "/Users/yash/Documents/terraform-iac-platform" \
  "Initial commit: Terraform network module and dev environment"

push_repo "observability-stack" \
  "/Users/yash/Documents/observability-stack" \
  "Initial commit: Prometheus, Grafana, and demo metrics app"

push_repo "devops-portfolio" \
  "/Users/yash/Documents/devops_portfolio_website" \
  "Initial commit: DevOps portfolio website"

echo ""
echo "All repositories pushed."
