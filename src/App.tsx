import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { muiTheme } from '@/theme/muiTheme'
// import { Education } from '@/components/sections/Education'

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <About />
        {/* <Education /> */}
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
