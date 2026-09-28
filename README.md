# Portfolio — Agustín Cardoza

Landing page de portfolio / servicios profesionales. React + TypeScript + Tailwind CSS + MUI + react-icons, sobre Vite.

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de producción en /dist
npm run preview   # sirve el build de /dist
npm run lint
```

## Arquitectura

```
src/
├── components/
│   ├── layout/      # Header (nav + scroll-spy) y Footer
│   ├── sections/     # Una sección de la página = un componente (Hero, Services, Experience, Skills, About, Contact)
│   └── ui/           # Piezas reutilizables sin conocimiento de negocio (SectionHeading, CodePanel)
├── data/              # Contenido: perfil, experiencia, servicios, navegación. Editar aquí, no en los componentes.
├── hooks/             # Lógica reutilizable (useActiveSection para el scroll-spy del nav)
├── theme/             # Tema de MUI, alineado a los tokens de color de Tailwind
├── types/             # Contratos TypeScript del dominio (perfil, experiencia, servicios...)
├── index.css          # Tokens de diseño de Tailwind v4 (@theme) y estilos base
└── App.tsx            # Composición de la página
```

**Principio guía:** cada sección es un componente que solo sabe renderizar; los datos viven en `src/data` tipados por `src/types`. Para actualizar el CV (nueva experiencia, nuevo servicio, cambio de correo), se edita únicamente `src/data/profile.ts` — ningún componente cambia. Esto separa contenido de presentación (responsabilidad única) y permite extender sin tocar código existente (abierto/cerrado).

## Personalización rápida

- **Contenido del CV / contacto / servicios:** `src/data/profile.ts`
- **Enlaces de navegación:** `src/data/navigation.ts`
- **Colores y tipografías:** `src/index.css` (bloque `@theme`) y `src/theme/muiTheme.ts` — ambos leen los mismos valores para que Tailwind y MUI no se desincronicen.
- **Panel de código del hero:** `src/components/ui/CodePanel.tsx`

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 (config vía `@theme` en CSS, sin `tailwind.config.js`)
- MUI (Material UI) para componentes interactivos (botones, chips, drawer)
- react-icons (`react-icons/hi`, `react-icons/fa`)
- Vite
