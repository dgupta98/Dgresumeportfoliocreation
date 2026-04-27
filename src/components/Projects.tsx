import { ExternalLink, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  tags: string[];
  image: string;
}

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    { title: "RepoPulse", subtitle: "Engineering Metrics Platform", period: "Jan 2026 – May 2026", summary: "Ever wonder how much code your team actually ships vs. how much they churn? RepoPulse pulls commit and PR history from GitHub, crunches the numbers (LOC, churn, WIP, cycle time), and pipes it all into Grafana dashboards. Built because I got tired of guessing.", tags: ["React.js", "Spring Framework", "GitHub API", "Grafana", "Metrics Engine", "Java"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXRodWIlMjBtZXRyaWNzJTIwZGFzaGJvYXJkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "AgileAlliance", subtitle: "Agile Backlog & Sprint Planner", period: "Aug 2025 – Dec 2025", summary: "Jira costs too much and does too much. So I built a leaner version — user stories, sprint planning, Kanban boards, and the analytics that actually matter (throughput, WIP, cycle time). Role-based access, activity history, the works.", tags: ["React.js", "Python", "Scrum", "Kanban", "Agile", "GitHub"], image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNwcmludCUyMGJvYXJkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Agent AI Workflow Automation", subtitle: "Personal Project", period: "01/2025", summary: "I automated my own job search. This n8n-powered system handles applications end-to-end — LinkedIn scraping, resume tailoring, follow-ups. Cut my application time by 80%. Yes, I used AI to find a job in AI.", tags: ["n8n", "AI Agents", "Automation", "LinkedIn API", "NLP", "Python"], image: "https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjE1MTU4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Fruit Quality Classification", subtitle: "Board Infinity Certification", period: "04/2021", summary: "Trained a CNN to tell the difference between a fresh apple and a sad one. 96% accuracy across 6 fruit types. ResNet-50 backbone, Flask API, deployed and working.", tags: ["Python", "PyTorch", "CNN", "ResNet-50", "Flask", "Computer Vision"], image: "https://images.unsplash.com/photo-1734076458934-89682bb30eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHF1YWxpdHklMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MTU4Mzk0OHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Real-Time Face Mask Detection", subtitle: "Personal Project", period: "11/2020", summary: "Built during COVID when everyone was arguing about masks. MobileNetV2 running at 30 FPS, 94% accuracy. Real-time, real useful.", tags: ["Python", "OpenCV", "Deep Learning", "MobileNetV2", "Real-time Processing"], image: "https://images.unsplash.com/photo-1589837991353-312e435144d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFzayUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NjE1OTY3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Stock Market Prediction System", subtitle: "ML Project", period: "08/2021", summary: "LSTM + Transformer hybrid that predicts market direction with 85% accuracy. Not financial advice, but the model doesn't lie.", tags: ["Python", "LSTM", "Transformers", "Time Series", "TensorFlow", "Pandas"], image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0fGVufDF8fHx8MTc2MTQ4MjEzNnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Amazon Review Sentiment Analysis", subtitle: "NLP Project", period: "06/2021", summary: "BERT on 50K+ Amazon reviews. 92% accuracy on multi-aspect sentiment. Turns out people are very specific about why they hate a product.", tags: ["Python", "NLP", "BERT", "Sentiment Analysis", "Deep Learning", "scikit-learn"], image: "https://images.unsplash.com/photo-1446501356021-84cf6b450d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJldmlld3MlMjBzZW50aW1lbnR8ZW58MXx8fHwxNzYxNTk2NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: "Digit Detection in Audio Signals", subtitle: "Speech Recognition", period: "03/2021", summary: "MFCC features + CNN to recognize spoken digits. 89% accuracy across accents. The kind of project that makes you appreciate how hard speech recognition actually is.", tags: ["Python", "Audio Processing", "CNN", "MFCC", "Signal Processing", "scikit-learn"], image: "https://images.unsplash.com/photo-1739056352870-17df21abfab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1NTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  const publication = {
    title: "DeepFake Detection Using Inception-ResNet",
    venue: "IEEE ICACFCT 2021",
    type: "Conference Publication",
    period: "2021",
    description: "Research publication on detecting deepfake content using advanced deep learning architectures combining Inception and ResNet models.",
    url: "https://ieeexplore.ieee.org/document/9837351/authors#authors",
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  const current = projects[currentSlide];

  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: "#FAFAF8", padding: "12px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 400, lineHeight: 1.1, color: "#1A1A1A",  }}>
            Projects &<br /><span style={{ color: "#92400E" }}>Publications</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#8A8A8A", marginTop: "12px" }}>Innovative solutions and research contributions</p>
        </motion.div>

        {/* Carousel */}
        <div className="mb-16">
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {/* Image */}
            <div className="rounded-lg overflow-hidden" style={{ maxHeight: "400px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <ImageWithFallback src={current.image} alt={current.title} className="w-full h-full object-cover" style={{ maxHeight: "400px" }} />
            </div>
            {/* Info */}
            <div>
              <span style={{ fontSize: "48px", fontWeight: 400, color: "#E8E5E0",  }}>
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "28px", fontWeight: 400, color: "#1A1A1A", marginTop: "-12px", marginBottom: "8px",  }}>
                {current.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#92400E", marginBottom: "4px" }}>{current.subtitle}</p>
              <p style={{ fontSize: "13px", color: "#8A8A8A", marginBottom: "16px" }}>{current.period}</p>
              <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.7, marginBottom: "20px" }}>{current.summary}</p>
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag, i) => (<span key={i} className="tag-pill">{tag}</span>))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prevSlide} className="w-[44px] h-[44px] rounded-full flex items-center justify-center"
              style={{ background: "transparent", border: "1px solid #E8E5E0", color: "#4A4A4A", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#92400E"; e.currentTarget.style.color = "#92400E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E5E0"; e.currentTarget.style.color = "#4A4A4A"; }}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className="rounded-full transition-all duration-300"
                  style={{ background: i === currentSlide ? "#92400E" : "#E8E5E0", width: i === currentSlide ? "24px" : "8px", height: "8px", border: "none", cursor: "pointer" }} />
              ))}
            </div>
            <button onClick={nextSlide} className="w-[44px] h-[44px] rounded-full flex items-center justify-center"
              style={{ background: "transparent", border: "1px solid #E8E5E0", color: "#4A4A4A", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#92400E"; e.currentTarget.style.color = "#92400E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E5E0"; e.currentTarget.style.color = "#4A4A4A"; }}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Publication Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#FFFFFF", border: "1px solid #E8E5E0", borderLeft: "3px solid #92400E", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(146,64,14,0.12)" }}>
                    <BookOpen className="h-6 w-6" style={{ color: "#92400E" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#1A1A1A", marginBottom: "8px" }}>{publication.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3" style={{ fontSize: "14px" }}>
                      <span style={{ color: "#1A1A1A", fontWeight: 500 }}>{publication.venue}</span>
                      <span style={{ color: "#E8E5E0" }}>&bull;</span>
                      <span style={{ color: "#8A8A8A" }}>{publication.type}</span>
                      <span style={{ color: "#E8E5E0" }}>&bull;</span>
                      <span style={{ color: "#8A8A8A" }}>{publication.period}</span>
                    </div>
                    <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.7 }}>{publication.description}</p>
                  </div>
                </div>
              </div>
              <a href={publication.url} target="_blank" rel="noopener noreferrer" style={{ color: "#92400E", flexShrink: 0 }}>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
