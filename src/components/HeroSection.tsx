import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-ocean/10" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Your Gateway to
            <span className="block mt-2 bg-gradient-to-r from-ocean-light to-sky bg-clip-text text-transparent">
              Global Trade Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Connecting businesses worldwide with seamless import/export solutions, 
            strategic sourcing, and reliable logistics services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("services")}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Globe className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                150+ Countries
              </h3>
              <p className="text-primary-foreground/80">
                Global network spanning across continents
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                100% Secure
              </h3>
              <p className="text-primary-foreground/80">
                Trusted by Fortune 500 companies
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                10+ Years
              </h3>
              <p className="text-primary-foreground/80">
                Proven track record of excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;