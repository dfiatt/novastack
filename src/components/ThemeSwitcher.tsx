
import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const themes = [
    { name: t('Orange'), value: 'orange', color: 'bg-orange-500' },
    { name: t('Blue'), value: 'blue', color: 'bg-blue-500' },
    { name: t('Purple'), value: 'purple', color: 'bg-purple-500' },
    { name: t('Green'), value: 'green', color: 'bg-green-500' },
  ];

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as any);
    toast({
      title: t('Theme updated'),
      description: t('The application theme has been changed'),
      duration: 2000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full flex items-center gap-2"
        >
          <Palette size={16} />
          <span className="sr-only">{t('Change theme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleThemeChange(t.value)}
          >
            <div className={`w-4 h-4 rounded-full ${t.color}`} />
            {t.name}
            {theme === t.value && (
              <span className="ml-auto">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
