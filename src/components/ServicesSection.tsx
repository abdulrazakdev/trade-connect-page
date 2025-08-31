import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Ship, Search, FileText, Globe2, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Import & Export",
      description: "End-to-end import and export solutions with complete documentation support",
      features: [
        "Customs clearance assistance",
        "Trade compliance management",
        "Documentation preparation",
        "Duty optimization strategies"
      ]
    },
    {
      icon: Search,
      title: "Product Sourcing",
      description: "Strategic sourcing from verified suppliers worldwide",
      features: [
        "Supplier verification & auditing",
        "Quality control processes",
        "Price negotiation services",
        "Sample coordination"
      ]
    },
    {
      icon: Ship,
      title: "Logistics Solutions",
      description: "Comprehensive logistics and supply chain management",
      features: [
        "Sea, air, and land freight",
        "Warehousing & distribution",
        "Real-time shipment tracking",
        "Last-mile delivery solutions"
      ]
    },
    {
      icon: FileText,
      title: "Trade Finance",
      description: "Financial solutions to facilitate international trade",
      features: [
        "Letter of credit services",
        "Trade insurance options",
        "Payment processing",
        "Currency exchange solutions"
      ]
    },
    {
      icon: Globe2,
      title: "Market Entry",
      description: "Strategic support for entering new international markets",
      features: [
        "Market research & analysis",
        "Regulatory compliance",
        "Local partner connections",
        "Distribution strategy"
      ]
    },
    {
      icon: TrendingUp,
      title: "Consulting Services",
      description: "Expert guidance for optimizing your trade operations",
      features: [
        "Supply chain optimization",
        "Risk assessment & mitigation",
        "Trade agreement analysis",
        "Cost reduction strategies"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to your international trade needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-gradient-primary p-3 mb-4">
                    <Icon className="h-full w-full text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-ocean mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;