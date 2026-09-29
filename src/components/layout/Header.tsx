import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { PiCodeLight } from 'react-icons/pi';

import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  const handleNavigate = (id: string) => {
    setMenuOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavigate('inicio')}
          className="flex gap-5 items-center font-display text-lg font-semibold tracking-tight text-text"
        >
          <PiCodeLight size={40} />
          Agustín Cardoza
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-md transition-colors ${
                activeId === item.id
                  ? 'text-blue font-bold'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <IconButton
          className="md:hidden!"
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen(true)}
          sx={{
            color: 'text.primary',
            display: { xs: 'inline-flex', md: 'none' },
          }}
        >
          <HiOutlineMenu size={22} />
        </IconButton>
      </div>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="flex h-full w-64 flex-col gap-1 bg-surface px-6 py-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-display text-base font-semibold text-text">
              Menú
            </span>
            <IconButton
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              sx={{ color: 'text.primary' }}
            >
              <HiOutlineX size={20} />
            </IconButton>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`rounded-md px-3 py-3 text-left text-sm transition-colors ${
                activeId === item.id
                  ? 'bg-surface-raised text-blue'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
