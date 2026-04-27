import { Trophy, ExternalLink, ChevronDown, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface HackathonProject {
  id: string;
  title: string;
  subtitle: string;
  hackathonName: string;
  award: string;
  period: string;
  problemSolved: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  personalLearnings: string;
  teamInfo?: string;
  image: string;
}

interface WinnerBadgeProps {
  award: string;
  hackathonName?: string;
}

function WinnerBadge({ award }: WinnerBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{
        background: "rgba(146,64,14,0.12)",
        border: "1px solid rgba(146,64,14,0.25)",
        color: "#92400E",
      }}
    >
      <Trophy className="h-3 w-3" />
      {award}
    </span>
  );
}

interface TrophyCardProps {
  project: HackathonProject;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function getStaggerDelay(index: number): number {
  return Math.min(index * 0.15, 0.6);
}

function TrophyCard({ project, index, isExpanded, onToggle }: TrophyCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: getStaggerDelay(index) }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E5E0",
        borderLeft: "3px solid #92400E",
        borderRadius: "16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {project.id === "zeno" && <div id="project-zeno" />}

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ height: "200px" }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <WinnerBadge award={project.award} hackathonName={project.hackathonName} />
        </div>

        <h3
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#1A1A1A",
            marginBottom: "4px",
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#92400E", marginBottom: "8px" }}>
          {project.subtitle}
        </p>
        <p style={{ fontSize: "13px", color: "#8A8A8A", marginBottom: "12px" }}>
          {project.period}
        </p>

        <p style={{ fontSize: "15px", color: "#4A4A4A", lineHeight: 1.7, marginBottom: "12px" }}>
          {project.problemSolved}
        </p>
        <p style={{ fontSize: "15px", color: "#4A4A4A", lineHeight: 1.7, marginBottom: "16px" }}>
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mb-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: "rgba(146,64,14,0.12)",
                border: "1px solid rgba(146,64,14,0.25)",
                color: "#92400E",
              }}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: "#F5F3EF",
                border: "1px solid #E8E5E0",
                color: "#4A4A4A",
              }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>

        {/* Expand/Collapse Toggle */}
        <button
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isExpanded}
          className="flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors"
          style={{ color: "#92400E", background: "none", border: "none", padding: 0 }}
        >
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="pt-4 mt-4" style={{ borderTop: "1px solid #E8E5E0" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#92400E",
                    marginBottom: "8px",
                  }}
                >
                  Personal Learnings
                </h4>
                <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.7, marginBottom: "16px" }}>
                  {project.personalLearnings}
                </p>
                {project.teamInfo && (
                  <>
                    <h4
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#92400E",
                        marginBottom: "8px",
                      }}
                    >
                      Team Info
                    </h4>
                    <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.7 }}>
                      {project.teamInfo}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const hackathonProjects: HackathonProject[] = [
  {
    id: "lofty-morning-handoff",
    title: "Lofty Morning Handoff",
    subtitle: "AI-Powered Morning Briefing for Real Estate Agents",
    hackathonName: "GlobeHack S1",
    award: "Winner (GlobeHack S1)",
    period: "2026 — Built in 36 hours",
    problemSolved: "Real estate agents lose deals in the overnight window. Leads browse listings at 2 AM, submit pre-approval letters before dawn, and start comparing agents by 9 AM. By the time an agent opens their laptop, the window has closed.",
    description: "Lofty's AOS (Agent Operating System) works overnight so agents don't have to. Every morning, it delivers a narrated video briefing with AI-generated context, a ranked priority queue of 5 decisions with confidence scores, one-tap actions (approve, edit, delegate, snooze), and Ask Lofty (⌘K) — a natural language AI assistant powered by Llama 3.3-70B. Features include an animated particle canvas background, Web Speech API narration, a 5-factor weighted confidence score engine adjustable in real time, and an agents panel with overnight activity charts.",
    techStack: ["React", "TypeScript", "Web Speech API", "Llama 3.3-70B", "Particle Canvas", "sessionStorage/localStorage"],
    liveDemo: "https://lofty-morning-huddle.vercel.app/",
    personalLearnings: "36 hours, no sleep, and a lot of cold coffee. The biggest lesson? Web Speech API is criminally underused — we had narrated briefings working in under two hours. The scoring engine was the real beast though. We rewrote the weighting logic three times before it actually felt right to someone who isn't an engineer.",
    teamInfo: "Built in 36 hours (hackathon)",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVjaG5vbG9neXxlbnwwfHx8fHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "hackforge",
    title: "HackForge",
    subtitle: "Case Management SaaS for Nonprofits",
    hackathonName: "2026 Spring WiCS ASU Hackathon",
    award: "Best Accessibility Award",
    period: "2026",
    problemSolved: "Nonprofit organizations need modern, accessible case management tools but are often stuck with outdated or expensive systems that don't support multi-tenancy, internationalization, or AI-powered insights.",
    description: "Modern, multi-tenant case management platform built for nonprofit organizations. Track clients, schedule visits, log services, measure outcomes, and generate AI-powered reports — all from a single dashboard. Features advanced RBAC with 35 granular permissions and 3 default roles, an AI-Powered Copilot with GPT-4o-mini, Google Gemini, and Mistral-7B, internationalization in English, Spanish, and French, real-time dashboard with Recharts visualizations, Stripe payments with checkout and webhook integration, property-based testing with fast-check and Pytest, and a 'Control Room' UI with dark mode and glassmorphism.",
    techStack: ["React 19", "Tailwind CSS", "Shadcn UI", "FastAPI", "Python 3.11", "MongoDB 7", "JWT", "GPT-4o-mini", "Google Gemini", "Mistral-7B", "Stripe", "SendGrid", "Docker", "GitHub Actions"],
    liveDemo: "https://hackforge-crm.vercel.app/login",
    personalLearnings: "Accessibility wasn't an afterthought — it was the whole thesis. We tested with screen readers before we had a logo. Wiring up three different LLMs (GPT-4o-mini, Gemini, Mistral) into one copilot taught me that the hard part isn't the AI — it's making the fallback graceful when one model is slow or down.",
    teamInfo: "Team of 4",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjB0ZWFtJTIwdGVjaG5vbG9neXxlbnwwfHx8fHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "planai",
    title: "PlanAI",
    subtitle: "AI Agent Swarm Platform",
    hackathonName: "Kiro Spark Challenge",
    award: "Best Impact Signal Award",
    period: "2026",
    problemSolved: "Complex workflows like building permit approvals, legal document review, healthcare claims processing, and financial auditing require weeks of manual effort. Organizations need a way to deploy specialized AI agents that work in parallel to automate these processes.",
    description: "Deploy thousands of specialized AI agents that work in parallel to automate complex workflows — document reviews, compliance checks, data analysis, and more. What used to take weeks now takes a coffee break. Features a Workflow Builder for creating workflows with categories, validation rules, and reference documents, Agent Swarm Execution launching hundreds of agents in parallel, Chain of Thought Visibility to watch each agent's reasoning in real-time, a full audit trail with pass/fail/warning results, a 3D Map Viewer for agent-linkable geospatial workflows, and an analytics dashboard for performance metrics.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS 4", "shadcn/ui"],
    liveDemo: "https://aiplan-seven.vercel.app/",
    personalLearnings: "Turns out, watching 200 AI agents think at the same time is mesmerizing — and completely useless without good UX. The chain-of-thought viewer went through four iterations before it stopped being overwhelming. Biggest takeaway: if your user can't explain what the system did in one sentence, your UI failed.",
    teamInfo: "Hackathon project",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFnZW50cyUyMGF1dG9tYXRpb258ZW58MHx8fHx8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "zeno",
    title: "Zeno",
    subtitle: "Transfer Learning Toolkit",
    hackathonName: "AI Principled Spark Challenge",
    award: "Best Project Award",
    period: "Feb 2026 – Mar 2026",
    problemSolved: "Image classification tasks require large labeled datasets and long training times. Transfer learning with pretrained CNN backbones enables high accuracy with less data and faster iteration, but needs standardized tooling for consistent evaluation.",
    description: "Transfer learning project fine-tuning pretrained CNN backbones (ResNet, Inception, MobileNet) for image classification. Implemented standardized preprocessing, augmentation, training loops with early stopping, and experiment tracking for consistent model evaluation.",
    techStack: ["Python", "PyTorch", "TensorFlow", "CNN", "Transfer Learning", "CUDA"],
    personalLearnings: "I spent two days convinced MobileNet was the answer. It wasn't. ResNet wiped the floor with it once I stopped freezing too many layers. The real win was building the experiment tracker — without it, I would've lost track of which run was which by hour three.",
    teamInfo: "Competition project",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2Zlcilub2lkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HackathonProjects() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="hackathons" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="h-10 w-10" style={{ color: "#92400E" }} />
          </div>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 70px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#1A1A1A",
            }}
          >
            Hackathon{" "}
            <span style={{ color: "#92400E" }}>Wins</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#8A8A8A", marginTop: "12px" }}>
            Built under pressure, shipped with pride
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hackathonProjects.map((project, index) => (
            <TrophyCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedCard === project.id}
              onToggle={() => toggleExpand(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
