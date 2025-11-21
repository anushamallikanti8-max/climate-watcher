import { Button } from "@/components/ui/button";
import { Thermometer } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Thermometer className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl bg-gradient-ocean bg-clip-text text-transparent">
            ClimateWatch
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#causes" className="text-sm font-medium hover:text-primary transition-colors">
            Causes
          </a>
          <a href="#effects" className="text-sm font-medium hover:text-primary transition-colors">
            Effects
          </a>
          <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">
            Solutions
          </a>
        </div>
        
        <Button variant="default" className="hidden md:flex">
          Get Involved
        </Button>
      </div>
    </nav>
  );
};
