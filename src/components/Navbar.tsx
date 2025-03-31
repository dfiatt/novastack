import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import ColorBlindModeToggle from './ColorBlindModeToggle';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('projects'), href: '#projects' },
    { name: t('metrics'), href: '#metrics' },
    { name: t('frameworks'), href: '#frameworks' },
    { name: t('about'), href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="relative z-50">
          <h1 className="text-xl font-display font-bold">
            NovaStack<span className={`text-${isScrolled ? 'orange' : 'primary'}-500`}>.</span>
          </h1>
        </a>

        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <ColorBlindModeToggle />
          </div>

          <Button
            className="rounded-full px-6 bg-primary hover:bg-primary/90"
            onClick={scrollToContact}
          >
            {t('contactUs')}
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <ColorBlindModeToggle />
          </div>

          <button
            className="relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with Blur Background */}
        <div
          className={cn(
            'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-background glass-dark transition-opacity duration-300 ease-in-out',
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          {/* Background Blur Layer */}
          <div
            className={cn(
              'fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-background/90 backdrop-blur-[16px] transition-opacity duration-150 ease-in-out',
              isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            )}
          >
          </div>

          {/* Mobile Menu Content */}
          <nav className="relative flex flex-col items-center space-y-8 z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="rounded-full px-8 py-6 mt-4 w-40 text-base bg-primary hover:bg-primary/90"
              onClick={scrollToContact}
            >
              {t('contactUs')}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
