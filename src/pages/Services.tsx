import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Cloud, Shield, Code, Monitor, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting",
      description: "Strategic technology guidance to align IT with your business goals",
      features: [
        "Digital transformation strategy",
        "IT infrastructure assessment",
        "Technology roadmap planning",
        "Risk assessment and mitigation",
        "Cost optimization strategies"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud migration and deployment",
        "AWS, Azure, and Google Cloud",
        "Hybrid cloud solutions",
        "Cloud security and compliance",
        "24/7 cloud monitoring"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your needs",
      features: [
        "Enterprise application development",
        "API development and integration",
        "Legacy system modernization",
        "Quality assurance and testing",
        "Agile development methodology"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Security audits and assessments",
        "Threat detection and response",
        "Security compliance (GDPR, HIPAA)",
        "Penetration testing",
        "Security awareness training"
      ]
    },
    {
      icon: Monitor,
      title: "Managed IT Support",
      description: "Proactive IT management and support services",
      features: [
        "24/7 helpdesk support",
        "Network monitoring and management",
        "Backup and disaster recovery",
        "Software updates and patches",
        "IT asset management"
      ]
    },
    {
      icon: Smartphone,
      title: "Web & App Development",
      description: "Modern web and mobile applications that drive engagement",
      features: [
        "Responsive web development",
        "iOS and Android apps",
        "Progressive web applications",
        "E-commerce solutions",
        "UI/UX design services"
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