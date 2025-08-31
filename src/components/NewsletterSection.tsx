import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Stay Updated with Tech Insights
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get the latest technology trends, case studies, and expert insights delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            Join 5,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;