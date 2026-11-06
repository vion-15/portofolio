
import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center py-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">

        {/* Left: Introduction */}
        <div>
          {profile.openToWork && (
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.openToWorkText}
            </span>
          )}

          <p className="font-mono text-sm text-accent-400 light:text-accent-600">
            Hi, my name is
          </p>

          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white light:text-slate-900 sm:text-7xl">
            {profile.name}.
          </h1>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-400 light:text-slate-500 sm:text-5xl">
            {profile.role}.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 light:text-slate-600">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download résumé
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact me
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-slate-500">
            📍 {profile.location}
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 light:border-slate-200 light:bg-slate-100">
            <Image
              src="/images/foto.jpeg"
              alt={`${profile.name} - Profile photo`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
