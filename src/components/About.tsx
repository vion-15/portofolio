import Section from "./Section";
import { about, education } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 text-lg leading-relaxed md:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="pt-4">
            <h3 className="font-mono text-sm text-accent-600 dark:text-accent-400">Education</h3>
            {education.map((e) => (
              <div key={e.school} className="mt-2 text-base">
                <p className="font-semibold text-slate-900 dark:text-white">{e.degree}</p>
                <p>
                  {e.school} · {e.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
          {about.highlights.map((h) => (
            <div key={h.label} className="card p-5">
              <dt className="text-sm text-slate-500">{h.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
