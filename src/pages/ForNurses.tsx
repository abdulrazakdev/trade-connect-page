import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, Home, Heart, Euro, Globe, Users } from "lucide-react";

const ForNurses = () => {
  const benefits = [
    {
      icon: Euro,
      title: "Competitive Salary",
      description: "Earn 3,000-5,000 EUR per month with additional benefits"
    },
    {
      icon: Home,
      title: "Accommodation Support",
      description: "Assistance with finding housing and settling in Germany"
    },
    {
      icon: GraduationCap,
      title: "Free Language Training",
      description: "Complete German language training up to C1 level"
    },
    {
      icon: Heart,
      title: "Healthcare Benefits",
      description: "Comprehensive health insurance and social benefits"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Work in world-class healthcare facilities"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a supportive community of international nurses"
    }
  ];

  const requirements = [
    "Bachelor's degree in Nursing (BSc Nursing)",
    "Valid nursing license from your home country",
    "Minimum 2 years of clinical experience",
    "Basic English proficiency",
    "Willingness to learn German",
    "Clean criminal record",
    "Valid passport"
  ];

  const applicationSteps = [
    "Submit online application with CV",
    "Initial screening interview",
    "Language assessment test",
    "Document verification",
    "German language training enrollment",
    "Regular progress assessments",
    "Final certification (B2/C1 level)",
    "Job placement and visa processing",
    "Relocation to Germany"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Build Your Nursing Career in Germany
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of international nurses working in German healthcare
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Why Choose Germany?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-gradient-gold p-3 mb-4">
                        <Icon className="h-full w-full text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Eligibility Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Application Process
                </h3>
                <ol className="space-y-3">
                  {applicationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background/10 backdrop-blur rounded-lg p-6">
                    <p className="italic mb-4">
                      "NLR Global Services made my dream of working in Germany a reality. The language training was excellent, and the support throughout the process was amazing."
                    </p>
                    <p className="font-semibold">- Priya S., ICU Nurse from India</p>
                  </div>
                  <div className="bg-background/10 backdrop-blur rounded-lg p-6">
                    <p className="italic mb-4">
                      "The transition was smooth thanks to NLR's comprehensive support. I'm now working in a top hospital in Berlin with great colleagues."
                    </p>
                    <p className="font-semibold">- Siti R., Emergency Nurse from Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards your nursing career in Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Apply Online
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForNurses;