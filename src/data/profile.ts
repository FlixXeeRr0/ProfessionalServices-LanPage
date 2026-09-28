import { GoDatabase } from 'react-icons/go';
import { IoIosCloudOutline } from 'react-icons/io';
import { MdMiscellaneousServices } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

import type {
  CodeContent,
  ContactInfo,
  ContactSection,
  EducationEntry,
  ExperienceEntry,
  LanguageSkill,
  SectionHeader,
  ServiceOffering,
  SkillGroup,
} from '@/types/profile';

import Html5Icon from '@/components/icons/Html5Icon';
import ReactIcon from '@/components/icons/ReactIcon';
import NextIcon from '@/components/icons/NextIcon';
import AngularIcon from '@/components/icons/AngularIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon';
import Css3Icon from '@/components/icons/Css3Icon';
import BootstrapIcon from '@/components/icons/BootstrapIcon';
import MaterialIcon from '@/components/icons/MaterialIcon';
import PrimeNGIcon from '@/components/icons/PrimeNGIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import NodeIcon from '@/components/icons/NodeIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import JavaIcon from '@/components/icons/JavaIcon';
import GoIcon from '@/components/icons/GoIcon';
import CppIcon from '@/components/icons/CppIcon';
import PhpIcon from '@/components/icons/PhpIcon';
import SpringIcon from '@/components/icons/SpringIcon';
import PostgreSQLIcon from '@/components/icons/PostgreSQLIcon';
import MySqlIcon from '@/components/icons/MySqlIcon';
import SqlServerIcon from '@/components/icons/SqlServerIcon';
import MongoDBIcon from '@/components/icons/MongoDBIcon';
import GraphQLIcon from '@/components/icons/GraphQLIcon';
import ApolloIcon from '@/components/icons/ApolloIcon';
import DockerIcon from '@/components/icons/DockerIcon';
import AzureIcon from '@/components/icons/AzureIcon';
import GoogleCloudIcon from '@/components/icons/GoogleCloudIcon';
import GitIcon from '@/components/icons/GitIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import BitBucketIcon from '@/components/icons/BitBucketIcon';
import PostmanIcon from '@/components/icons/PostmanIcon';
import JiraIcon from '@/components/icons/JiraIcon';

// ABOUT PAGE
export const profile = {
  name: 'Agustín Cardoza Perez',
  role: 'Ingeniero en Sistemas Computacionales · Desarrollador Full Stack',
  summary:
    'Desarrollo de aplicaciones web y APIs robustas, escalables y seguras, adaptadas a tus necesidades. Convierte tus ideas en productos digitales reales.',
  birthDate: '4 de marzo de 1997',
};

export const codeContent: CodeContent = {
  header: 'Desarrollador',
  nombre: 'Agustín Cardoza Perez',
  rol: 'Desarrollador Full Stack',
  servicios: 'Aplicaciones web y software a medida',
  modalidad: 'Remoto / Freelance',
  compromiso: 'Código limpio y escalable',
  ubicacion: 'Culiacán, Sinaloa',
  disponible: 'true',
};

// SERVICES PAGE
export const serviceHeader: SectionHeader = {
  title: '¿Qué puedo hacer por ti?',
  subtitle:
    'Ofrezco soluciones de desarrollo enfocadas en calidad, rendimiento y escalabilidad, desde aplicaciones web hasta APIs y microservicios.',
};

export const services: ServiceOffering[] = [
  {
    id: 'web-apps',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones modernas con React, Angular, Next.js o el framework que mejor se adapte a tu proyecto.',
    icon: RiComputerLine,
  },
  {
    id: 'apis-backend',
    title: 'APIs y Backend',
    description:
      'APIs RESTful y servicios backend con Java, Spring Boot, NodeJS o Go.',
    icon: MdMiscellaneousServices,
  },
  {
    id: 'database-optimization',
    title: 'Bases de Datos',
    description:
      'Diseño modelado de bases de datos, optimización de consultas y administración de datos con MySQL, PostgreSQL, SQL Server, MongoDB o GraphQL.',
    icon: GoDatabase,
  },
  {
    id: 'devops-deploy',
    title: 'DevOps y Deploy',
    description:
      'Docker, CI/CD, despliegue en la nube y configuración de entornos de producción.',
    icon: IoIosCloudOutline,
  },
];

// SKILLS PAGE
export const skillsHeader: SectionHeader = {
  title: 'Stack y herramientas',
  subtitle:
    'Tecnologías y herramientas que utilizo para construir productos digitales eficientes, escalables y seguros.',
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', icon: ReactIcon },
      { name: 'Angular', icon: AngularIcon },
      { name: 'Next.js', icon: NextIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'HTML5', icon: Html5Icon },
      { name: 'CSS3', icon: Css3Icon },
      { name: 'Tailwind', icon: TailwindIcon },
      { name: 'Bootstrap', icon: BootstrapIcon },
      { name: 'Material UI', icon: MaterialIcon },
      { name: 'PrimeNG', icon: PrimeNGIcon },
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'Spring', icon: SpringIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Go', icon: GoIcon },
      { name: 'C++', icon: CppIcon },
      { name: 'PHP', icon: PhpIcon },
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'Spring', icon: SpringIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Go', icon: GoIcon },
      { name: 'C++', icon: CppIcon },
      { name: 'PHP', icon: PhpIcon },
    ],
  },
  {
    category: 'db-apis',
    label: 'Base de datos y APIs',
    items: [
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'MySQL', icon: MySqlIcon },
      { name: 'SQL Server', icon: SqlServerIcon },
      { name: 'MongoDB', icon: MongoDBIcon },
      { name: 'GraphQL', icon: GraphQLIcon },
      { name: 'Apollo', icon: ApolloIcon },
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'MySQL', icon: MySqlIcon },
      { name: 'SQL Server', icon: SqlServerIcon },
      { name: 'MongoDB', icon: MongoDBIcon },
      { name: 'GraphQL', icon: GraphQLIcon },
      { name: 'Apollo', icon: ApolloIcon },
    ],
  },
  {
    category: 'cloud-devops-tools',
    label: 'Cloud, DevOps & Herramientas',
    items: [
      { name: 'Docker', icon: DockerIcon },
      { name: 'Azure', icon: AzureIcon },
      { name: 'Google', icon: GoogleCloudIcon },
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'BitBucket', icon: BitBucketIcon },
      { name: 'Postman', icon: PostmanIcon },
      { name: 'Jira', icon: JiraIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Azure', icon: AzureIcon },
      { name: 'Google', icon: GoogleCloudIcon },
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'BitBucket', icon: BitBucketIcon },
      { name: 'Postman', icon: PostmanIcon },
      { name: 'Jira', icon: JiraIcon },
    ],
  },
];

// EXPERIENCE PAGE.
export const experienceHeader: SectionHeader = {
  title: 'Experiencia Profesional',
  subtitle:
    'Una cronología detallada de mi crecimiento profesional y las responsabilidades asumidas en cada rol.',
};
export const experience: ExperienceEntry[] = [
  {
    id: 'coppel',
    role: 'Programador Sr.',
    organization: 'Coppel',
    location: 'Culiacán, Sinaloa',
    startDate: 'Abril 2026',
    endDate: 'Presente',
    highlights: [
      'Análisis técnico y levantamiento de requerimientos para el diseño e implementación de soluciones.',
      'Desarrollo y optimización de microservicios escalables utilizando Java (Spring Boot), Go y Python.',
      'Aplicación de estándares de desarrollo seguro y resolución de vulnerabilidades críticas identificadas en microservicios mediante herramientas como Checkmarx One y SonarQube.',
      'Monitoreo de servicios, análisis y depuración de logs en Google Cloud Platform (GCP) para el diagnóstico rápido y resolución eficaz de incidencias en entornos productivos.',
      'Ejecución y supervisión de pipelines de CI/CD para análisis continuo de calidad, cobertura y seguridad del código.',
      'Integración con pasarelas de pagos y orquestación de servicios para operaciones financieras críticas.',
    ],
    image: '/coppel-logo.png',
  },
  {
    id: 'gaman',
    role: 'Desarrollador Web Full Stack',
    organization: 'Gaman Solutions',
    location: 'Culiacán, Sinaloa',
    startDate: 'Mayo 2023',
    endDate: 'Abril 2026',
    highlights: [
      'Desarrollo frontend con React, Angular, Vue y Next.',
      'Desarrollo backend en NodeJS.',
      'Desarrollo de funcionalidades completas asegurando buenas prácticas.',
      'Trabajo bajo metodologías ágiles.',
      'Optimización de bases de datos y consultas SQL para mejora de rendimiento.',
      'Revisión de código para mantener la calidad y asegurar buenas prácticas.',
    ],
    image: '/gmn-logo.png',
  },
];

// ABOUT PAGE.
export const aboutMeHeader: SectionHeader = {
  title: 'Especialista en aplicaciones web end-to-end',
  subtitle:
    'Soy un Desarrollador Full Stack especializado en el desarrollo de software y arquitectura de bases de datos. No solo construyo aplicaciones web completas, sino que me aseguro de que sean robustas, seguras y escalables. Mi capacidad para trabajar en equipo, resolver problemas complejos y mi proactividad me permiten cumplir con entregas de calidad. Siempre estoy buscando el próximo reto técnico para seguir innovando, perfeccionando mis habilidades y sumando valor a tu equipo.',
};

// CONTACT INFO
export const contact: ContactInfo = {
  email: 'agustin40397@gmail.com',
  phone: '667 196 0004',
  location: 'Culiacán, Sinaloa, México',
  website: 'cv-digital-agustincardoza.vercel.app',
  linkedin: 'linkedin.com/in/aguscarper',
};
export const contactSection1: ContactSection = {
  title: '¿Tienes un proyecto?',
  subtitle:
    'Transformemos tus ideas en soluciones digitales eficientes y escalables.',
  actionText1: 'Escribir un correo',
  actionText2: 'Escribir mensaje',
};
export const contactSection2: ContactSection = {
  title: '¿Interesado en mi perfil?',
  subtitle: '¡Descarga mi CV completo o conectame en LinkedIn!',
  actionText1: 'Descargar CV',
  actionText2: 'Contactar en LinkedIn',
};
export const whatsAppInfo = {
  phone: contact.phone,
  message: 'Hola, estuve observando tu página web y me interesa ponerme en contacto contigo.'
}

// ADDITIONAL INFO
export const education: EducationEntry[] = [
  {
    id: 'itc',
    title: 'Ing. en Sistemas Computacionales',
    specialistSkill: 'Ingeniería de Software',
    institution: 'Instituto Tecnológico de Culiacán',
    details: [
      'Java: aplicaciones de consola, interfaz gráfica y manejo de concurrencia',
      'Programación web: HTML, CSS, JS y TS',
      'Bases de datos relacionales: MySQL y SQL Server',
      'Programación competitiva: análisis y resolución de problemas',
      'Análisis de requisitos y funcionalidades de sistemas informáticos',
    ],
  }
];

export const courses: string[] = [
  'Desarrollo web (HTML y CSS) y desarrollo de apps móviles',
  'React, Hooks, Context, Redux y MERN',
  'Python, programación avanzada',
];

export const languages: LanguageSkill[] = [
  { name: 'Inglés', level: 'Profesional' },
];
