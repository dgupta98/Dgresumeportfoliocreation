import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface Message {
  type: "bot" | "user";
  text: string;
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "👋 Hi! I'm Dipesh's AI assistant. Ask me anything about his experience, skills, projects, or background!" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What technologies does Dipesh specialize in?",
    "Tell me about his cloud experience",
    "What are his notable achievements?",
    "Show me his ML/AI projects",
    "What's his educational background?",
    "Tell me about his research",
  ];

  const getResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    // Tech stack questions
    if (lowerQ.includes("technolog") || lowerQ.includes("skill") || lowerQ.includes("stack")) {
      return "Dipesh specializes in:\n\n• Languages: Python, Java, C\n• ML/AI: PyTorch, TensorFlow, scikit-learn, OpenCV\n• Backend: Spring Boot, Flask, REST APIs, Microservices\n• Cloud: AWS, GCP\n• DevOps: Docker, Jenkins, Git/GitLab, CI/CD\n• Databases: PostgreSQL, SQL, NoSQL\n• Tools: Tableau, Power BI, Selenium";
    }
    
    // Cloud experience
    if (lowerQ.includes("cloud") || lowerQ.includes("aws") || lowerQ.includes("gcp") || lowerQ.includes("migration")) {
      return "Dipesh has extensive cloud expertise:\n\n✨ Led zero-downtime migration of 8M+ records from on-premise to IBM Sterling OMS on Cloud\n\n✨ Architected data infrastructure on AWS/GCP serving 133M+ records\n\n✨ Achieved 30% performance improvement through cloud optimization\n\n✨ IBM Certified: Next Generation Platform for Sterling Order Management on Cloud";
    }
    
    // Achievements
    if (lowerQ.includes("achievement") || lowerQ.includes("accomplish") || lowerQ.includes("impact")) {
      return "Dipesh's key achievements:\n\n🏆 Published IEEE research on DeepFake detection\n🏆 Zero-downtime migration of 8M+ customer records\n🏆 Architected solutions handling 133M+ records\n🏆 30% performance improvement in data infrastructure\n🏆 Reduced deployment time by 40% through CI/CD\n🏆 96% accuracy in Fruit Quality Classification\n🏆 94% accuracy in Face Mask Detection";
    }
    
    // ML/AI Projects
    if (lowerQ.includes("ml") || lowerQ.includes("ai") || lowerQ.includes("project") || lowerQ.includes("machine learning")) {
      return "Notable ML/AI projects:\n\n🤖 DeepFake Detection (IEEE Published)\nUsed deep learning to detect manipulated media with high accuracy\n\n🍎 Fruit Quality Classification\nCNN-based system achieving 96% accuracy using TensorFlow\n\n😷 Real-Time Face Mask Detection\nYOLOv5 implementation with 94% accuracy for COVID-19 safety\n\n📊 All projects demonstrate strong Computer Vision and Deep Learning expertise!";
    }
    
    // Education
    if (lowerQ.includes("education") || lowerQ.includes("degree") || lowerQ.includes("university") || lowerQ.includes("study")) {
      return "Dipesh's educational background:\n\n🎓 Master of Science in Software Engineering\nArizona State University (2024 - Present)\nLocation: Phoenix, Arizona\n\n🎓 Bachelor of Technology in Computer Science\nB.P. Poddar Institute of Management and Technology (2017 - 2021)\nCGPA: 8.84/10\nLocation: Kolkata, India";
    }
    
    // Research
    if (lowerQ.includes("research") || lowerQ.includes("ieee") || lowerQ.includes("publication") || lowerQ.includes("paper")) {
      return "Dipesh's research contributions:\n\n📄 'DeepFake Detection using Deep Learning'\nPublished in: IEEE Xplore\nFocus: Using advanced deep learning techniques to detect manipulated media and DeepFakes\n\nThis research demonstrates expertise in:\n• Deep Neural Networks\n• Computer Vision\n• AI Ethics and Safety\n• Academic Research Methodology\n\nView publication: https://ieeexplore.ieee.org/document/9837351/authors#authors";
    }
    
    // Experience
    if (lowerQ.includes("experience") || lowerQ.includes("work") || lowerQ.includes("job") || lowerQ.includes("cognizant") || lowerQ.includes("vrize")) {
      return "Dipesh has 4+ years of professional experience:\n\n💼 Senior Programmer Analyst at Cognizant (2022-2024)\n• Led cloud migrations and microservices architecture\n• Migrated 8M+ records with zero downtime\n\n💼 Programmer Analyst at Cognizant (2021-2022)\n• Built data infrastructure handling 133M+ records\n• 30% performance improvement\n\n💼 Software Engineer Intern at Vrize (2020)\n• Developed ML models and backend systems\n• Improved system efficiency by 25%";
    }
    
    // Contact/Location
    if (lowerQ.includes("contact") || lowerQ.includes("email") || lowerQ.includes("phone") || lowerQ.includes("reach")) {
      return "📧 Email: dgupta98@asu.edu\n📱 Phone: +1 (623) 432-6768\n💼 LinkedIn: www.linkedin.com/in/dipeshgupta09\n💻 GitHub: github.com/Dipesh30\n📍 Location: Phoenix, Arizona";
    }
    
    // Certifications
    if (lowerQ.includes("certif") || lowerQ.includes("training")) {
      return "Dipesh's professional certifications:\n\n📜 IBM Sterling OMS Cloud Specialist (Sep 2021)\n\n📜 Advanced AI and Deep Learning - Board Infinity (Dec 2020 - May 2021)\n\n📜 Data Scientist with Python Track - DataCamp (Oct 2020 - Dec 2020)";
    }
    
    // Generic/Default
    if (lowerQ.includes("who") || lowerQ.includes("about")) {
      return "Dipesh Gupta is an AI/ML Engineer and Backend Developer with 4+ years of experience. He's currently pursuing his Master's in Software Engineering at Arizona State University.\n\nKey highlights:\n• Published IEEE researcher\n• Expert in Python, Java, ML/AI\n• Cloud architecture specialist (AWS/GCP)\n• Strong background in microservices and scalable systems\n• Proven track record of delivering measurable results";
    }
    
    // Fallback
    return "That's a great question! I can help you learn about:\n\n• Dipesh's technical skills & technologies\n• His cloud and backend experience\n• ML/AI projects and research\n• Educational background\n• Professional achievements\n• Contact information\n\nTry asking me about any of these topics! 😊";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages(prev => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { type: "user", text: question }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getResponse(question);
      setMessages(prev => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-96 max-w-[calc(100vw-1rem)] sm:max-w-96"
          >
            <Card className="overflow-hidden shadow-2xl border-blue-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4">
                <h3 className="flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                  AI Assistant
                </h3>
                <p className="text-xs opacity-90 mt-1">Powered by intelligent Q&A</p>
              </div>

              {/* Messages */}
              <div className="h-60 sm:h-80 overflow-y-auto p-3 sm:p-4 bg-slate-50 space-y-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        msg.type === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-slate-800 shadow rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-slate-800 shadow p-3 rounded-lg rounded-bl-none">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 bg-white border-t">
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-600">Quick questions:</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {quickQuestions.slice(0, 3).map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickQuestion(q)}
                        className="w-full text-left text-xs p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
