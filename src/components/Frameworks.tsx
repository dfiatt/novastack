
import React, { useRef, useEffect, useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Frameworks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme, colorMode } = useTheme();
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Define frameworks structure once, translations are applied at render time
  const frameworksStructure = useMemo(() => [
    // Frontend
    { 
      name: 'React', 
      icon: '⚛️', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'reactDescription'
    },
    { 
      name: 'TypeScript', 
      icon: '𝐓𝐒', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'typescriptDescription'
    },
    { 
      name: 'Next.js', 
      icon: '▲', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'nextjsDescription'
    },
    { 
      name: 'Tailwind CSS', 
      icon: '🎨', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'tailwindDescription'
    },
    { 
      name: 'Angular', 
      icon: '🅰️', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'angularDescription'
    },
    { 
      name: 'Vue.js', 
      icon: '🟢', 
      category: 'frontend',
      level: 5,
      descriptionKey: 'vueDescription'
    },
    
    // Backend
    { 
      name: 'Node.js', 
      icon: '🟩', 
      category: 'backend',
      level: 5,
      descriptionKey: 'nodejsDescription'
    },
    { 
      name: 'C# .NET', 
      icon: '🔷', 
      category: 'backend',
      level: 5,
      descriptionKey: 'csharpDescription'
    },
    { 
      name: 'Java Spring Boot', 
      icon: '☕', 
      category: 'backend',
      level: 5,
      descriptionKey: 'javaDescription'
    },
    { 
      name: 'GraphQL', 
      icon: '📊', 
      category: 'backend',
      level: 5,
      descriptionKey: 'graphqlDescription'
    },
    { 
      name: 'Express', 
      icon: '🚂', 
      category: 'backend',
      level: 5,
      descriptionKey: 'expressDescription'
    },
    { 
      name: 'Authentication', 
      icon: '🔑', 
      category: 'security',
      level: 5,
      descriptionKey: 'authDescription'
    },
    
    // Database
    { 
      name: 'PostgreSQL', 
      icon: '🐘', 
      category: 'database',
      level: 5,
      descriptionKey: 'postgresqlDescription'
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      category: 'database',
      level: 5,
      descriptionKey: 'mongodbDescription'
    },
    { 
      name: 'Mongoose', 
      icon: '📋', 
      category: 'database',
      level: 5,
      descriptionKey: 'mongooseDescription'
    },
    { 
      name: 'Prisma', 
      icon: '🔺', 
      category: 'database',
      level: 5,
      descriptionKey: 'prismaDescription'
    },
    
    // Cloud & DevOps
    { 
      name: 'AWS', 
      icon: '☁️', 
      category: 'cloud',
      level: 5,
      descriptionKey: 'awsDescription'
    },
    { 
      name: 'Azure', 
      icon: '⚡', 
      category: 'cloud',
      level: 5,
      descriptionKey: 'azureDescription'
    },
    { 
      name: 'GCP', 
      icon: '🌐', 
      category: 'cloud',
      level: 5,
      descriptionKey: 'gcpDescription'
    },
    { 
      name: 'Docker', 
      icon: '🐳', 
      category: 'tools',
      level: 5,
      descriptionKey: 'dockerDescription'
    },
    { 
      name: 'Git', 
      icon: '🖇️', 
      category: 'tools',
      level: 5,
      descriptionKey: 'gitDescription'
    },
    
    // Accessibility
    { 
      name: 'ARIA', 
      icon: '♿', 
      category: 'security',
      level: 5,
      descriptionKey: 'ariaDescription'
    },
    { 
      name: 'a11y Testing', 
      icon: '🧪', 
      category: 'security',
      level: 5,
      descriptionKey: 'a11yDescription'
    },
    { 
      name: 'Color Contrast', 
      icon: '👁️', 
      category: 'security',
      level: 5,
      descriptionKey: 'contrastDescription'
    },
  ], []);
  
  const categories = useMemo(() => [
    { id: 'frontend', nameKey: 'Frontend' },
    { id: 'backend', nameKey: 'Backend' },
    { id: 'database', nameKey: 'Databases' },
    { id: 'cloud', nameKey: 'Cloud & Infrastructure' },
    { id: 'tools', nameKey: 'Tools & DevOps' },
    { id: 'security', nameKey: 'Security & Accessibility' },
  ], []);

  const FrameworkCard = ({ framework }: { framework: typeof frameworksStructure[0] }) => {
    return (
      <div 
        className="reveal bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-2xl" role="img" aria-label={`${framework.name} icon`}>
            {framework.icon}
          </span>
          <h3 className="text-xl font-bold">{framework.name}</h3>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-muted-foreground">{t('proficiency')}</span>
            <span className="text-xs font-medium">{framework.level}/5</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${colorMode === 'colorblind' ? 'gray' : theme}-500 rounded-full`} 
              style={{ width: `${framework.level * 20}%` }}
              role="progressbar"
              aria-valuenow={framework.level}
              aria-valuemin={0}
              aria-valuemax={5}
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{t(framework.descriptionKey)}</p>
      </div>
    );
  };

  return (
    <section
      id="frameworks"
      ref={sectionRef}
      className="section-padding bg-card"
      aria-labelledby="frameworks-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground inline-block mb-6">
              {t('My Tech Stack')}
            </span>
          </div>
          <h2 id="frameworks-heading" className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            {t('Technologies & Frameworks')}
          </h2>
          <p className="text-lg text-foreground/70 reveal">
            {t('The tools, frameworks, and methodologies I use to build accessible, efficient, and user-friendly web applications.')}
          </p>
        </div>
        
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="reveal">
              <h3 className="text-2xl font-bold mb-6 text-primary">{t(category.nameKey)}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworksStructure
                  .filter(framework => framework.category === category.id)
                  .map((framework) => (
                    <FrameworkCard 
                      key={framework.name} 
                      framework={framework} 
                    />
                  ))
                }
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-16 reveal">
          <div className="p-6 bg-muted rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">{t('Accessibility Focus')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('I prioritize creating inclusive digital experiences by adhering to WCAG guidelines and implementing best practices for accessibility, including:')}
            </p>
            <ul className="text-left space-y-2 max-w-md mx-auto">
              <li className="flex gap-2 items-center">
                <span className="text-primary font-bold">✓</span> 
                <span>{t('Semantic HTML and proper ARIA attributes')}</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary font-bold">✓</span> 
                <span>{t('Color-blind friendly design with high contrast ratios')}</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary font-bold">✓</span> 
                <span>{t('Keyboard navigable interfaces')}</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary font-bold">✓</span> 
                <span>{t('Screen reader compatible components')}</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary font-bold">✓</span> 
                <span>{t('Reduced motion options for animations')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
