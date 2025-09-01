import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Clock, Shield, TrendingUp, Users, Globe } from "lucide-react";

const ForHospitals = () => {
  const benefits = [
    {
      icon: Award,
      title: "Pre-Qualified Nurses",
      description: "All nurses are thoroughly vetted with verified qualifications and experience"
    },
    {
      icon: Globe,
      title: "Language Proficiency",
      description: "Nurses arrive with C1-level German language skills and medical terminology"
    },
    {
      icon: Users,
      title: "Cultural Integration",
      description: "Comprehensive cultural training ensures smooth workplace integration"
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Streamlined process from selection to placement in 6-9 months"
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Full support with visa, work permits, and regulatory requirements"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support",
      description: "Continued assistance for both nurses and hospitals post-placement"
    }
  ];

  const partnershipProcess = [
    {
      title: "Initial Consultation",
      description: "Discuss your staffing needs and requirements"
    },
    {
      title: "Agreement & Planning",
      description: "Formalize partnership and create recruitment timeline"
    },
    {
      title: "Nurse Selection",
      description: "Choose from our pool of qualified candidates"
    },
    {
      title: "Training & Preparation",
      description: "Nurses undergo intensive language and cultural training"
    },
    {
      title: "Documentation",
      description: "Handle all visa and work permit processes"
    },
    {
      title: "Deployment",
      description: "Welcome your new nursing staff to Germany"
    }
  ];

  const stats = [
    { value: "500+", label: "Nurses Placed" },
    { value: "50+", label: "Partner Hospitals" },
    { value: "95%", label: "Retention Rate" },
    { value: "C1", label: "Language Level" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Solve Your Nursing Shortage
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with NLR Global Services for reliable international nurse recruitment
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Why Partner With NLR Global Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary p-3 mb-4">
                        <Icon className="h-full w-full text-primary-foreground" />
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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Partnership Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-secondary-foreground font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < partnershipProcess.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-0.5 bg-border -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Our Partners Say</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background/10 backdrop-blur rounded-lg p-6">
                    <p className="italic mb-4">
                      "NLR Global Services has been instrumental in addressing our nursing shortage. The quality of nurses and the support provided is exceptional."
                    </p>
                    <p className="font-semibold">- Dr. Klaus Weber, Hospital Director, Berlin</p>
                  </div>
                  <div className="bg-background/10 backdrop-blur rounded-lg p-6">
                    <p className="italic mb-4">
                      "The nurses from NLR are well-prepared, professional, and integrate seamlessly into our teams. Highly recommended partner."
                    </p>
                    <p className="font-semibold">- Maria Schmidt, HR Director, Munich</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Funding Support Available
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Government Funding Programs
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We assist hospitals in accessing government funding programs for international recruitment, 
                      including the Triple Win program and other initiatives that can cover up to 80% of recruitment costs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Triple Win Program partnership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">EU funding opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Regional support programs</span>
                      </li>
                    </ul>
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
              Let's Discuss Your Staffing Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation to learn how we can help solve your nursing shortage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForHospitals;