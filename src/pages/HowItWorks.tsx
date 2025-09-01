import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, BookOpen, Plane } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Recruitment",
      description: "We identify and shortlist qualified nurses from India and Indonesia",
      details: [
        "Rigorous screening process",
        "Verification of qualifications",
        "Initial language assessment",
        "Cultural orientation"
      ]
    },
    {
      icon: BookOpen,
      title: "Training",
      description: "Comprehensive German language and cultural training program",
      details: [
        "C1-level German proficiency",
        "Medical German terminology",
        "Cultural integration training",
        "German healthcare system orientation"
      ]
    },
    {
      icon: Plane,
      title: "Deployment",
      description: "Seamless relocation and placement in German healthcare facilities",
      details: [
        "Visa and documentation support",
        "Travel arrangements",
        "Accommodation assistance",
        "Ongoing support after arrival"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              How It Works
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Our proven 3-step process for successful nurse placement
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-bold text-primary/20">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-3xl font-bold text-foreground">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-16 w-0.5 bg-border ml-10 mt-8 mb-8" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our successful placement program today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/for-nurses" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all"
              >
                Apply as a Nurse
              </a>
              <a 
                href="/for-hospitals" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-secondary-foreground bg-secondary hover:bg-secondary/90 rounded-lg transition-all"
              >
                Partner as a Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;