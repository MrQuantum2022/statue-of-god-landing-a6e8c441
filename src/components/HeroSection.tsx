
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glowing red overlay for eyes */}
      <div className="absolute inset-0 bg-solo-dark/80 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-solo-dark/90"></div>
        <div className="h-full w-full bg-[url('/lovable-uploads/fd6470c5-5c96-436e-b5cc-18ddbe824667.png')] bg-cover bg-center"></div>
      </div>
      
      {/* Red glowing eyes effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-6 bg-solo-red rounded-full blur-3xl opacity-20 animate-pulse-red"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-2 text-white">
            <span className="block">THE</span>
            <span className="red-gradient text-5xl md:text-7xl lg:text-8xl font-bold">STATUE OF GOD</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 mt-4 text-shadow-glow">
            Professional Cosplay by Tushar
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-solo-red hover:bg-solo-red/80 text-white border border-solo-red/30 shadow-lg shadow-solo-red/20">
              <a href="#contact">BOOK NOW</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white bg-white/5 hover:bg-white/10">
              <a href="#gallery">VIEW GALLERY</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
