import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import MissionValues from "@/components/MissionValues";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Globe, value: "100+", label: "Global Clients" },
    { icon: Award, value: "15+", label: "Years of Excellence" },
    { icon: Target, value: "500+", label: "Projects Delivered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              About NLR Global Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Pioneering Technology Solutions Since 2009
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NLR Global Services is a leading IT services and consulting company dedicated to helping businesses 
                navigate the digital landscape. With over 15 years of experience, we've established ourselves as 
                trusted technology partners for organizations across various industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of skilled professionals combines technical expertise with industry knowledge to deliver 
                innovative solutions that drive business growth and operational efficiency. We believe in building 
                long-term partnerships with our clients, understanding their unique challenges, and providing 
                tailored solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <MissionValues />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;