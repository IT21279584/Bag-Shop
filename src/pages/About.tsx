import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Award,
  Users,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import logo from "@/assets/logo.jpg";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on materials or craftsmanship. Every bag is built to last.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We listen, adapt, and deliver.",
  },
  {
    icon: Target,
    title: "Affordable Pricing",
    description:
      "Quality bags shouldn't break the bank. We offer fair prices for all.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "Proudly serving Sri Lankan families, students, and travelers.",
  },
];

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero animate-fade-in">
        <div className="container-brand">
          <div
            className="max-w-3xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              About Isuru Bag
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              A Sri Lankan bag manufacturing company dedicated to crafting
              quality bags for every journey, from school days to sacred
              pilgrimages.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafting Quality Since Day One
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Isuru Bag was founded with a simple mission: to provide Sri
                  Lankan families with durable, comfortable, and affordable
                  bags. We understand that a good bag is more than just an
                  accessory it's a reliable companion for life's journeys.
                </p>
                <p>
                  From students heading to school to pilgrims embarking on their
                  spiritual journey to Dambadiwa, our bags are designed to meet
                  the unique needs of our community. Every stitch, every zipper,
                  every strap is carefully chosen to ensure quality and
                  longevity.
                </p>
                <p>
                  Today, we're proud to be trusted by thousands of customers
                  across Sri Lanka. Our commitment to quality and customer
                  satisfaction drives everything we do.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-left">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <div className="text-center flex flex-col items-center gap-2 sm:gap-3">
                  {/* Logo */}
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52">
                    <img
                      src={logo}
                      alt="Isuru Bag Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Brand Name */}
                  <p className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    Isuru Bag
                  </p>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Manufacturing Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering Every Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to manufacture high-quality, durable bags that
              empower students, travelers, and pilgrims to pursue their journeys
              with confidence. We believe everyone deserves access to well-made,
              affordable bags that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-brand">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value: Value, index: number) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card shadow-brand-sm hover:shadow-brand-md transition-all duration-300 text-center group animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-hero">
        <div className="container-brand text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Experience Quality?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Discover our range of handcrafted bags or get in touch to discuss
            your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link to="/products">
                View Products
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
