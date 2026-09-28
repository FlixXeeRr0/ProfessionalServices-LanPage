import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience, experienceHeader } from '@/data/profile';

export function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-line/60 bg-surface/30 relative overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 opacity-50 pointer-events-none hidden md:block">
        <img
          src="/network-bg.png"
          alt="background-image"
          className="w-150 h-auto object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 relative z-10">
        <SectionHeading
          title={experienceHeader.title}
          subtitle={experienceHeader.subtitle}
        />

        <ol className="relative flex flex-col gap-12 border-l-2 border-blue/50 pl-8 md:pl-12 ml-4 md:ml-0">
          {experience.map((entry, index) => (
            <li key={entry.id} className="relative">
              <span className="absolute left-[-2.65rem] md:left-[-3.65rem] top-1.5 h-5 w-5 rounded-full border-4 border-blue bg-ink shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-2">
                <div className="flex gap-3">
                  <img
                    src={entry.image}
                    alt={`logo-${entry.id}`}
                    className="h-15 rounded-xl"
                  />
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-text">
                      {entry.role}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      {entry.organization}
                      {entry.location ? ` · ${entry.location}` : ''}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-sm text-white md:text-right mt-2 md:mt-0">
                  {entry.startDate} —{' '}
                  <span className={index === 0 ? 'text-blue font-medium' : ''}>
                    {entry.endDate}
                  </span>
                </span>
              </div>

              <ul className="flex flex-col gap-3 mt-4">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm md:text-base leading-relaxed text-text-muted relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-white"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
