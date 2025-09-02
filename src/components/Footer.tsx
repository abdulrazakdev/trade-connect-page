import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/about" },
      { name: "Our Values", href: "/about" },
      { name: "Our Goals", href: "/about" }
    ],
    Services: [
      { name: "Construction Solutions", href: "/services" },
      { name: "MEP & HVAC", href: "/services" },
      { name: "District Cooling", href: "/services" },
      { name: "Oil & Gas Products", href: "/services" }
    ],
    Industries: [
      { name: "Construction", href: "/industries" },
      { name: "Oil & Gas", href: "/industries" },
      { name: "Infrastructure", href: "/industries" },
      { name: "Energy", href: "/industries" }
    ],
    Contact: [
      { name: "Get Quote", href: "/contact" },
      { name: "Support", href: "/contact" },
      { name: "Partnership", href: "/contact" },
      { name: "Careers", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              NADA Trading
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted partner for construction and Oil & Gas solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-primary-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-2 text-primary-foreground/80">
            <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span>Rafi Ibn Amrou, Mishrifah Dist.<br />Al Mubarraz, KSA</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Phone className="h-5 w-5 flex-shrink-0" />
            <span>+966 54 199 3733</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Mail className="h-5 w-5 flex-shrink-0" />
            <span>sales@nada-trading.com</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-center md:text-left">
              © {currentYear} NADA Trading. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;