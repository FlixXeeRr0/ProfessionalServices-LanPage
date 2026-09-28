import { createTheme } from '@mui/material/styles'

/**
 * Single source of visual truth shared conceptually with the Tailwind
 * tokens in index.css. Keeping the raw hex values here (instead of reading
 * CSS vars) avoids a runtime dependency between MUI's theme creation and
 * the stylesheet load order.
 */
export const tokens = {
  ink: '#0f172a',
  surface: '#1e293b',
  surfaceRaised: '#334155',
  line: '#334155',
  text: '#f8fafc',
  textMuted: '#94a3b8',
  blue: '#3b82f6',
  blueDim: '#2563eb',
}

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: tokens.ink, paper: tokens.surface },
    primary: { main: tokens.blue, contrastText: tokens.text },
    text: { primary: tokens.text, secondary: tokens.textMuted },
    divider: tokens.line,
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Inter', sans-serif" },
    h2: { fontFamily: "'Inter', sans-serif" },
    h3: { fontFamily: "'Inter', sans-serif" },
    h4: { fontFamily: "'Inter', sans-serif" },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: '1.25rem', paddingBlock: '0.65rem' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Inter', monospace",
          fontSize: '0.75rem',
          backgroundColor: tokens.surfaceRaised,
          border: `1px solid ${tokens.line}`,
          color: tokens.text,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})
