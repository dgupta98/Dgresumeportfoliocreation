import { Badge } from "./ui/badge";
import { ExternalLink, Code, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { CircuitPattern } from "./CircuitPattern";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
}

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Agent AI Workflow Automation",
      subtitle: "Personal Project",
      period: "01/2025",
      summary: "Intelligent n8n-powered system automating job applications with 80% time reduction.",
      description:
        "Built an intelligent automation system using n8n to streamline job applications by extracting job details from LinkedIn, matching profiles against requirements, and auto-generating customized resumes and cover letters.",
      details:
        "Integrated AI agents with LinkedIn APIs and document generation tools to create a fully automated pipeline. The system matches job requirements against candidate profiles using natural language processing, then automatically generates customized resumes and cover letters. This solution reduced application time by 80% while maintaining high personalization quality, processing over 100 applications per day with 95% accuracy in profile matching.",
      tags: ["n8n", "AI Agents", "Automation", "LinkedIn API", "NLP", "Python"],
      image: "https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjE1MTU4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Fruit Quality Classification",
      subtitle: "Board Infinity Certification Project",
      period: "04/2021",
      summary: "CNN-based model achieving 96% accuracy in classifying 6 fruit types and freshness.",
      description:
        "Prototyped a CNN-based machine learning model using Python and PyTorch to classify 6 fruit types and assess freshness levels with 96% accuracy across 5,000+ test images, reducing manual inspection time by 40%.",
      details:
        "Implemented computer vision techniques with ResNet-50 architecture and object detection algorithms. The model achieved 96% accuracy across 5,000+ test images from diverse lighting conditions and angles. Applied data augmentation techniques including rotation, scaling, and color jittering to improve model robustness. Deployed the solution as a Flask REST API web application with real-time image processing capabilities, reducing manual inspection time by 40% in production testing.",
      tags: ["Python", "PyTorch", "CNN", "ResNet-50", "Flask", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1734076458934-89682bb30eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHF1YWxpdHklMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MTU4Mzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Real-Time Face Mask Detection",
      subtitle: "Personal Project",
      period: "11/2020",
      summary: "Real-time MobileNetV2 system detecting mask compliance at 94% accuracy, 30 FPS.",
      description:
        "Created a real-time computer vision system to detect and track face mask compliance with 94% accuracy at 30 FPS, processing video streams from multiple camera feeds to enhance public safety monitoring.",
      details:
        "Utilized Python, OpenCV, and deep learning with MobileNetV2 CNN architecture to implement real-time mask detection. The system processes video streams from multiple camera feeds simultaneously, providing instant compliance alerts. Achieved 95% precision and 93% recall on 10,000+ validation images across various lighting conditions, angles, and mask types. Implemented automated alert generation for non-compliance and integrated with existing security camera infrastructure for enhanced public safety monitoring.",
      tags: ["Python", "OpenCV", "Deep Learning", "MobileNetV2", "Real-time Processing"],
      image: "https://images.unsplash.com/photo-1589837991353-312e435144d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFzayUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NjE1OTY3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Stock Market Prediction System",
      subtitle: "Machine Learning Project",
      period: "08/2021",
      summary: "LSTM & Transformer model forecasting market trends with 85% directional accuracy.",
      description:
        "Developed a sophisticated stock price prediction model using LSTM and Transformer architectures to forecast market trends with time-series analysis, achieving 85% directional accuracy on test data.",
      details:
        "Built a time-series analysis system using LSTM and Transformer architectures for stock price prediction. Implemented advanced feature engineering including technical indicators (RSI, MACD, Bollinger Bands), sentiment analysis from financial news, and market volume patterns. Created ensemble methods combining multiple models to achieve 85% directional accuracy on test data. The system provides predictions for multiple stock indices and individual securities with confidence intervals, helping investors make data-driven decisions.",
      tags: ["Python", "LSTM", "Transformers", "Time Series", "TensorFlow", "Pandas"],
      image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0fGVufDF8fHx8MTc2MTQ4MjEzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Amazon Review Sentiment Analysis",
      subtitle: "NLP Project",
      period: "06/2021",
      summary: "BERT-powered multi-aspect sentiment analysis achieving 92% accuracy on 50K+ reviews.",
      description:
        "Built a sentiment analysis system to classify Amazon product reviews using NLP techniques and deep learning, achieving 92% accuracy across 50,000+ reviews to provide actionable product insights.",
      details:
        "Developed a comprehensive sentiment analysis system using BERT embeddings and attention mechanisms to classify Amazon product reviews. Implemented custom preprocessing pipelines to handle emojis, slang, and multi-language content. The system performs multi-aspect sentiment detection, analyzing specific product features (quality, price, shipping, customer service) separately. Achieved 92% accuracy across 50,000+ reviews and generated automated product quality reports with actionable insights for product managers and sellers.",
      tags: ["Python", "NLP", "BERT", "Sentiment Analysis", "Deep Learning", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1446501356021-84cf6b450d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJldmlld3MlMjBzZW50aW1lbnR8ZW58MXx8fHwxNzYxNTk2NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Digit Detection in Audio Signals",
      subtitle: "Speech Recognition Project",
      period: "03/2021",
      summary: "MFCC + CNN system recognizing spoken digits with 89% accuracy across accents.",
      description:
        "Engineered a speech recognition model to detect and classify spoken digits from audio recordings using signal processing and machine learning, achieving 89% accuracy on diverse audio datasets.",
      details:
        "Created a robust speech recognition system using MFCC (Mel-Frequency Cepstral Coefficients) feature extraction combined with CNN-based classification. Implemented advanced audio preprocessing including noise reduction, normalization, and voice activity detection. The model handles various accents, speaking speeds, and background noise levels. Achieved 89% accuracy on diverse audio datasets including recordings from different microphones and environments. Applied data augmentation with pitch shifting and time stretching to improve model generalization.",
      tags: ["Python", "Audio Processing", "CNN", "MFCC", "Signal Processing", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1739056352870-17df21abfab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1NTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const publication = {
    title: "DeepFake Detection Using Inception-ResNet",
    venue: "IEEE ICACFCT 2021",
    type: "Conference Publication",
    period: "2021",
    description:
      "Research publication on detecting deepfake content using advanced deep learning architectures combining Inception and ResNet models.",
    url: "https://ieeexplore.ieee.org/document/9837351/authors#authors",
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <CircuitPattern />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
              Projects & Publications
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-slate-300 mt-4">Innovative solutions and research contributions</p>
          </motion.div>

          {/* Horizontal Scrolling Projects */}
          <div className="relative mb-16">
            {/* Scroll buttons - hidden on mobile */}
            {canScrollLeft && (
              <motion.button
                onClick={() => scroll('left')}
                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-slate-700 to-slate-500 text-white rounded-full shadow-2xl hover:shadow-slate-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
            )}
            
            {canScrollRight && (
              <motion.button
                onClick={() => scroll('right')}
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-slate-700 to-slate-500 text-white rounded-full shadow-2xl hover:shadow-slate-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            )}

            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[320px] sm:w-[380px] snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12, 
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div 
                    className="h-full backdrop-blur-xl bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300 hover:border-slate-400 cursor-pointer relative group"
                    onMouseEnter={() => setExpandedProject(index)}
                    onMouseLeave={() => setExpandedProject(null)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-xs text-white bg-gradient-to-r from-slate-700 to-slate-500 px-3 py-1 rounded-full backdrop-blur-sm shadow-lg">
                          {project.period}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-400">
                          <Code className="h-4 sm:h-5 w-4 sm:w-5 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg text-slate-900 mb-1 line-clamp-2">{project.title}</h3>
                          <p className="text-xs text-slate-700">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Summary - Fixed 3 lines */}
                      <p className="text-sm text-slate-700 leading-relaxed line-clamp-3 mb-4 h-[60px]">
                        {project.summary}
                      </p>

                      {/* All Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Hover Expansion Panel */}
                    <AnimatePresence>
                      {expandedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-xl border-t-2 border-slate-400 overflow-hidden"
                        >
                          <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                            {/* Overview */}
                            <div>
                              <h4 className="text-sm uppercase tracking-wider text-slate-700 mb-2">Overview</h4>
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            {/* Technical Details */}
                            <div>
                              <h4 className="text-sm uppercase tracking-wider text-slate-700 mb-2">Technical Details</h4>
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {project.details}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publication Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="backdrop-blur-xl bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300 hover:border-slate-400">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-400">
                        <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-slate-900 mb-2">{publication.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm mb-3">
                          <span className="text-slate-800 font-medium">{publication.venue}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600">{publication.type}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600">{publication.period}</span>
                        </div>
                        <p className="text-slate-700 text-justify leading-relaxed">
                          {publication.description}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400">
                      Research Publication
                    </Badge>
                  </div>
                  <motion.a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-slate-700 hover:text-slate-900 transition-colors"
                    aria-label="View publication"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
