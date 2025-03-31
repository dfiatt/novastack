
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// All translations used in the site
export const translations: Translations = {
  // Navbar
  'home': { en: 'Home', es: 'Inicio' },
  'services': { en: 'Services', es: 'Servicios' },
  'projects': { en: 'Projects', es: 'Proyectos' },
  'about': { en: 'About', es: 'Sobre Nosotros' },
  'contact': { en: 'Contact', es: 'Contacto' },
  'contactUs': { en: 'Contact Us', es: 'Contáctenos' },
  'webVitals': { en: 'Web Vitals', es: 'Vitales Web' },
  'frameworks': { en: 'Tech Stack', es: 'Tecnologías' },
  'thisCouldBeYourApplication': { en: 'This could be your application', es: 'Ésta podría ser tu aplicación' },
  'automateYourBusiness': { en: 'Automate your business', es: 'Automatiza tu negocio' },
  'commercializeYourIdea': { en: 'Commercialize your idea', es: 'Comercializa tu idea' },
  'reachMoreClients': { en: 'Reach more clients', es: 'Llega a más clientes' },
  'retainCustomers': { en: 'Retain customers', es: 'Retén a tus clientes' },
  'increaseYourSales': { en: 'Increase your sales', es: 'Aumenta tus ventas' },
  'getMoreLeads': { en: 'Get more leads', es: 'Consigue más leads' },
  'improveYourWorkflow': { en: 'Improve your workflow', es: 'Mejora tu flujo de trabajo' },
  'increaseVisibility': { en: 'Increase visibility', es: 'Aumenta la visibilidad' },
  'getMoreTraffic': { en: 'Get more traffic', es: 'Consigue más tráfico' },
  'growYourCustomerBase': { en: 'Grow your customer base', es: 'Haz crecer tu base de clientes' },
  'getMoreSales': { en: 'Get more sales', es: 'Obtén más ventas' },
  // Hero
  'enterpriseLevel': { en: 'Enterprise-Level Solutions', es: 'Soluciones de Nivel Empresarial' },
  'fullStack': { en: 'Crafting Full-Stack Digital Experiences', es: 'Creando Experiencias Digitales Full-Stack' },
  'heroParagraph': { 
    en: 'We build dynamic, scalable, and robust applications that power enterprises and transform businesses in the digital landscape.', 
    es: 'Construimos aplicaciones dinámicas, escalables y robustas que impulsan empresas y transforman negocios en el panorama digital.' 
  },
  'getStarted': { en: 'Get Started', es: 'Comencemos' },
  'seeWork': { en: 'See Our Work', es: 'Ver Nuestro Trabajo' },
  
  // Services section
  'ourServices': { en: 'Our Services', es: 'Nuestros Servicios' },
  'enterpriseSolutions': { en: 'Enterprise Solutions for Complex Challenges', es: 'Soluciones Empresariales para Desafíos Complejos' },
  'specialization': { 
    en: 'We specialize in building robust, scalable applications that solve real business problems and create tangible value for enterprises.', 
    es: 'Nos especializamos en construir aplicaciones robustas y escalables que resuelven problemas empresariales reales y crean valor tangible para las empresas.' 
  },
  'fullStackDevelopment': { en: 'Full-Stack Development', es: 'Desarrollo Full-Stack' },
  'fullStackDescription': { 
    en: 'Comprehensive solutions that bridge front-end elegance with back-end power.', 
    es: 'Soluciones integrales que combinan la elegancia del front-end con la potencia del back-end.' 
  },
  'enterpriseArchitecture': { en: 'Enterprise Architecture', es: 'Arquitectura Empresarial' },
  'enterpriseDescription': { 
    en: 'Scalable systems designed to handle complex business requirements.', 
    es: 'Sistemas escalables diseñados para manejar requisitos empresariales complejos.' 
  },
  'dynamicApplications': { en: 'Dynamic Applications', es: 'Aplicaciones Dinámicas' },
  'dynamicDescription': { 
    en: 'Interactive experiences that respond intelligently to user actions.', 
    es: 'Experiencias interactivas que responden de manera inteligente a las acciones del usuario.' 
  },
  'apiDevelopment': { en: 'API Development', es: 'Desarrollo de APIs' },
  'apiDescription': { 
    en: 'Secure, efficient APIs that enable seamless system integration.', 
    es: 'APIs seguras y eficientes que permiten una integración perfecta de sistemas.' 
  },
  'webAppDevelopment': { en: 'Web Application Development', es: 'Desarrollo de Aplicaciones Web' },
  'webAppDescription': { 
    en: 'Stunning interfaces with smooth animations and intuitive navigation.', 
    es: 'Interfaces impresionantes con animaciones fluidas y navegación intuitiva.' 
  },
  'legacyModernization': { en: 'Legacy System Modernization', es: 'Modernización de Sistemas Heredados' },
  'legacyDescription': { 
    en: 'Transform outdated systems into modern, efficient applications.', 
    es: 'Transformamos sistemas obsoletos en aplicaciones modernas y eficientes.' 
  },

  // Projects section
  'erp': { en: 'Enterprise Resource Management', es: 'Gestión de Recursos Empresariales' },
  'erpDescription': { 
    en: 'A comprehensive solution for managing company resources, integrating HR, finance, and operations.', 
    es: 'Una solución integral para gestionar recursos empresariales, integrando RRHH, finanzas y operaciones.' 
  },
  'financialDashboard': { en: 'Service and product hiring mobile application', es: 'Aplicación mobil de contratación de servicios y productos' },
  'financialDescription': { 
    en: 'Real-time mobile application providing users with services and products to hire for event creation.', 
    es: 'Plataforma mobile en tiempo real que proporciona a los usuario servicios y productos para contratación y generación de eventos.' 
  },
  'healthcarePortal': { en: 'Healthcare Portal', es: 'Portal para la Salud' },
  'healthcareDescription': { 
    en: 'Secure patient management system with telemedicine capabilities and medical record integration for quality assurance in highly controlled environments.', 
    es: 'Sistema seguro de gestión de pacientes con capacidades de telemedicina e integración de registros médicos, incluyendo mediciones para ambientes altamente controlados.' 
  },
  'supplyChain': { en: 'Legal Supply Chain Optimization', es: 'Optimización de Cadena de Suministro Legal' },
  'supplyChainDescription': { 
    en: 'AI-driven platform that optimizes inventory and logistics for legal supply chains in Dallas', 
    es: 'Plataforma impulsada por IA que optimiza el inventario y la logística para cadenas de suministro legal en Dallas.' 
  },
  
  // Frameworks & Tech Stack descriptions
  'proficiency': { en: 'Proficiency', es: 'Competencia' },
  'reactDescription': { 
    en: 'Building complex, accessible UI components and state management', 
    es: 'Construcción de componentes UI complejos, accesibles y gestión de estados' 
  },
  'typescriptDescription': { 
    en: 'Type-safe development with interfaces and generics', 
    es: 'Desarrollo seguro con tipos, interfaces y genéricos' 
  },
  'nextjsDescription': { 
    en: 'Server-side rendering and static site generation', 
    es: 'Renderizado del lado del servidor y generación de sitios estáticos' 
  },
  'tailwindDescription': { 
    en: 'Utility-first CSS for responsive, accessible designs', 
    es: 'CSS orientado a utilidades para diseños responsivos y accesibles' 
  },
  'angularDescription': { 
    en: 'Enterprise-grade applications with Angular ecosystem', 
    es: 'Aplicaciones empresariales con el ecosistema Angular' 
  },
  'vueDescription': { 
    en: 'Component-based development with Vue ecosystem', 
    es: 'Desarrollo basado en componentes con el ecosistema Vue' 
  },
  'nodejsDescription': { 
    en: 'RESTful APIs and server-side logic', 
    es: 'APIs RESTful y lógica del lado del servidor' 
  },
  'csharpDescription': { 
    en: 'Enterprise applications and microservices', 
    es: 'Aplicaciones empresariales y microservicios' 
  },
  'javaDescription': { 
    en: 'Building robust enterprise applications', 
    es: 'Construcción de aplicaciones empresariales robustas' 
  },
  'graphqlDescription': { 
    en: 'Schema design and efficient data fetching', 
    es: 'Diseño de esquemas y recuperación eficiente de datos' 
  },
  'expressDescription': { 
    en: 'Middleware-based backend development', 
    es: 'Desarrollo backend basado en middleware' 
  },
  'authDescription': { 
    en: 'OAuth, JWT, SSO, and multi-factor authentication', 
    es: 'OAuth, JWT, SSO y autenticación multifactor' 
  },
  'postgresqlDescription': { 
    en: 'Complex queries and database optimization', 
    es: 'Consultas complejas y optimización de bases de datos' 
  },
  'mongodbDescription': { 
    en: 'Document-based data modeling and querying', 
    es: 'Modelado y consulta de datos basados en documentos' 
  },
  'mongooseDescription': { 
    en: 'MongoDB object modeling for Node.js', 
    es: 'Modelado de objetos MongoDB para Node.js' 
  },
  'prismaDescription': { 
    en: 'Next-generation ORM for Node.js and TypeScript', 
    es: 'ORM de próxima generación para Node.js y TypeScript' 
  },
  'awsDescription': { 
    en: 'Cloud deployment and infrastructure', 
    es: 'Implementación e infraestructura en la nube' 
  },
  'azureDescription': { 
    en: 'Microsoft cloud platform and services', 
    es: 'Plataforma y servicios en la nube de Microsoft' 
  },
  'gcpDescription': { 
    en: 'Google Cloud Platform infrastructure and services', 
    es: 'Infraestructura y servicios de Google Cloud Platform' 
  },
  'dockerDescription': { 
    en: 'Containerization for consistent environments', 
    es: 'Contenedorización para entornos consistentes' 
  },
  'gitDescription': { 
    en: 'Version control and collaborative workflows', 
    es: 'Control de versiones y flujos de trabajo colaborativos' 
  },
  'ariaDescription': { 
    en: 'Building accessible web experiences', 
    es: 'Construcción de experiencias web accesibles' 
  },
  'a11yDescription': { 
    en: 'Testing tools and methodologies', 
    es: 'Herramientas y metodologías de prueba' 
  },
  'contrastDescription': { 
    en: 'WCAG compliance for visual accessibility', 
    es: 'Cumplimiento WCAG para accesibilidad visual' 
  },

  // Contact
  'getInTouch': { en: 'Get In Touch', es: 'Contáctenos' },
  'buildTogether': { en: 'Let\'s Build Something Amazing Together', es: 'Construyamos Algo Increíble Juntos' },
  'contactParagraph': { 
    en: 'Whether you\'re looking to transform your business with a custom enterprise application or need help with an existing project, we\'d love to hear from you.', 
    es: 'Si busca transformar su negocio con una aplicación empresarial personalizada o necesita ayuda con un proyecto existente, nos encantaría saber de usted.' 
  },
  'phone': { en: 'Phone', es: 'Teléfono' },
  'location': { en: 'Location', es: 'Ubicación' },
  'yourName': { en: 'Your Name', es: 'Su Nombre' },
  'emailAddress': { en: 'Email Address', es: 'Correo Electrónico' },
  'yourMessage': { en: 'Your Message', es: 'Su Mensaje' },
  'messagePlaceholder': { en: 'Tell me about your project...', es: 'Cuéntenos sobre su proyecto...' },
  'sendMessage': { en: 'Send Message', es: 'Enviar Mensaje' },
  'sending': { en: 'Sending...', es: 'Enviando...' },
  'Message sent successfully!': { en: 'Message sent successfully!', es: '¡Mensaje enviado con éxito!' },
  'We\'ll get back to you soon.': { en: 'We\'ll get back to you soon.', es: 'Nos pondremos en contacto pronto.' },
  
  // Projects
  'ourWork': { en: 'Our Work', es: 'Nuestro Trabajo' },
  'transformative': { en: 'Transformative Digital Solutions', es: 'Soluciones Digitales Transformadoras' },
  'browseParagraph': { 
    en: 'Browse through our portfolio of enterprise-level applications that have delivered measurable results for our clients.',
    es: 'Explore nuestro portafolio de aplicaciones de nivel empresarial que han entregado resultados medibles para nuestros clientes.'
  },
  'viewProject': { en: 'View Project', es: 'Ver Proyecto' },
  
  // About
  'aboutUs': { en: 'About Us', es: 'Sobre Nosotros' },
  'passion': { en: 'Passion for Building Exceptional Software', es: 'Pasión por Construir Software Excepcional' },
  'aboutParagraph': { 
    en: 'We\'re a dedicated development team specializing in creating enterprise-level applications that solve complex business challenges. Our approach combines technical expertise with strategic thinking.',
    es: 'Somos un equipo de desarrollo dedicado que se especializa en crear aplicaciones de nivel empresarial que resuelven desafíos comerciales complejos. Nuestro enfoque combina experiencia técnica con pensamiento estratégico.'
  },
  'ourTeam': { en: 'Experience', es: 'Experiencia' },
  'passionateDev': { en: 'Passionate developers building the future', es: 'Desarrolladores apasionados construyendo el futuro' },
  
  // Footer
  'stayUpdated': { en: 'Stay Updated', es: 'Manténgase Actualizado' },
  'subscribe': { en: 'Subscribe to our newsletter for the latest updates.', es: 'Suscríbase a nuestro boletín para recibir las últimas actualizaciones.' },
  'yourEmail': { en: 'Your email', es: 'Su correo' },
  'allRights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },

  // Project strengths
  'modernTech': { en: 'Modern tech stack expertise', es: 'Experiencia en tecnologías modernas' },
  'scalableArch': { en: 'Scalable architecture design', es: 'Diseño de arquitectura escalable' },
  'securityFirst': { en: 'Security-first development', es: 'Desarrollo centrado en seguridad' },
  'performance': { en: 'Performance optimization', es: 'Optimización de rendimiento' },
  'userCentered': { en: 'User-centered interfaces', es: 'Interfaces centradas en el usuario' },
  'continuous': { en: 'Continuous integration/deployment', es: 'Integración/despliegue continuo' },
  
  // Web Vitals
  'Web Performance': { en: 'Web Performance', es: 'Rendimiento Web' },
  'Core Web Vitals Optimization': { en: 'Core Web Vitals Optimization', es: 'Optimización de Core Web Vitals' },
  'My experience optimizing for performance across various web applications, focusing on the metrics that matter most to user experience.': { 
    en: 'Our experience optimizing for performance across various web applications, focusing on the metrics that matter most to user experience.', 
    es: 'Nuestra experiencia optimizando el rendimiento en varias aplicaciones web, centrándonos en las métricas más importantes para la experiencia del usuario.' 
  },
  'Performance Improvements': { en: 'Performance Improvements', es: 'Mejoras de Rendimiento' },
  'Before': { en: 'Before', es: 'Antes' },
  'After': { en: 'After', es: 'Después' },
  'Improvement': { en: 'Improvement', es: 'Mejora' },
  'Optimization Techniques': { en: 'Optimization Techniques', es: 'Técnicas de Optimización' },
  'Testing & Validation Tools': { en: 'Testing & Validation Tools', es: 'Herramientas de Prueba y Validación' },
  'Largest Contentful Paint - measures loading performance': { 
    en: 'Largest Contentful Paint - measures loading performance', 
    es: 'Largest Contentful Paint - mide el rendimiento de carga' 
  },
  'Cumulative Layout Shift - measures visual stability': { 
    en: 'Cumulative Layout Shift - measures visual stability', 
    es: 'Cumulative Layout Shift - mide la estabilidad visual' 
  },
  'Interaction to Next Paint - measures responsiveness': { 
    en: 'Interaction to Next Paint - measures responsiveness', 
    es: 'Interaction to Next Paint - mide la capacidad de respuesta' 
  },
  'Preloaded critical assets': { en: 'Preloaded critical assets', es: 'Precarga de recursos críticos' },
  'Image optimization with WebP format': { en: 'Image optimization with WebP format', es: 'Optimización de imágenes con formato WebP' },
  'Critical CSS inlining': { en: 'Critical CSS inlining', es: 'CSS crítico en línea' },
  'Font optimization with preconnect and swap': { en: 'Font optimization with preconnect and swap', es: 'Optimización de fuentes con preconexión y swap' },
  'Set explicit dimensions for all media elements': { en: 'Set explicit dimensions for all media elements', es: 'Dimensiones explícitas para elementos multimedia' },
  'Optimized layout with CSS Grid and Flexbox': { en: 'Optimized layout with CSS Grid and Flexbox', es: 'Diseño optimizado con CSS Grid y Flexbox' },
  'Implemented content placeholders': { en: 'Implemented content placeholders', es: 'Implementación de marcadores de contenido' },
  'Optimized web font loading with size-adjust': { en: 'Optimized web font loading with size-adjust', es: 'Optimización de carga de fuentes web con ajuste de tamaño' },
  'Implemented event delegation': { en: 'Implemented event delegation', es: 'Implementación de delegación de eventos' },
  'Optimized JavaScript execution with Web Workers': { en: 'Optimized JavaScript execution with Web Workers', es: 'Ejecución de JavaScript optimizada con Web Workers' },
  'Used IntersectionObserver for efficient DOM updates': { en: 'Used IntersectionObserver for efficient DOM updates', es: 'Uso de IntersectionObserver para actualizaciones eficientes del DOM' },
  'Implemented heavy computation throttling/debouncing': { en: 'Implemented heavy computation throttling/debouncing', es: 'Implementación de limitación/debounce para cálculos pesados' },
  'Lighthouse': { en: 'Lighthouse', es: 'Lighthouse' },
  'WebPageTest': { en: 'WebPageTest', es: 'WebPageTest' },
  'Chrome DevTools': { en: 'Chrome DevTools', es: 'Chrome DevTools' },
  'Core Web Vitals Report': { en: 'Core Web Vitals Report', es: 'Informe de Core Web Vitals' },
  'PageSpeed Insights': { en: 'PageSpeed Insights', es: 'PageSpeed Insights' },

  // Frameworks
  'My Tech Stack': { en: 'Our Tech Stack', es: 'Nuestro Stack Tecnológico' },
  'Technologies & Frameworks': { en: 'Technologies & Frameworks', es: 'Tecnologías y Frameworks' },
  'The tools, frameworks, and methodologies I use to build accessible, efficient, and user-friendly web applications.': { 
    en: 'The tools, frameworks, and methodologies we use to build accessible, efficient, and user-friendly web applications.', 
    es: 'Las herramientas, frameworks y metodologías que usamos para construir aplicaciones web accesibles, eficientes y fáciles de usar.' 
  },
  'Frontend': { en: 'Frontend', es: 'Frontend' },
  'Backend': { en: 'Backend', es: 'Backend' },
  'Databases': { en: 'Databases', es: 'Bases de Datos' },
  'Cloud & Infrastructure': { en: 'Cloud & Infrastructure', es: 'Nube e Infraestructura' },
  'Tools & DevOps': { en: 'Tools & DevOps', es: 'Herramientas y DevOps' },
  'Security & Accessibility': { en: 'Security & Accessibility', es: 'Seguridad y Accesibilidad' },
  'Accessibility Focus': { en: 'Accessibility Focus', es: 'Enfoque en Accesibilidad' },
  'I prioritize creating inclusive digital experiences by adhering to WCAG guidelines and implementing best practices for accessibility, including:': { 
    en: 'We prioritize creating inclusive digital experiences by adhering to WCAG guidelines and implementing best practices for accessibility, including:', 
    es: 'Priorizamos la creación de experiencias digitales inclusivas siguiendo las pautas WCAG e implementando las mejores prácticas para la accesibilidad, incluyendo:' 
  },
  'Semantic HTML and proper ARIA attributes': { en: 'Semantic HTML and proper ARIA attributes', es: 'HTML semántico y atributos ARIA adecuados' },
  'Color-blind friendly design with high contrast ratios': { en: 'Color-blind friendly design with high contrast ratios', es: 'Diseño amigable para personas daltónicas con altos ratios de contraste' },
  'Keyboard navigable interfaces': { en: 'Keyboard navigable interfaces', es: 'Interfaces navegables por teclado' },
  'Screen reader compatible components': { en: 'Screen reader compatible components', es: 'Componentes compatibles con lectores de pantalla' },
  'Reduced motion options for animations': { en: 'Reduced motion options for animations', es: 'Opciones de movimiento reducido para animaciones' },

  // Color blind mode
  'Color-blind mode enabled': { en: 'Color-blind mode enabled', es: 'Modo daltónico activado' },
  'Standard color mode enabled': { en: 'Standard color mode enabled', es: 'Modo de color estándar activado' },
  'Using high contrast, pattern-based UI elements': { en: 'Using high contrast, pattern-based UI elements', es: 'Usando elementos UI con alto contraste y patrones' },
  'Using standard color palette': { en: 'Using standard color palette', es: 'Usando paleta de colores estándar' },
  'Standard Colors': { en: 'Standard Colors', es: 'Colores Estándar' },
  'Color-blind Mode': { en: 'Color-blind Mode', es: 'Modo Daltónico' },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    
    document.documentElement.lang = language;
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
