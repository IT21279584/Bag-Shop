import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  detail: string;
  subDetail: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+94 77 115 2428",
    subDetail: "Mon-Sun, 9am-5pm",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "isurubag@gmail.com",
    subDetail: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Pelanwatta, Pannipitiya,Colombo",
    subDetail: "Colombo, Sri Lanka",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Sat: 9am - 5pm",
    subDetail: "Sunday: Closed",
  },
];

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+94771152428";
    const message = encodeURIComponent(
      "Hello! I'm interested in your bags. Could you please provide more information?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Have questions about our products or need a custom order? We'd
              love to hear from you. Reach out and we'll respond as soon as we
              can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-brand">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 animate-slide-right">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item: ContactInfo, index: number) => (
                  <div
                    key={item.title}
                    className="flex gap-4 group animate-fade-in hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon
                        className="text-accent group-hover:scale-110 transition-transform duration-300"
                        size={22}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground">{item.detail}</p>
                      <p className="text-muted-foreground text-sm">
                        {item.subDetail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div
                className="mt-8 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-slide-left">
              <div className="bg-card rounded-2xl shadow-brand-md p-6 md:p-8 hover:shadow-brand-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div
                      className="space-y-2 animate-slide-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div
                      className="space-y-2 animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div
                    className="space-y-2 animate-slide-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-8 sm:py-10 md:py-12 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-4 sm:mb-6 text-center animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <MapPin className="text-emerald-600 animate-bounce" size={24} />
              Visit Our Location
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Isuru Bag - Manufacturing Facility in Colombo, Sri Lanka
            </p>
          </div>
          <div
            className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4999373889004!2d79.94823097568104!3d6.830500119518197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25153aefc3403%3A0x27009bb85edc38ac!2sIsuru%20Bag!5e0!3m2!1sen!2slk!4v1765826719869!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-96 md:h-[450px] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
