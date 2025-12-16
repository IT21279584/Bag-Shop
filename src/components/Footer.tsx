import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-brand py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  I
                </span>
              </div>
              <span className="text-xl font-bold">
                Isuru<span className="text-accent">Bag</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Crafting quality bags for every journey since establishment. Your
              trusted partner for school, travel, and pilgrimage needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">
                School Bags
              </li>
              <li className="text-primary-foreground/70 text-sm">
                Travel Bags
              </li>
              <li className="text-primary-foreground/70 text-sm">
                Dambadiwa Tour Bags
              </li>
              <li className="text-primary-foreground/70 text-sm">
                Custom Orders
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span>+94 77 115 2428</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span>isurubag@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span>Pelanwatta, Pannipitiya, Colombo</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Isuru Bag. All rights reserved. Made
              with quality in Sri Lanka.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Powered by{" "}
              <a
                href="https://oriondigitallab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Orion Digital Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
