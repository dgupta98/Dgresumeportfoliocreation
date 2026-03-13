import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  type: "bot" | "user";
  text: string;
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hi! I'm Dipesh's AI assistant. Ask me anything about his experience, skills, projects, or background!" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What technologies does Dipesh specialize in?",
    "Tell me about his cloud experience",
    "What are his notable achievements?",
  ];

  const getResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes("technolog") || lowerQ.includes("skill") || lowerQ.includes("stack")) {
      return "Dipesh specializes in:\n\n• Languages: Python, Java, C\n• ML/AI: PyTorch, TensorFlow, scikit-learn, OpenCV\n• Backend: Spring Boot, Flask, REST APIs, Microservices\n• Cloud: AWS, GCP\n• DevOps: Docker, Jenkins, Git/GitLab, CI/CD\n• Databases: PostgreSQL, SQL, NoSQL";
    }
    
    if (lowerQ.includes("cloud") || lowerQ.includes("migration")) {
      return "Dipesh's cloud expertise:\n\n• Led zero-downtime migration of 8M+ records from on-premise to IBM Sterling OMS on Cloud\n• Architected data infrastructure on AWS/GCP serving 133M+ records\n• 30% performance improvement through cloud optimization\n• IBM Certified: Sterling Order Management on Cloud";
    }
    
    if (lowerQ.includes("achievement") || lowerQ.includes("accomplish")) {
      return "Key achievements:\n\n• Published IEEE research on DeepFake detection\n• Zero-downtime migration of 8M+ records\n• Architected solutions handling 133M+ records\n• 30% performance improvement\n• 96% accuracy in Fruit Quality Classification\n• 94% accuracy in Face Mask Detection";
    }
    
    if (lowerQ.includes("ml") || lowerQ.includes("ai") || lowerQ.includes("project")) {
      return "Notable ML/AI projects:\n\n• DeepFake Detection (IEEE Published)\n• Fruit Quality Classification - 96% accuracy\n• Real-Time Face Mask Detection - 94% accuracy\n• Stock Market Prediction - 85% accuracy\n• Amazon Review Sentiment Analysis - 92% accuracy";
    }
    
    if (lowerQ.includes("education") || lowerQ.includes("degree")) {
      return "Education:\n\n• MS in Software Engineering - Arizona State University (2025-2027)\n• B.Tech in Electrical Engineering - B.P. Poddar Institute (2016-2020)";
    }
    
    if (lowerQ.includes("contact") || lowerQ.includes("email")) {
      return "Contact info:\n\n• Email: dipeshgupta2010@gmail.com\n• Phone: +1 (623) 432-6768\n• LinkedIn: linkedin.com/in/dipeshgupta09\n• GitHub: github.com/Dipesh30\n• Location: Phoenix, Arizona";
    }
    
    return "I can help with:\n\n• Technical skills & technologies\n• Cloud and backend experience\n• ML/AI projects and research\n• Educational background\n• Professional achievements\n• Contact information\n\nTry asking about any of these!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);

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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #5eead4, #14b8a6)",
          color: "#0a0e17",
          boxShadow: "0 0 30px rgba(94,234,212,0.3)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -8, 0] } : {}}
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
            className="fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-96 max-w-[calc(100vw-1rem)] sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#0a0e17", border: "1px solid #363636" }}
          >
            {/* Header */}
            <div className="p-3 sm:p-4" style={{ background: "linear-gradient(135deg, #5eead4, #14b8a6)" }}>
              <h3 className="flex items-center gap-2 text-sm sm:text-base" style={{ color: "#0a0e17", fontWeight: 600 }}>
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                AI Assistant
              </h3>
              <p className="text-xs mt-1" style={{ color: "rgba(10,14,23,0.7)" }}>Powered by intelligent Q&A</p>
            </div>

            {/* Messages */}
            <div className="h-60 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line"
                    style={{
                      background: msg.type === "user" ? "#5eead4" : "rgba(255,255,255,0.05)",
                      color: msg.type === "user" ? "#0a0e17" : "#eae5ec",
                      border: msg.type === "user" ? "none" : "1px solid #363636",
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #363636" }}>
                    <div className="flex gap-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ background: "#5eead4" }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4" style={{ borderTop: "1px solid #363636" }}>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid #363636",
                    color: "#eae5ec",
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 rounded-lg transition-opacity"
                  style={{
                    background: "#5eead4",
                    color: "#0a0e17",
                    opacity: inputValue.trim() ? 1 : 0.5,
                  }}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-1.5">
                <p style={{ fontSize: "11px", color: "#adacac" }}>Quick questions:</p>
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickQuestion(q)}
                    className="w-full text-left text-xs p-2 rounded transition-colors"
                    style={{
                      background: "rgba(94,234,212,0.05)",
                      color: "#5eead4",
                      border: "1px solid rgba(94,234,212,0.1)",
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
