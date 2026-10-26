import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. DevOps portfolio.</p>
        <p className="font-mono text-xs">Built with care — motion respects reduced-motion settings.</p>
      </div>
    </footer>
  );
}
