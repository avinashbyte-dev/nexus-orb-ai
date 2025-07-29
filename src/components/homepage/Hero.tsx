import { ArrowRight, Users, BookOpen, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Connect & Collaborate",
      description: "Join study groups, project teams, and make lasting friendships"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learn Together",
      description: "Peer tutoring, skill sharing, and academic support"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Stay Connected",
      description: "Class chats, announcements, and real-time updates"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Organized Life",
      description: "Timetables, events, mess menus, and more in one place"
    }
  ];

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-button mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Now Live for Your College!</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 leading-tight">
            Your College,
            <br />
            <span className="text-glow">Connected</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The ultimate platform for college students to collaborate, learn, and thrive together.
            From marketplace to study groups, everything you need in one beautiful app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 hover-glow">
              Explore Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-glass-border/30 text-lg px-8 py-4 hover-glow"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glow text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">2K+</div>
            <div className="text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Study Groups</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;