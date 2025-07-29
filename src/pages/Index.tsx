import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/Hero";
import Marketplace from "@/components/marketplace/Marketplace";
import AIChat from "@/components/chatbot/AIChat";
import { useDarkMode } from "@/hooks/useDarkMode";

const Index = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "marketplace":
        return <Marketplace />;
      case "home":
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
