import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { saveContact } from "@/lib/storage";
import { useABTest } from "@/hooks/useABTest";
import { useEmailJS } from "@/hooks/useEmailJS";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@celestibia.com",
    href: "mailto:info@celestibia.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8308535810",
    href: "tel:+918308535810",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri, 9 AM - 6 PM IST",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const contactButton = useABTest("contact_button");
  const { sendBothEmails } = useEmailJS();

  // Track page view for contact form experiment
  useEffect(() => {
    if (contactButton.experiment) {
      contactButton.trackConversion("page_view");
    }
  }, [contactButton.experiment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission as conversion
    await contactButton.trackConversion("form_submit");

    // Save to database
    const result = await saveContact(formData);

    // Send emails via EmailJS (both visitor confirmation and admin notification)
    const emailResults = await sendBothEmails(formData);

    if (result) {
      if (emailResults.visitor.success && emailResults.admin.success) {
        toast({
          title: "Message Sent!",
          description: "We've sent you a confirmation email and will get back to you within 24 hours.",
        });
      } else if (emailResults.visitor.success || emailResults.admin.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        toast({
          title: "Message Received!",
          description: "We'll get back to you within 24 hours.",
        });
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with cloud technology? Get in touch and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button type="submit" variant="gradient" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      {contactButton.isLoading ? "Send Message" : contactButton.getVariantValue()}
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-coral/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Global Reach */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-dark text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Global Reach</h3>
                </div>
                <p className="text-primary-foreground/80">
                  We work with clients across India, Middle East, APAC, and beyond. Let's connect and discuss your
                  project, regardless of timezone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
