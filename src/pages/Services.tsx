import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Wrench, Snowflake, Droplets, Settings, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction Materials",
      description: "High-quality materials for modern construction projects",
      features: [
        "Premium building materials",
        "Structural components",
        "Finishing materials",
        "Insulation products",
        "Quality certifications"
      ]
    },
    {
      icon: Wrench,
      title: "MEP Systems",
      description: "Mechanical, Electrical, and Plumbing solutions",
      features: [
        "HVAC equipment",
        "Electrical components",
        "Plumbing fixtures",
        "Control systems",
        "Energy-efficient solutions"
      ]
    },
    {
      icon: Snowflake,
      title: "HVAC Solutions",
      description: "Advanced climate control and ventilation systems",
      features: [
        "Air conditioning units",
        "Heating systems",
        "Ventilation equipment",
        "Air quality control",
        "Energy management"
      ]
    },
    {
      icon: Settings,
      title: "Instrumentation & Controls",
      description: "Precision instruments and control systems",
      features: [
        "Process control instruments",
        "Automation systems",
        "Monitoring equipment",
        "Safety systems",
        "Calibration services"
      ]
    },
    {
      icon: Shield,
      title: "District Cooling",
      description: "Efficient cooling solutions for large developments",
      features: [
        "Cooling plants equipment",
        "Distribution networks",
        "Thermal insulation",
        "Field joint kits",
        "Maintenance supplies"
      ]
    },
    {
      icon: Droplets,
      title: "Oil & Gas Products",
      description: "Specialized solutions for the energy sector",
      features: [
        "Pipeline components",
        "Valves and fittings",
        "Safety equipment",
        "Drilling supplies",
        "Maintenance tools"
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
              High-quality materials and equipment for construction and Oil & Gas sectors
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
              Ready to Partner with NADA Trading?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our products and services can support your projects
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