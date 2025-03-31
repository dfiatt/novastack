import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    t('thisCouldBeYourApplication'),
    t('automateYourBusiness'),
    t('commercializeYourIdea'),
    t('reachMoreClients'),
    t('retainCustomers'),
    t('increaseYourSales'),
    t('getMoreLeads'),
    t('improveYourWorkflow'),
    t('increaseVisibility'),
    t('getMoreTraffic'),
    t('growYourCustomerBase'),
    t('getMoreSales'),
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = heroRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] theme-accent-bg opacity-60" />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full theme-accent-bg opacity-30 blur-3xl" />
        <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] rounded-full theme-accent-bg opacity-60 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-8 pb-16 md:pb-0">
          <div className="reveal">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[hsl(var(--accent))] text-[hsl(var(--primary-dark))] inline-block mb-6 animate-pulse">
              {t('enterpriseLevel')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight reveal text-balance">
            {t('fullStack').split('Full-Stack')[0]}
            <span className="text-gradient">Full-Stack</span>
            {t('fullStack').split('Full-Stack')[1]}
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-xl reveal text-balance">
            {t('heroParagraph')}
          </p>
          
          <div className="flex flex-wrap gap-4 reveal">
            <Button 
              className="rounded-full px-8 py-6 h-auto text-base group theme-primary-bg hover:bg-[hsl(var(--primary-dark))] animate-pulse transition-all"
              onClick={scrollToContact}
            >
              {t('getStarted')}
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 h-auto text-base hover:bg-[hsl(var(--accent))] theme-primary-border"
              onClick={scrollToProjects}
            >
              {t('seeWork')}
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative reveal">
          <div className="relative z-10 animate-float">
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 ring-4 ring-[hsla(var(--primary),0.2)] shadow-lg">
              <div className="w-full h-4 flex gap-1.5 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
                <div className="h-4 w-full bg-gray-200 rounded-md"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
                <div className="mt-6 h-32 bg-gray-300 rounded-md flex items-center justify-center text-black font-bold text-lg animate-fade-in-out">
                  {texts[textIndex]}
                </div>
                <div className="h-4 w-2/3 bg-gray-200 rounded-md"></div>
                <div className="h-4 w-full bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
