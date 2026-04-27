import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message { type: "bot" | "user"; text: string; }

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hi! Ask me anything about Dipesh's experience, skills, projects, or background." }
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
    if (lowerQ.includes("technolog") || lowerQ.includes("skill") || lowerQ.includes("stack"))
      return "Dipesh specializes in:\n\n• Languages: Python, Java, C\n• ML/AI: PyTorch, TensorFlow, scikit-learn, OpenCV\n• Backend: Spring Boot, Flask, REST APIs, Microservices\n• Cloud: AWS, GCP\n• DevOps: Docker, Jenkins, Git/GitLab, CI/CD\n• Databases: PostgreSQL, SQL, NoSQL";
    if (lowerQ.includes("cloud") || lowerQ.includes("migration"))
      return "Dipesh's cloud expertise:\n\n• Led zero-downtime migration of 8M+ records from on-premise to IBM Sterling OMS on Cloud\n• Architected data infrastructure on AWS/GCP serving 133M+ records\n• 30% performance improvement through cloud optimization\n• IBM Certified: Sterling Order Management on Cloud";
    if (lowerQ.includes("achievement") || lowerQ.includes("accomplish"))
      return "Key achievements:\n\n• Published IEEE research on DeepFake detection\n• Zero-downtime migration of 8M+ records\n• Architected solutions handling 133M+ records\n• 30% performance improvement\n• 96% accuracy in Fruit Quality Classification\n• 94% accuracy in Face Mask Detection";
    if (lowerQ.includes("ml") || lowerQ.includes("ai") || lowerQ.includes("project"))
      return "Notable ML/AI projects:\n\n• DeepFake Detection (IEEE Published)\n• Fruit Quality Classification - 96% accuracy\n• Real-Time Face Mask Detection - 94% accuracy\n• Stock Market Prediction - 85% accuracy\n• Amazon Review Sentiment Analysis - 92% accuracy";
    if (lowerQ.includes("education") || lowerQ.includes("degree"))
      return "Education:\n\n• MS in Software Engineering - Arizona State University (2025-2027)\n• B.Tech in Electrical Engineering - B.P. Poddar Institute (2016-2020)";
    if (lowerQ.includes("contact") || lowerQ.includes("email"))
      return "Contact info:\n\n• Email: dipeshgupta2010@gmail.com\n• Phone: +1 (623) 432-6768\n• LinkedIn: linkedin.com/in/dipeshgupta09\n• GitHub: github.com/Dipesh30\n• Location: Phoenix, Arizona";
    return "I can help with:\n\n• Technical skills & technologies\n• Cloud and backend experience\n• ML/AI projects and research\n• Educational background\n• Professional achievements\n• Contact information\n\nTry asking about any of these!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", text: getResponse(userMessage) }]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { type: "user", text: question }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", text: getResponse(question) }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full"
        style={{
          background: "#92400E",
          color: "#FFFFFF",
          boxShadow: "0 4px 20px rgba(146,64,14,0.3)",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-96 max-w-[calc(100vw-1rem)] sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#FFFFFF", border: "1px solid #E8E5E0" }}
          >
            {/* Header */}
            <div className="p-3 sm:p-4" style={{ background: "#92400E" }}>
              <h3 className="flex items-center gap-2 text-sm sm:text-base" style={{ color: "#FFFFFF", fontWeight: 600 }}>
                Ask me anything
              </h3>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>About Dipesh's experience & skills</p>
            </div>

            {/* Messages */}
            <div className="h-60 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3" style={{ background: "#FAFAF8" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line"
                    style={{
                      background: msg.type === "user" ? "#92400E" : "#FFFFFF",
                      color: msg.type === "user" ? "#FFFFFF" : "#4A4A4A",
                      border: msg.type === "user" ? "none" : "1px solid #E8E5E0",
                    }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #E8E5E0" }}>
                    <div className="flex gap-1">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background: "#92400E" }}
                          animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4" style={{ borderTop: "1px solid #E8E5E0" }}>
              <div className="flex gap-2 mb-3">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1"
                  style={{ background: "#FAFAF8", border: "1px solid #E8E5E0", color: "#1A1A1A" }} />
                <button onClick={handleSendMessage} disabled={!inputValue.trim()}
                  className="px-3 py-2 rounded-lg" style={{ background: "#92400E", color: "#FFFFFF", opacity: inputValue.trim() ? 1 : 0.5, border: "none", cursor: "pointer" }}>
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1.5">
                <p style={{ fontSize: "11px", color: "#8A8A8A" }}>Quick questions:</p>
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => handleQuickQuestion(q)}
                    className="w-full text-left text-xs p-2 rounded transition-colors"
                    style={{ background: "rgba(146,64,14,0.08)", color: "#92400E", border: "1px solid rgba(146,64,14,0.15)", cursor: "pointer" }}>
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
