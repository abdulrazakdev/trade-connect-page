import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Wrench, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Empowering Construction &
            <span className="block mt-2 bg-gradient-orange bg-clip-text text-transparent">
              Oil & Gas Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner for high-quality materials, equipment, and services tailored to 
            the construction and Oil & Gas sectors in Kingdom of Saudi Arabia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/services">
              <Button 
                variant="hero" 
                size="xl"
                className="group bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Construction Solutions
              </h3>
              <p className="text-primary-foreground/80">
                MEP, HVAC systems & controls
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Droplets className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Oil & Gas Products
              </h3>
              <p className="text-primary-foreground/80">
                Robust industry solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Wrench className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                District Cooling
              </h3>
              <p className="text-primary-foreground/80">
                Thermal efficiency systems
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