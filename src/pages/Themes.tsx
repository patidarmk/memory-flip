import * as React from 'react';
import Header from '@/components/Header';
import ThemeSelector from '@/components/ThemeSelector';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { themes } from '@/data/themes';

const Themes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Themes</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ChevronLeft className="h-5 w-5 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Select Theme</h1>
        </div>
        <div className="max-w-md mx-auto space-y-6">
          <ThemeSelector />
          <div className="space-y-2">
            {Object.entries(themes).map(([key]) => (
              <div key={key} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-medium capitalize">{key}</h3>
                <p className="text-sm text-gray-600">Fun {key} pairs await!</p>
              </div>
            ))}
          </div>
          <Link to="/play">
            <Button className="w-full">Start Game with Selected Theme</Button>
          </Link>
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default Themes;