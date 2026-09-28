import { SectionHeading } from '@/components/ui/SectionHeading';
import { courses, education } from '@/data/profile';

export function Education() {
  return (
    <section id="sobre-mi" className="border-t border-line/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading title="Formación" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {education.map((entry) => (
            <div key={entry.id} className="flex flex-col gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-text">
                  {entry.title}
                </h3>
                <p className="text-sm text-amber">{entry.institution}</p>
              </div>
              {entry.details && (
                <ul className="flex flex-col gap-2">
                  {entry.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm leading-relaxed text-text-muted"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-text">
              Cursos complementarios
            </h3>
            <ul className="flex flex-col gap-2">
              {courses.map((course) => (
                <li
                  key={course}
                  className="text-sm leading-relaxed text-text-muted"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
