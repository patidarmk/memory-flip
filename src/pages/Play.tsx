import * as React from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Play: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ChevronLeft className="h-5 w-5 mr-2" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Play MemoMatch</h1>
        </div>
        <GameBoard />
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default Play;