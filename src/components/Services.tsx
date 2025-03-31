
import { useRef, useEffect, useMemo } from 'react';
import { Clock, Database, Globe, Laptop, Server, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Services = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Set up the animation observer only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
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

  // Define services structure once, but use translations for content
  const servicesStructure = useMemo(() => [
    {
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'fullStackDevelopment',
      descriptionKey: 'fullStackDescription',
    },
    {
      icon: <Server className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'enterpriseArchitecture',
      descriptionKey: 'enterpriseDescription',
    },
    {
      icon: <Database className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'dynamicApplications',
      descriptionKey: 'dynamicDescription',
    },
    {
      icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'apiDevelopment',
      descriptionKey: 'apiDescription',
    },
    {
      icon: <Laptop className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'webAppDevelopment',
      descriptionKey: 'webAppDescription',
    },
    {
      icon: <Clock className="h-8 w-8 mb-4 text-primary" />,
      titleKey: 'legacyModernization',
      descriptionKey: 'legacyDescription',
    },
  ], []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-accent/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="reveal">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground inline-block mb-6">
              {t('ourServices')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            {t('enterpriseSolutions')}
          </h2>
          <p className="text-lg text-foreground/70 reveal">
            {t('specialization')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesStructure.map((service, index) => (
            <div 
              key={index}
              className="reveal bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
              <p className="text-foreground/70">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
