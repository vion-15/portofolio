import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
      © 2026 {profile.name}. Built with Next.js &amp; Tailwind CSS.
    </footer>
  );
}
