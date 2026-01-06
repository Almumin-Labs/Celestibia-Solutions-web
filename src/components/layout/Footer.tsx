import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  services: [
    { name: "Cloud Services", href: "/services/cloud" },
    { name: "DevOps", href: "/services/devops" },
    { name: "Data Engineering", href: "/services/data-engineering" },
    { name: "Security Services", href: "/services/security" },
    { name: "AI & ML", href: "/services/ai-ml" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Celestibia Solutions" className="h-14 w-auto rounded-lg bg-primary-foreground p-1" />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Innovative cloud solutions for a connected world. Empowering businesses through smart technology and scalable engineering.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@celestibia.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-coral transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@celestibia.com
              </a>
              <a
                href="tel:+918308535810"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-coral transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 8308535810
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/company/celestibia-solutions-pvt/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Celestibia Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Shaping the future, one solution at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};
