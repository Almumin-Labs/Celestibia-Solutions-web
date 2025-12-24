import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: December 24, 2026
            </p>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Celestibia Solutions Pvt. Ltd. ("Company", "we", "us", or "our") is committed 
                  to protecting your privacy. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website or use 
                  our services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <h3 className="font-semibold text-lg mb-2">Personal Data</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Billing and payment information</li>
                  <li>Communication preferences</li>
                </ul>
                <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Device and operating system information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to inquiries and customer support requests</li>
                  <li>Sending marketing and promotional communications</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect and track 
                  information about your browsing activities. You can instruct your browser 
                  to refuse all cookies or to indicate when a cookie is being sent. However, 
                  if you do not accept cookies, you may not be able to use some features of 
                  our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your 
                  personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  8. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the 
                  purposes for which it was collected, including to satisfy legal, accounting, 
                  or reporting requirements. The retention period may vary depending on the 
                  context and our legal obligations.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible 
                  for the privacy practices or content of these external sites. We encourage 
                  you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not 
                  knowingly collect personal information from children. If you become aware 
                  that a child has provided us with personal information, please contact us 
                  immediately.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date. You are advised to review this Privacy Policy periodically 
                  for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  12. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Celestibia Solutions Pvt. Ltd.</p>
                  <p>Email: info@celestibia.com</p>
                  <p>Phone: +91 8308535810</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
