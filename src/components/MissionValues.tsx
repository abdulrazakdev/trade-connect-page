import { Target, Eye, Shield, Handshake } from "lucide-react";

const MissionValues = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower our clients in the construction and Oil & Gas sectors by providing top-tier products and unparalleled service, contributing to infrastructure and energy development in KSA."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To revolutionize the trading business by delivering sustainable construction solutions, committed to conserving resources and driving growth for a brighter future."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Our transparent practices ensure that our clients are informed and confident in their trading decisions, fostering security in an often volatile market."
    },
    {
      icon: Handshake,
      title: "Excellence",
      description: "Excellence drives our commitment to consistently deliver superior products and services with collaboration and partnership."
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Mission & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by principles that drive excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-primary p-4 mx-auto mb-4">
                  <Icon className="h-full w-full text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;