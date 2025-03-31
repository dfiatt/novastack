
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Projects = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects = [
    {
      title: t('financialDashboard'),
      description: t('financialDescription'),
      tags: ['React Native', 'Springboot', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      link: '#projects',
    },
    {
      title: t('erp'),
      description: t('erpDescription'),
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      link: '#projects',
    },
    {
      title: t('healthcarePortal'),
      description: t('healthcareDescription'),
      tags: ['Angular', 'Java', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      link: '#projects',
    },
    {
      title: t('supplyChain'),
      description: t('supplyChainDescription'),
      tags: ['Angular', 'GraphQL', 'Azure'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '#projects',
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el) => {
              el.classList.add('active');
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

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <a 
        href={project.link}
        className={cn(
          "reveal group relative overflow-hidden rounded-xl transition-all duration-500",
          "min-h-[400px] cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transform hover:-translate-y-2"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        aria-label={`Project: ${project.title}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
          aria-hidden="true"
        />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white">
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className={`px-3 py-1 text-xs rounded-full bg-${theme}-400/20 backdrop-blur-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
        </div>
      </a>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="reveal">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-50 text-orange-800 inline-block mb-6 animate-pulse">
              {t('ourWork')}
            </span>
          </div>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            {t('transformative')}
          </h2>
          <p className="text-lg text-foreground/70 reveal">
            {t('browseParagraph')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
