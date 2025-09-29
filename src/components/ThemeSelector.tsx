import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { themes, ThemeKey } from '@/data/themes';
import { useTheme } from '../hooks/useTheme';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">Select Theme</label>
      <Select value={theme} onValueChange={(value: ThemeKey) => setTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a theme" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(themes).map((key) => (
            <SelectItem key={key} value={key as ThemeKey}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;