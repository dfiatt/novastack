
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
    
    toast({
      title: colorMode === 'normal' ? t('Color-blind mode enabled') : t('Standard color mode enabled'),
      description: colorMode === 'normal' 
        ? t('Using high contrast, pattern-based UI elements') 
        : t('Using standard color palette'),
      duration: 3000,
    });
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
