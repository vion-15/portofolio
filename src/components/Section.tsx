import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="py-20">
      <p className="font-mono text-sm text-accent-600 dark:text-accent-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
