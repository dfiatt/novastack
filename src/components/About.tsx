
import { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const strengths = [
    t('modernTech'),
    t('scalableArch'),
    t('securityFirst'),
    t('performance'),
    t('userCentered'),
    t('continuous'),
  ];
  
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="reveal">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-50 text-orange-800 inline-block mb-4 animate-pulse">
                {t('aboutUs')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold reveal">
              {t('passion')}
            </h2>
            
            <p className="text-lg text-foreground/70 reveal">
              {t('aboutParagraph')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 reveal">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 bg-orange-100 rounded-full p-1">
                    <Check size={16} className="text-orange-600" />
                  </div>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 reveal">
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <h3 className="text-xl font-bold mb-2">{t('ourTeam')}</h3>
                <p>{t('passionateDev')}</p>
              </div>
            </div>
            
            <div className="absolute top-[10%] -left-[5%] w-40 h-40 bg-orange-200 rounded-full opacity-60 blur-2xl -z-10"></div>
            <div className="absolute bottom-[10%] -right-[5%] w-60 h-60 bg-orange-100 rounded-full opacity-60 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
