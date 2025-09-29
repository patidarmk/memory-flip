"use client";
import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              MemoMatch
            </span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/play" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Play
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/themes" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Themes
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/scores" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Scores
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-green-600">Home</Link>
                <Link to="/play" className="text-lg font-medium hover:text-green-600">Play</Link>
                <Link to="/themes" className="text-lg font-medium hover:text-green-600">Themes</Link>
                <Link to="/scores" className="text-lg font-medium hover:text-green-600">Scores</Link>
                <Link to="/about" className="text-lg font-medium hover:text-green-600">About</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;