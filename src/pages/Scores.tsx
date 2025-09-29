import * as React from 'react';
import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Scores: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
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
            <BreadcrumbItem>Scores</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ChevronLeft className="h-5 w-5 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>
        <Leaderboard />
        <div className="text-center mt-8">
          <Link to="/play">
            <Button>Play to Beat These Scores</Button>
          </Link>
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default Scores;