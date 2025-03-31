
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ColorBlindModeToggle = () => {
  const { colorMode, toggleColorBlindMode } = useTheme();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const handleToggle = () => {
    toggleColorBlindMode();
    
  };
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="flex items-center gap-2 rounded-full"
      aria-pressed={colorMode === 'colorblind'}
    >
      <Eye size={16} />
      <span className="sr-only md:not-sr-only">
        {colorMode === 'colorblind' ? t('Standard Colors') : t('Color-blind Mode')}
      </span>
    </Button>
  );
};

export default ColorBlindModeToggle;
