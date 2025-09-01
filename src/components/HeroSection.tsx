import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-ocean/10" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Empowering Your Business
            <span className="block mt-2 bg-gradient-to-r from-ocean-light to-sky bg-clip-text text-transparent">
              Through Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Transform your digital landscape with cutting-edge IT solutions,
            strategic consulting, and innovative software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                View Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Code className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                500+ Projects
              </h3>
              <p className="text-primary-foreground/80">
                Successfully delivered worldwide
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Cloud className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Cloud Native
              </h3>
              <p className="text-primary-foreground/80">
                Scalable cloud solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 text-ocean-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                100% Secure
              </h3>
              <p className="text-primary-foreground/80">
                Enterprise-grade security
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