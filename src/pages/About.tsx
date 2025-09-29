import * as React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
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
            <BreadcrumbItem>About</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="mr-4">
              <ChevronLeft className="h-5 w-5 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">About MemoMatch</h1>
        </div>
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>
              MemoMatch is a fun, brain-training memory game built to challenge and entertain. Inspired by classic card games, we've added modern themes and competitive scoring to keep you coming back.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-1 text-sm">
              <li>• 3 engaging themes: Fruits, Emojis, Numbers</li>
              <li>• Real-time timer and move counter</li>
              <li>• Local leaderboard to track progress</li>
              <li>• Responsive design for all devices</li>
              <li>• Smooth animations and premium UI</li>
            </ul>
          </CardContent>
        </Card>
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Have feedback? Email us at memomatch@example.com or follow us on social media.
          </p>
          <div className="space-x-4">
            <Button variant="outline">Email</Button>
            <Button variant="outline">Twitter</Button>
          </div>
        </section>
      </main>
      <MadeWithApplaa />
    </div>
  );
};

export default About;