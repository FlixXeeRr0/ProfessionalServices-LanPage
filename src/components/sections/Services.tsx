import { SectionHeading } from '@/components/ui/SectionHeading';
import { serviceHeader, services } from '@/data/profile';

export function Services() {
  return (
    <section id="servicios" className="light bg-ink w-full">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-semibold text-md text-blue">SERVICIOS</span>

        <SectionHeading
          title={serviceHeader.title}
          subtitle={serviceHeader.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="flex gap-4 rounded-xl border border-line bg-surface! p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-dim/50 hover:shadow-md hover:shadow-blue/50"
              >
                {Icon && (
                  <div className="flex min-h-15 min-w-15 max-h-15 max-w-15 items-center justify-center text-4xl text-blue-dim">
                    <Icon />
                  </div>
                )}
                <div>
                  <h3 className="font-display text-xl font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
