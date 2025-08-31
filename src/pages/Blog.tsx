import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cloud Computing: Trends to Watch in 2024",
      excerpt: "Explore the latest developments in cloud technology and how they're shaping the future of business infrastructure.",
      category: "Cloud Solutions",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every organization should implement to protect remote workforce.",
      category: "Cybersecurity",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world examples of businesses that successfully transformed their operations with technology.",
      category: "Case Studies",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "AI and Machine Learning in Healthcare",
      excerpt: "How artificial intelligence is revolutionizing patient care and medical research.",
      category: "Industry Insights",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop"
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices for enterprise applications.",
      category: "Software Development",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop"
    },
    {
      title: "The Impact of 5G on Business Operations",
      excerpt: "Understanding how 5G technology will transform business connectivity and operations.",
      category: "Technology Trends",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Insights & Resources
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay updated with the latest in technology and industry trends
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights and updates delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;