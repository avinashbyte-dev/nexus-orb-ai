import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Menu, X, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: "Marketplace", href: "#marketplace" },
    { name: "Tutoring", href: "#tutoring" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Chat", href: "#chat" },
    { name: "More", href: "#more" }
  ];

  const sampleNotifications = [
    {
      id: 1,
      title: "New Project Invitation",
      message: "You've been invited to join the AI Study Group project",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      title: "Tutoring Session Reminder",
      message: "Your Math tutoring session starts in 30 minutes",
      time: "15 min ago",
      unread: true
    },
    {
      id: 3,
      title: "Marketplace Order",
      message: "Your order for 'Data Structures Book' has been confirmed",
      time: "1 hour ago",
      unread: false
    }
  ];

  // Handle clicking outside to close notification panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isNotificationOpen && 
          notificationRef.current && 
          !notificationRef.current.contains(event.target as Node) &&
          bellRef.current &&
          !bellRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotificationOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <span className="text-gradient font-bold text-xl hidden sm:block">
              CollegeHub
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search everything..."
                className="pl-10 glass border-glass-border/30 bg-glass/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 relative">
            <div className="relative">
              <Button
                ref={bellRef}
                variant="ghost"
                size="icon"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative glass-button animate-pulse-glow"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
              </Button>

              {/* Notifications Panel */}
              {isNotificationOpen && (
                <div
                  ref={notificationRef}
                  className="absolute right-0 top-12 w-80 max-w-[90vw] glass-card border border-glass-border/30 shadow-glow z-50 animate-fade-in"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-glass-border/20">
                    <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
                    <button
                      onClick={() => setIsNotificationOpen(false)}
                      className="p-1 rounded-full hover:bg-glass/50 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-80 overflow-y-auto">
                    {sampleNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-glass-border/10 hover:bg-glass/30 transition-colors cursor-pointer ${
                          notification.unread ? 'bg-glass/20' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-foreground text-sm">
                                {notification.title}
                              </h4>
                              {notification.unread && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                            </div>
                            <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            <span className="text-muted-foreground text-xs mt-2 block">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="p-3 bg-glass/10">
                    <button className="w-full text-center text-primary text-sm font-medium hover:text-primary-glow transition-colors">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="glass-button hover-glow"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-purple-500" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-button"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search everything..."
                  className="pl-10 glass border-glass-border/30 bg-glass/50"
                />
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-glass/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;