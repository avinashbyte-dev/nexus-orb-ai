import { useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const suggestions = [
    "What's for lunch today?",
    "How to request OD?",
    "Find study groups",
    "Check my timetable"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("lunch") || input.includes("mess")) {
      return "Today's lunch menu includes: Rice, Dal, Sabzi, Roti, and Dessert! 🍽️";
    } else if (input.includes("od") || input.includes("leave")) {
      return "To request OD: Go to Events & Brochures → Submit OD Request form with required documents. 📝";
    } else if (input.includes("study") || input.includes("group")) {
      return "Check out the Tutoring Rooms section to find or create study groups! 📚";
    } else if (input.includes("timetable") || input.includes("schedule")) {
      return "Your timetable is available in the Timetable section. You can filter by semester and department! 📅";
    } else {
      return "I can help you with mess menu, OD requests, study groups, timetables, and more! What would you like to know? ✨";
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-primary animate-pulse-glow transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <Bot className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] glass-card animate-bounce-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-glass-border/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover-glow"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl animate-slide-up ${
                    message.isBot
                      ? "bg-glass/50 text-foreground border border-glass-border/20"
                      : "bg-gradient-primary text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2 flex items-center">
                <Sparkles className="w-3 h-3 mr-1" />
                Quick suggestions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs glass border border-glass-border/20 hover-glow h-8"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-glass-border/20">
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 glass border-glass-border/30 bg-glass/50"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="btn-primary hover-glow"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;