"use client";

import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3" aria-label="Main">
        <a href="#" className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
          {"<"}
          {profile.name.split(" ")[0]}
          {" />"}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-sm font-semibold text-slate-900 dark:text-white">Welcome</p>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 px-6 py-3 dark:border-slate-800 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-slate-700 dark:text-slate-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
