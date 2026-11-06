import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02. Skills" title="Tech I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
