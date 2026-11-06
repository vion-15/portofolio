import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const subject = encodeURIComponent("Opportunity: Software Engineer role");

  return (
    <Section id="contact" eyebrow="04. Contact" title="Let's work together">
      <div className="max-w-xl">
        <p className="text-lg leading-relaxed">
          I&apos;m currently looking for new opportunities as a {profile.role}. Whether you have a role
          in mind or just want to say hi, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}?subject=${subject}`} className="btn btn-primary">
            Email me
          </a>
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
          )}
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
