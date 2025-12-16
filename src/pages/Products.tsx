import Layout from "@/components/Layout";
import { ArrowRight, ShoppingBag, Plane, Mountain, Check } from "lucide-react";
import schoolBag from "@/assets/school-bag.jpg";
import travelBag from "@/assets/travel-bag.jpg";
import pilgrimageBag from "@/assets/pilgrimage-bag.jpg";
import { LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Feature {
  text: string;
}

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
  target: number;
  suffix: string;
}

const categories: Category[] = [
  {
    id: "school",
    icon: ShoppingBag,
    title: "School Bags",
    tagline: "Built for Students",
    description:
      "Durable, comfortable, and stylish bags designed specifically for students of all ages. Features include padded laptop compartments, ergonomic straps, multiple pockets for organization, and water-resistant materials. Perfect for daily school use with premium quality that lasts.",
    image: schoolBag,
    features: [
      "Laptop compartment with padding",
      "Ergonomic back support",
      "Water-resistant fabric",
      "Multiple organizational pockets",
      "Adjustable padded straps",
      "Available in multiple sizes",
    ],
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel Bags",
    tagline: "Adventure Ready",
    description:
      "Premium travel bags engineered for explorers and adventurers. Whether it's a weekend getaway or an extended journey, our travel bags combine durability with functionality. Features include spacious compartments, reinforced handles, smooth-rolling wheels, and weather-resistant construction.",
    image: travelBag,
    features: [
      "Spacious main compartment",
      "Reinforced handles & wheels",
      "Weather-resistant exterior",
      "Quick-access front pockets",
      "Compression straps",
      "TSA-friendly design",
    ],
  },
  {
    id: "pilgrimage",
    icon: Mountain,
    title: "Dambadiwa Tour Bags",
    tagline: "Spiritual Journey Companion",
    description:
      "Specially crafted bags for pilgrimage and religious tours. Designed with respect for tradition while incorporating modern comfort and practicality. Extra-large capacity, multiple access points, durable construction, and customization options for tour groups. Ideal for Dambadiwa tours and spiritual journeys.",
    image: pilgrimageBag,
    features: [
      "Extra-large capacity",
      "Traditional design aesthetics",
      "Multiple access points",
      "Reinforced bottom padding",
      "Group customization available",
      "Bulk order discounts",
    ],
  },
];

const stats: Stat[] = [
  { value: "30+", label: "Years Experience", target: 30, suffix: "+" },
  { value: "5000+", label: "Happy Customers", target: 5000, suffix: "+" },
  { value: "100+", label: "Product Categories", target: 100, suffix: "+" },
  { value: "100%", label: "Quality Guaranteed", target: 100, suffix: "%" },
];

// Counter Component
const AnimatedCounter: React.FC<{ stat: Stat; delay: number }> = ({
  stat,
  delay,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          setTimeout(() => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                setCount(stat.target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [stat.target, delay, hasAnimated]);

  return (
    <div
      ref={counterRef}
      className="text-center group bg-card rounded-xl p-6 shadow-brand-sm hover:shadow-brand-md transition-all animate-slide-up hover:-translate-y-2"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-125 transition-transform duration-300">
        {count}
        {stat.suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {stat.label}
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const scrollToCategories = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInquire = () => {
    window.location.href = "/contact";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero animate-fade-in">
        <div className="container-brand">
          <div
            className="max-w-3xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Explore our complete range of handcrafted bags designed for
              durability, comfort, and style. Each bag is made with care to
              serve your unique needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToCategories}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all shadow-brand-sm hover:scale-105 hover:shadow-brand-md"
              >
                Explore Categories
                <ArrowRight size={18} />
              </button>
              <button
                onClick={handleInquire}
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24 bg-background">
        <div className="container-brand">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Main Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each category is crafted with specific use cases in mind, ensuring
              you get the perfect bag for your needs.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {categories.map((category: Category, index: number) => (
              <div
                key={category.id}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-2" : ""} ${
                      index % 2 === 0
                        ? "animate-slide-right"
                        : "animate-slide-left"
                    }`}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-brand-lg">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>
                      {/* Floating Icon Badge */}
                      <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground w-16 h-16 rounded-xl shadow-brand-md flex items-center justify-center transform rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        <category.icon size={28} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    } ${
                      index % 2 === 0
                        ? "animate-slide-left"
                        : "animate-slide-right"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
                      <category.icon size={18} className="text-accent" />
                      <span className="font-medium text-sm text-accent">
                        {category.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {category.features.map((feature: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group/item animate-fade-in"
                          style={{
                            animationDelay: `${index * 0.15 + i * 0.05}s`,
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 group-hover/item:scale-110 transition-all duration-300">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-foreground text-sm md:text-base pt-0.5">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={handleInquire}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium shadow-brand-sm transition-all hover:scale-105 hover:shadow-brand-md"
                      >
                        Inquire Now
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Auto-incrementing Numbers */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat: Stat, i: number) => (
              <AnimatedCounter key={i} stat={stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-brand-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Need Custom or Bulk Orders?
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                We specialize in custom designs and bulk orders for schools,
                tour organizers, and businesses. Get special pricing and
                personalized branding options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleInquire}
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-lg font-medium shadow-brand-md transition-all hover:scale-105"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </button>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-medium transition-all hover:scale-105">
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
