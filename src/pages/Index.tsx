import * as React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { themes, ThemeKey, Card as ThemeCard } from '@/data/themes';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Welcome to MemoMatch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Challenge your memory with classic card flipping! Match pairs across fun themes like fruits, emojis, and numbers. Track your time and moves for the perfect score.
          </p>
          <Link to="/play">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-3">
              Start Playing
            </Button>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(themes).map(([key, cards]) => {
              const typedKey = key as ThemeKey;
              const sample = (cards as ThemeCard[])[0].value;
              return (
                <Card key={typedKey} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-4xl mb-2">{sample}</CardTitle>
                    <CardDescription>{typedKey.charAt(0).toUpperCase() + typedKey.slice(1)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">8 pairs of unique {typedKey} to match!</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">How to Play</h2>
          <ol className="text-left max-w-md mx-auto space-y-2 text-gray-700 dark:text-gray-300">
            <li>Flip two cards to find matches.</li>
            <li>Complete all pairs in as few moves as possible.</li>
            <li>Beat the timer for higher scores!</li>
          </ol>
        </section>
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default Index;