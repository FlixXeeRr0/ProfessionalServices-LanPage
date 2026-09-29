import type { ReactNode } from 'react';
import { codeContent } from '@/data/profile';

interface CodeLine {
  content: ReactNode;
  indent?: number;
}

const lines: CodeLine[] = [
  {
    content: (
      <span>
        <span className="text-white">const</span>{' '}
        <span className="text-sky">desarrollador</span> = {'{'}
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="text-blue-300">nombre</span>:{' '}
        <span className="text-lime-bright">'{codeContent.nombre}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">rol</span>:{' '}
        <span className="text-lime-bright">'{codeContent.rol}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">servicios</span>:{' '}
        <span className="text-lime-bright">'{codeContent.servicios}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">modalidad</span>:{' '}
        <span className="text-lime-bright">'{codeContent.modalidad}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">compromiso</span>:{' '}
        <span className="text-lime-bright">'{codeContent.compromiso}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">ubicacion</span>:{' '}
        <span className="text-lime-bright">'{codeContent.ubicacion}'</span>,
      </span>
    ),
    indent: 1,
  },
  {
    content: (
      <span>
        <span className="text-blue-300">disponible</span>:{' '}
        <span className="text-amber">{codeContent.disponible}</span>,
      </span>
    ),
    indent: 1,
  },
  { content: <span>{'}'}</span> },
];

export function CodePanel() {
  return (
    <div className="w-full max-w-full sm:max-w-md rounded-2xl border border-line bg-ink-dark shadow-[-8px_10px_10px_1px_rgba(14,165,233,0.2)] overflow-hidden">
      <div className="flex items-center gap-2 bg-slate-800 border-b border-slate-700 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-amber-300" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden />
        <span className="ml-3 font-mono text-xs text-slate-400">perfil.ts</span>
      </div>
      <pre className="p-5 font-mono text-[13px] leading-7 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="select-none text-text-muted/40 w-4 text-right shrink-0">
              {i + 1}
            </span>
            <span
              style={{ paddingLeft: `${(line.indent ?? 0) * 1.25}rem` }}
              className="whitespace-pre text-text/90"
            >
              {line.content}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
