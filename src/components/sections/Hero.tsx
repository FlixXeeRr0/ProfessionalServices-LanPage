import Button from '@mui/material/Button';
import { HiArrowRight } from 'react-icons/hi';
import { PiCodeLight, PiChatDots, PiClockLight } from 'react-icons/pi';

import { CodePanel } from '@/components/ui/CodePanel';
import { profile } from '@/data/profile';

export function Hero() {
  const scrollToContact = () => {
    document
      .getElementById('contacto')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-grid pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-blue/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6 min-w-0">
          <span className="font-semibold text-md text-blue">
            DESARROLLADOR DE SOFTWARE
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Soluciones digitales <p className="text-blue">para hacer crecer</p>{' '}
            tu negocio
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-text-muted">
            {profile.summary}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<HiArrowRight />}
              onClick={scrollToContact}
            >
              Hablemos de tu proyecto
            </Button>
            <a
              href="#experiencia"
              className="text-sm font-medium text-text-muted underline decoration-line underline-offset-4 transition-colors hover:text-text"
            >
              Ver experiencia
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-15 mt-5">
            <div className="flex gap-4 sm:max-w-40 items-center">
              <PiCodeLight className="shrink-0 text-[35px] sm:text-[40px]" />
              <span className="text-sm sm:text-base">Código limpio y mantenible</span>
            </div>
            <div className="flex gap-4 sm:max-w-40 items-center">
              <PiChatDots className="shrink-0 text-[35px] sm:text-[40px]" />
              <span className="text-sm sm:text-base">Comunicación constante</span>
            </div>
            <div className="flex gap-4 sm:max-w-40 items-center">
              <PiClockLight className="shrink-0 text-[35px] sm:text-[40px]" />
              <span className="text-sm sm:text-base">Entrega puntual</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full sm:pb-4 min-w-0">
          <CodePanel />
        </div>
      </div>
    </section>
  );
}
