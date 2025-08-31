import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "20+ years of experience in technology leadership",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@nlrglobal.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Expert in cloud architecture and digital transformation",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@nlrglobal.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Leading innovation in software development",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@nlrglobal.com"
      }
    },
    {
      name: "Emily Watson",
      role: "Head of Cybersecurity",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Protecting businesses with cutting-edge security solutions",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@nlrglobal.com"
      }
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry experts dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;