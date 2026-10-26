export const profile = {
  name: "Your Name",
  title: "DevOps Engineer",
  tagline: "I help teams ship software safely, quickly, and without surprises.",
  email: "hello@example.com",
  github: "https://github.com/yashkapadi12",
  linkedin: "https://linkedin.com/in/yourprofile",
  location: "India",
  /** Drop your portrait here: public/photo.jpg (or .png — update path below) */
  heroPhoto: "/photo.jpg",
  heroPhotoFallback: "/photo.svg",
};

export const heroStats = [
  { value: "99.9%", label: "Uptime focus", plain: "Apps stay online when users need them" },
  { value: "10×", label: "Faster releases", plain: "Updates reach users in hours, not weeks" },
  { value: "0", label: "Manual deploys", plain: "Every release follows the same tested steps" },
];

export const whatIsDevOps = {
  plain:
    "DevOps is how we build, test, and deliver software in a repeatable way — like a factory line with quality checks, so new features reach people reliably instead of breaking things at midnight.",
  technical:
    "I design CI/CD pipelines, infrastructure as code, observability, and secure cloud platforms so teams can deploy often with confidence — Kubernetes, Terraform, and automated gates included.",
};

export const skills = [
  {
    category: "Delivery",
    plain: "Automated paths from code to production",
    items: ["GitHub Actions", "GitLab CI", "Argo CD", "Helm"],
  },
  {
    category: "Cloud & infra",
    plain: "Servers and networks defined as code",
    items: ["AWS", "GCP", "Terraform", "Ansible"],
  },
  {
    category: "Containers",
    plain: "Packaging apps so they run the same everywhere",
    items: ["Docker", "Kubernetes", "ECS", "Prometheus"],
  },
  {
    category: "Reliability",
    plain: "Watching systems and fixing issues early",
    items: ["Grafana", "Datadog", "ELK", "Incident runbooks"],
  },
];

export const projects = [
  {
    title: "One-click release pipeline",
    plain: "Developers push code; tests and security scans run automatically; approved builds go live without manual steps.",
    technical: "Multi-stage GitHub Actions, container scans, blue/green deploy on EKS with rollback hooks.",
    tags: ["CI/CD", "Kubernetes", "Security"],
    repoUrl: "https://github.com/yashkapadi12/one-click-release-pipeline",
  },
  {
    title: "Infrastructure as code platform",
    plain: "All servers and settings are stored in version control — changes are reviewed like application code.",
    technical: "Terraform modules, remote state, policy-as-code with OPA, drift detection jobs.",
    tags: ["Terraform", "AWS", "Governance"],
    repoUrl: "https://github.com/yashkapadi12/terraform-iac-platform",
  },
  {
    title: "Observability stack",
    plain: "Dashboards and alerts tell us when something is wrong before customers notice.",
    technical: "Prometheus + Grafana, log aggregation, SLO-based alerting, on-call playbooks.",
    tags: ["Monitoring", "SRE", "Alerts"],
    repoUrl: "https://github.com/yashkapadi12/observability-stack",
  },
];

export const pipelineSteps = [
  { id: "code", label: "Write code", plain: "Developers commit changes" },
  { id: "build", label: "Build & test", plain: "Automated checks catch bugs early" },
  { id: "scan", label: "Security scan", plain: "Tools look for vulnerabilities" },
  { id: "deploy", label: "Deploy", plain: "Approved version goes live" },
  { id: "watch", label: "Monitor", plain: "Metrics confirm everything is healthy" },
];
