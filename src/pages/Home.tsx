import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, BrainCircuit, MessageSquare } from "lucide-react";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo / Icon */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent glow-primary animate-float">
            <BrainCircuit className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Heading */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to{" "}
          <span className="gradient-text">MockInterview.AI</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Master your next interview with AI-powered practice sessions
        </p>

        {/* Features */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-muted-foreground animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Feedback</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>Real-time Analysis</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="hero-outline" size="xl">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>

      {/* Footer note */}
      <p 
        className="absolute bottom-8 text-sm text-muted-foreground/60 animate-fade-in opacity-0"
        style={{ animationDelay: "0.7s" }}
      >
        Prepare smarter. Interview better.
      </p>
    </main>
  );
};

export default Home;
