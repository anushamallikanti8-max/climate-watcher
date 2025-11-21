import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import earthHero from "@/assets/earth-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${earthHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
          Our Planet is Changing
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90 max-w-3xl mx-auto">
          Real-time monitoring of global climate patterns
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Track temperature trends, CO₂ levels, and climate impacts with data-driven insights
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-ocean hover:shadow-[var(--shadow-glow)]">
            View Dashboard
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        
        <a href="#dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-pulse-glow">
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
