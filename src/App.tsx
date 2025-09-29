import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet,
  Link 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './components/Header';
import Index from "./pages/Index";
import Play from "./pages/Play";
import Themes from "./pages/Themes";
import Scores from "./pages/Scores";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { MadeWithApplaa } from './components/made-with-applaa';

const queryClient = new QueryClient();

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Outlet />
          <footer className="mt-auto">
            <MadeWithApplaa />
          </footer>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const playRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/play',
  component: Play,
})

const themesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/themes',
  component: Themes,
})

const scoresRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/scores',
  component: Scores,
})

const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const notFoundRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, playRoute, themesRoute, scoresRoute, aboutRoute, notFoundRoute])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;