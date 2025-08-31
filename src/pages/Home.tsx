import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;