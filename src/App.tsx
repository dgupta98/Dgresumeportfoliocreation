import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/PageLoader";
import { SEOHead } from "./components/SEOHead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FloatingShapes } from "./components/FloatingShapes";

const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Experience = lazy(() => import("./components/Experience").then(module => ({ default: module.Experience })));
const HackathonProjects = lazy(() => import("./components/HackathonProjects").then(module => ({ default: module.HackathonProjects })));
const Projects = lazy(() => import("./components/Projects").then(module => ({ default: module.Projects })));
const Recommendations = lazy(() => import("./components/Recommendations").then(module => ({ default: module.Recommendations })));
const TrainingsVolunteer = lazy(() => import("./components/TrainingsVolunteer").then(module => ({ default: module.TrainingsVolunteer })));
const Education = lazy(() => import("./components/Education").then(module => ({ default: module.Education })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const AIChatAssistant = lazy(() => import("./components/AIChatAssistant").then(module => ({ default: module.AIChatAssistant })));

function SectionSkeleton() {
  return (
    <div className="py-12" style={{ background: "#FAFAF8" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="h-12 w-64 rounded-lg mx-auto mb-12 animate-pulse" style={{ background: "#F0EDE8" }} />
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-48 rounded-2xl animate-pulse" style={{ background: "#F0EDE8" }} />
          ))}
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
      <FloatingShapes />

      <div className="min-h-screen pt-[72px]" style={{ background: "#FAFAF8" }}>
        <Navigation />
        <Hero />
        <About />

        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <HackathonProjects />
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
        <Suspense fallback={<div className="h-16" style={{ background: "#F5F3EF" }} />}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <AIChatAssistant />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
