import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Users, GraduationCap, Plane, FileCheck, HeartHandshake, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Nurse Recruitment",
      description: "Sourcing qualified nurses from India and Indonesia",
      features: [
        "Rigorous screening process",
        "Qualification verification",
        "Experience assessment",
        "Background checks",
        "Initial language evaluation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Language Training",
      description: "Comprehensive German language program to C1 level",
      features: [
        "Intensive German courses",
        "Medical terminology training",
        "Cultural orientation",
        "Online and offline classes",
        "Regular progress assessments"
      ]
    },
    {
      icon: Plane,
      title: "Relocation Support",
      description: "Complete assistance with moving to Germany",
      features: [
        "Visa processing support",
        "Document preparation",
        "Travel arrangements",
        "Accommodation assistance",
        "Airport pickup service"
      ]
    },
    {
      icon: FileCheck,
      title: "Credential Recognition",
      description: "Support with German nursing license recognition",
      features: [
        "Document translation",
        "Application preparation",
        "Authority liaison",
        "Exam preparation support",
        "Professional guidance"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Integration Support",
      description: "Helping nurses settle into German life and work",
      features: [
        "Workplace orientation",
        "Cultural integration programs",
        "Mentorship programs",
        "Community building",
        "24/7 support helpline"
      ]
    },
    {
      icon: Globe,
      title: "Hospital Partnership",
      description: "Comprehensive staffing solutions for healthcare facilities",
      features: [
        "Customized recruitment",
        "Volume hiring capabilities",
        "Quality assurance",
        "Replacement guarantee",
        "Ongoing partnership support"
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
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive IT solutions to power your business forward
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;