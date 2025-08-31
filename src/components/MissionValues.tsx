import { Target, Eye, Lightbulb, Users } from "lucide-react";

const MissionValues = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in IT services, recognized for excellence, innovation, and transformative impact on businesses worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative thinking to deliver solutions that push boundaries and exceed expectations."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, working as an extension of their team to achieve shared success."
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