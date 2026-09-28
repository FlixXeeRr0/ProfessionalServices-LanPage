import { useCallback } from 'react';
import Button from '@mui/material/Button';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineDownload,
} from 'react-icons/hi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import {
  contact,
  contactSection1,
  contactSection2,
  whatsAppInfo,
} from '@/data/profile';

export function Contact() {
  const handleOpenWhatsApp = useCallback(() => {
    const webRoute = `https://api.whatsapp.com/send?phone=${whatsAppInfo.phone}&text=${whatsAppInfo.message}`;

    window.open(webRoute, '_blank');
  }, []);

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-blue/30 bg-surface p-8 sm:p-12 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                {contactSection1.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {contactSection1.subtitle}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-5 items-start">
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="small"
                href={`mailto:${contact.email}`}
                startIcon={<HiOutlineMail />}
              >
                {contactSection1.actionText1}
              </Button>
              <Button
                variant="contained"
                fullWidth
                size="small"
                onClick={handleOpenWhatsApp}
                startIcon={<FaWhatsapp />}
                sx={{
                  backgroundColor: 'rgba(37, 211, 102,0.8)',
                  borderColor: 'rgba(37, 211, 102,0.5)',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(28, 160, 77)',
                    borderColor: 'rgba(37, 211, 102,0.8)',
                  },
                }}
              >
                {contactSection1.actionText2}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:border-l md:border-line md:pl-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                {contactSection2.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {contactSection2.subtitle}
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-5 items-start">
              <Button
                variant="outlined"
                size="small"
                fullWidth
                href="/cv.pdf"
                target="_blank"
                startIcon={<HiOutlineDownload />}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                {contactSection2.actionText1}
              </Button>
              <Button
                variant="outlined"
                size="small"
                fullWidth
                href={`https://${contact.linkedin}`}
                target="_blank"
                startIcon={<FaLinkedin />}
                sx={{
                  borderColor: 'rgba(10, 102, 194, 0.5)',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  '& .MuiButton-startIcon': {
                    color: '#0A66C2',
                  },
                  '&:hover': {
                    borderColor: '#0A66C2',
                    backgroundColor: 'rgba(10, 102, 194, 0.1)',
                  },
                }}
                rel="noreferrer"
              >
                {contactSection2.actionText2}
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-full gap-4 md:border-l md:border-line md:pl-8 pt-2">
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <HiOutlineMail className="text-blue-400 shrink-0" size={18} />
              <span className="truncate">{contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <HiOutlinePhone className="text-blue-400 shrink-0" size={18} />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <HiOutlineLocationMarker
                className="text-blue-400 shrink-0"
                size={18}
              />
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
