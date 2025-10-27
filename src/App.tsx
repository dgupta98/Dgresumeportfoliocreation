import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/PageLoader";
import { SEOHead } from "./components/SEOHead";
import { EasterEggs } from "./components/EasterEggs";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MetricsCounter } from "./components/MetricsCounter";
import { About } from "./components/About";

// Lazy load components below the fold for better performance
const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Experience = lazy(() => import("./components/Experience").then(module => ({ default: module.Experience })));
const Projects = lazy(() => import("./components/Projects").then(module => ({ default: module.Projects })));
const Recommendations = lazy(() => import("./components/Recommendations").then(module => ({ default: module.Recommendations })));
const TrainingsVolunteer = lazy(() => import("./components/TrainingsVolunteer").then(module => ({ default: module.TrainingsVolunteer })));
const Education = lazy(() => import("./components/Education").then(module => ({ default: module.Education })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const AIChatAssistant = lazy(() => import("./components/AIChatAssistant").then(module => ({ default: module.AIChatAssistant })));

// Skeleton loader for lazy components
function SectionSkeleton() {
  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-12 w-64 bg-slate-700 rounded-lg mx-auto mb-12 animate-pulse" />
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-slate-700 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SEOHead />
      <PageLoader />
      <EasterEggs />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Above the fold - no lazy loading */}
        <Hero />
        <MetricsCounter />
        <About />
        
        {/* Below the fold - lazy loaded with suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Recommendations />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <TrainingsVolunteer />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-slate-900" />}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={null}>
          <AIChatAssistant />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
