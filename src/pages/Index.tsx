
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import WebVitals from '@/components/WebVitals';
import Frameworks from '@/components/Frameworks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations with enhanced animation
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    // Setup keyboard navigation listeners for accessibility
    const handleKeyNavigation = (e: KeyboardEvent) => {
      // Skip navigation for input elements
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      // Add custom keyboard shortcuts for accessibility
      if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyNavigation);

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.unobserve(el);
      });
      window.removeEventListener('keydown', handleKeyNavigation);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Services />
          <Projects />
          <WebVitals />
          <Frameworks />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
