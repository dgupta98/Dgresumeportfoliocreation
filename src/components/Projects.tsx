import { ExternalLink, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "RepoPulse",
      subtitle: "Engineering Metrics Platform",
      period: "Jan 2026 – May 2026",
      summary: "Service-oriented platform that computes engineering metrics (LOC, Churn, WIP, Cycle Time) from local or GitHub repos. Extracts commit and PR history, persists metrics to database, and visualizes in Grafana dashboards.",
      tags: ["React.js", "Spring Framework", "GitHub API", "Grafana", "Metrics Engine", "Java"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXRodWIlMjBtZXRyaWNzJTIwZGFzaGJvYXJkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Zeno",
      subtitle: "Transfer Learning Toolkit",
      period: "Feb 2026 – Mar 2026",
      summary: "Transfer learning project fine-tuning pretrained CNN backbones (ResNet, Inception, MobileNet) for image classification. Implemented standardized preprocessing, augmentation, training loops with early stopping, and experiment tracking for consistent model evaluation.",
      tags: ["Python", "PyTorch", "TensorFlow", "CNN", "Transfer Learning", "CUDA"],
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2Zlcilub2lkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "AgileAlliance",
      subtitle: "Agile Backlog & Sprint Planner",
      period: "Aug 2025 – Dec 2025",
      summary: "Jira-inspired Agile product for teams to create user stories, estimate work, plan sprints, and track progress on Kanban/Scrum boards. Implemented role-based workflows, activity history, and analytics (throughput, WIP, cycle time).",
      tags: ["React.js", "Python", "Scrum", "Kanban", "Agile", "GitHub"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNwcmludCUyMGJvYXJkfGVufDB8fHx8fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Agent AI Workflow Automation",
      subtitle: "Personal Project",
      period: "01/2025",
      summary: "Intelligent n8n-powered system automating job applications with 80% time reduction.",
      tags: ["n8n", "AI Agents", "Automation", "LinkedIn API", "NLP", "Python"],
      image: "https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjE1MTU4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Fruit Quality Classification",
      subtitle: "Board Infinity Certification",
      period: "04/2021",
      summary: "CNN-based model achieving 96% accuracy in classifying 6 fruit types and freshness.",
      tags: ["Python", "PyTorch", "CNN", "ResNet-50", "Flask", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1734076458934-89682bb30eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHF1YWxpdHklMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MTU4Mzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Real-Time Face Mask Detection",
      subtitle: "Personal Project",
      period: "11/2020",
      summary: "Real-time MobileNetV2 system detecting mask compliance at 94% accuracy, 30 FPS.",
      tags: ["Python", "OpenCV", "Deep Learning", "MobileNetV2", "Real-time Processing"],
      image: "https://images.unsplash.com/photo-1589837991353-312e435144d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFzayUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NjE1OTY3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Stock Market Prediction System",
      subtitle: "ML Project",
      period: "08/2021",
      summary: "LSTM & Transformer model forecasting market trends with 85% directional accuracy.",
      tags: ["Python", "LSTM", "Transformers", "Time Series", "TensorFlow", "Pandas"],
      image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0fGVufDF8fHx8MTc2MTQ4MjEzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Amazon Review Sentiment Analysis",
      subtitle: "NLP Project",
      period: "06/2021",
      summary: "BERT-powered multi-aspect sentiment analysis achieving 92% accuracy on 50K+ reviews.",
      tags: ["Python", "NLP", "BERT", "Sentiment Analysis", "Deep Learning", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1446501356021-84cf6b450d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJldmlld3MlMjBzZW50aW1lbnR8ZW58MXx8fHwxNzYxNTk2NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Digit Detection in Audio Signals",
      subtitle: "Speech Recognition",
      period: "03/2021",
      summary: "MFCC + CNN system recognizing spoken digits with 89% accuracy across accents.",
      tags: ["Python", "Audio Processing", "CNN", "MFCC", "Signal Processing", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1739056352870-17df21abfab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1NTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
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
    <section id="projects" className="relative overflow-hidden" style={{ background: "#0a0e17", padding: "80px 0" }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#eae5ec",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Projects &<br />
            <span style={{ color: "#5eead4" }}>Publications</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#adacac", marginTop: "12px" }}>
            Innovative solutions and research contributions
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mb-16">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Info */}
            <div>
              <span style={{ fontSize: "60px", fontWeight: 600, color: "rgba(255,255,255,0.08)" }}>
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "28px", fontWeight: 500, color: "#eae5ec", marginTop: "-20px", marginBottom: "8px" }}>
                {current.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#5eead4", marginBottom: "4px" }}>{current.subtitle}</p>
              <p style={{ fontSize: "13px", color: "#adacac", marginBottom: "16px" }}>{current.period}</p>
              <p style={{ fontSize: "16px", color: "#adacac", lineHeight: 1.7, marginBottom: "20px" }}>
                {current.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag, i) => (
                  <span key={i} className="tag-pill" style={{ color: "#eae5ec" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden" style={{ maxHeight: "400px", border: "1px solid #363636" }}>
              <ImageWithFallback
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid #363636",
                color: "#eae5ec",
              }}
              whileHover={{ scale: 1.1, borderColor: "#5eead4" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === currentSlide ? "#5eead4" : "#363636",
                    width: i === currentSlide ? "24px" : "8px",
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid #363636",
                color: "#eae5ec",
              }}
              whileHover={{ scale: 1.1, borderColor: "#5eead4" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid #363636",
              borderTop: "3px solid #5eead4",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.2)" }}
                  >
                    <BookOpen className="h-6 w-6" style={{ color: "#5eead4" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#eae5ec", marginBottom: "8px" }}>
                      {publication.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3" style={{ fontSize: "14px" }}>
                      <span style={{ color: "#eae5ec", fontWeight: 500 }}>{publication.venue}</span>
                      <span style={{ color: "#363636" }}>&bull;</span>
                      <span style={{ color: "#adacac" }}>{publication.type}</span>
                      <span style={{ color: "#363636" }}>&bull;</span>
                      <span style={{ color: "#adacac" }}>{publication.period}</span>
                    </div>
                    <p style={{ fontSize: "16px", color: "#adacac", lineHeight: 1.7, textAlign: "justify" }}>
                      {publication.description}
                    </p>
                  </div>
                </div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(94,234,212,0.1)",
                    border: "1px solid rgba(94,234,212,0.3)",
                    color: "#5eead4",
                    fontSize: "13px",
                  }}
                >
                  Research Publication
                </span>
              </div>
              <motion.a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
                style={{ color: "#5eead4" }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}