import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { contact } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">
          © {year} Agustín Cardoza. Culiacán, Sinaloa, México.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Correo"
            className="text-text-muted transition-colors hover:text-blue"
          >
            <HiOutlineMail size={20} />
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-blue"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`https://${contact.website}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Sitio web"
            className="text-text-muted transition-colors hover:text-blue"
          >
            <FaGlobe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
