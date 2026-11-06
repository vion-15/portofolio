import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`card flex flex-col ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              {p.featured && (
                <span className="rounded bg-accent-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-700 dark:bg-accent-500/10 dark:text-accent-400">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-3 flex-1">{p.description}</p>
            {p.impact && (
              <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                ↗ {p.impact}
              </p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
                >
                  GitHub ↗
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
