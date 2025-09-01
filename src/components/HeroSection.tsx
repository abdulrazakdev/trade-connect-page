import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Connecting Global Talent to
            <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">
              European Healthcare
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Your bridge to a nursing career in Germany. We recruit qualified nurses from India and Indonesia, 
            provide comprehensive German language training, and ensure successful placement in top healthcare facilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/for-nurses">
              <Button 
                variant="hero" 
                size="xl"
                className="group bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Apply as a Nurse
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/for-hospitals">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Partner as a Hospital
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                500+ Nurses Placed
              </h3>
              <p className="text-primary-foreground/80">
                Successfully working in Germany
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                C1 German Training
              </h3>
              <p className="text-primary-foreground/80">
                Complete language proficiency
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <GraduationCap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                End-to-End Support
              </h3>
              <p className="text-primary-foreground/80">
                From recruitment to deployment
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