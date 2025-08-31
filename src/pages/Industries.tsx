import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryCard from "@/components/IndustryCard";
import { Package, ShoppingCart, Heart, Building2, Truck, Factory } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Streamline operations with intelligent tracking and management systems",
      solutions: [
        "Real-time shipment tracking",
        "Warehouse management systems",
        "Route optimization",
        "Inventory management",
        "Supply chain analytics"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Transform customer experiences with modern retail technology",
      solutions: [
        "Omnichannel retail platforms",
        "POS system integration",
        "Customer analytics",
        "Inventory synchronization",
        "Mobile commerce solutions"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure, compliant solutions for modern healthcare delivery",
      solutions: [
        "Electronic health records",
        "Telemedicine platforms",
        "HIPAA compliance",
        "Medical billing systems",
        "Patient portal development"
      ]
    },
    {
      icon: Building2,
      title: "Finance & Banking",
      description: "Robust fintech solutions with enterprise-grade security",
      solutions: [
        "Digital banking platforms",
        "Payment processing systems",
        "Risk management tools",
        "Regulatory compliance",
        "Blockchain integration"
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing",
      solutions: [
        "IoT integration",
        "Predictive maintenance",
        "Quality control systems",
        "Production planning",
        "ERP implementation"
      ]
    },
    {
      icon: Package,
      title: "Technology & SaaS",
      description: "Scale your technology business with robust infrastructure",
      solutions: [
        "Cloud-native development",
        "DevOps implementation",
        "Multi-tenant architectures",
        "API gateway solutions",
        "Continuous deployment"
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
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Specialized solutions for diverse industry verticals
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground text-center">
              We understand that every industry has unique challenges and requirements. Our team brings 
              deep domain expertise and technical knowledge to deliver solutions that address your 
              specific industry needs while ensuring compliance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
              Industry Expertise Meets Innovation
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Partner with us to leverage cutting-edge technology tailored to your industry
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary bg-white hover:bg-white/90 rounded-lg transition-all"
            >
              Discuss Your Industry Needs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;