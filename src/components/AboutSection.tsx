import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Integrity in Every Transaction",
    "Customer-Centric Approach",
    "Innovation & Technology",
    "Sustainable Business Practices",
    "Global Standards Compliance",
    "24/7 Support Excellence"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About GlobalTrade Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building bridges between businesses worldwide since 2014
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Your Trusted Partner in International Trade
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GlobalTrade Connect stands at the forefront of international commerce, 
                facilitating seamless trade relationships between businesses across the globe. 
                Our expertise spans multiple industries, from manufacturing to technology, 
                ensuring that your products reach their destination efficiently and safely.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience, we've built a reputation for reliability, 
                transparency, and excellence. Our team of trade experts, logistics specialists, 
                and customer service professionals work tirelessly to ensure your business 
                thrives in the global marketplace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Proven Track Record</h5>
                    <p className="text-primary-foreground/90">
                      Over $500M in successful transactions processed annually
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Global Network</h5>
                    <p className="text-primary-foreground/90">
                      Strategic partnerships in 150+ countries worldwide
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Expert Team</h5>
                    <p className="text-primary-foreground/90">
                      200+ trade specialists with deep industry knowledge
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Technology Driven</h5>
                    <p className="text-primary-foreground/90">
                      Advanced tracking and management systems for transparency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;