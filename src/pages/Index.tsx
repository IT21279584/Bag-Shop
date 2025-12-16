import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Heart, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import { useState, useEffect, useRef } from "react";
import heroBags from "@/assets/hero-bags.jpg";
import schoolBag from "@/assets/school-bag.jpg";
import travelBag from "@/assets/travel-bag.jpg";
import pilgrimageBag from "@/assets/pilgrimage-bag.jpg";

const features = [
  {
    icon: Shield,
    title: "Durable Quality",
    description:
      "Built to last with premium materials and expert craftsmanship",
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "Ergonomic designs with padded straps for all-day comfort",
  },
  {
    icon: Star,
    title: "Affordable Prices",
    description: "Quality bags at prices that fit every budget",
  },
  {
    icon: Truck,
    title: "Island-wide Delivery",
    description: "Fast and reliable delivery across Sri Lanka",
  },
];

const categories = [
  {
    title: "School Bags",
    description:
      "Durable, comfortable bags designed for students of all ages. Multiple compartments keep books and supplies organized.",
    image: schoolBag,
    link: "/products#school",
  },
  {
    title: "Travel Bags",
    description:
      "Spacious and sturdy travel companions for your adventures. Built to withstand the rigors of travel.",
    image: travelBag,
    link: "/products#travel",
  },
  {
    title: "Dambadiwa Tour Bags",
    description:
      "Specially designed bags for pilgrimage journeys. Practical features for your spiritual travels.",
    image: pilgrimageBag,
    link: "/products#pilgrimage",
  },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const featuresRef = useRef(null);
  const categoriesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === featuresRef.current) {
              setFeaturesVisible(true);
            } else if (entry.target === categoriesRef.current) {
              setCategoriesVisible(true);
            } else if (entry.target === ctaRef.current) {
              setCtaVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out"
          style={{
            backgroundImage: `url(${heroBags})`,
            transform: isVisible ? "scale(1)" : "scale(1.1)",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 transition-opacity duration-1000"
            style={{ opacity: isVisible ? 1 : 0 }}
          />
        </div>

        <div className="container-brand relative z-10 py-20">
          <div className="max-w-2xl">
            <span
              className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(-20px) scale(0.9)",
              }}
            >
              Trusted by thousands across Sri Lanka
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "100ms",
              }}
            >
              Strong Bags for Every Journey
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "200ms",
              }}
            >
              From school days to sacred pilgrimages, our handcrafted bags
              combine durability, comfort, and style at prices you'll love.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "300ms",
              }}
            >
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/products">
                  Explore Products
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-background">
        <div className="container-brand">
          <div
            className="text-center mb-12 md:mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: featuresVisible ? 1 : 0,
              transform: featuresVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Isuru Bag?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering quality products that exceed
              expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card shadow-brand-sm hover:shadow-brand-md transition-all duration-500 group cursor-pointer"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.95)",
                  transitionDelay: `${index * 100 + 200}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section ref={categoriesRef} className="py-16 md:py-24 bg-secondary/30">
        <div className="container-brand">
          <div
            className="text-center mb-12 md:mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: categoriesVisible ? 1 : 0,
              transform: categoriesVisible
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted collection of bags for every
              purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-brand-sm hover:shadow-brand-lg transition-all duration-500"
                style={{
                  opacity: categoriesVisible ? 1 : 0,
                  transform: categoriesVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.95)",
                  transitionDelay: `${index * 150 + 200}ms`,
                }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    View Collection
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-16 md:py-24 bg-gradient-hero overflow-hidden"
      >
        <div className="container-brand text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
            }}
          >
            Ready to Find Your Perfect Bag?
          </h2>
          <p
            className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "100ms",
            }}
          >
            Whether you need bags for a school, a tour group, or personal use,
            we're here to help you find the perfect solution.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "200ms",
            }}
          >
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
