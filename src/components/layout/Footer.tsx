import { Heart, Github, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Marketplace", href: "#marketplace" },
    { name: "Tutoring", href: "#tutoring" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Report Issue", href: "#report" },
    { name: "Feedback", href: "#feedback" }
  ];

  return (
    <footer className="glass border-t border-glass-border/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-gradient font-bold text-xl">CollegeHub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting students, fostering collaboration, and building the future of college communities together.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass border-glass-border/30 bg-glass/50"
                />
                <Button className="btn-primary hover-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-1 text-muted-foreground mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-error fill-current" />
              <span>for students</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-center text-muted-foreground text-sm mt-8">
            © 2024 CollegeHub. All rights reserved. Built for the next generation of learners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;