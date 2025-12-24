import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsAndConditions = () => {
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
              Terms and <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: December 24, 2026
            </p>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by Celestibia Solutions Pvt. Ltd. 
                  ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms 
                  and provisions of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  2. Description of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Celestibia Solutions provides cloud computing, DevOps, data engineering, 
                  AI/ML, application modernization, and security services. Our services include 
                  but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cloud Infrastructure Management and Migration</li>
                  <li>DevOps Consulting and Implementation</li>
                  <li>Data Engineering and Analytics Solutions</li>
                  <li>AI and Machine Learning Development</li>
                  <li>Application Modernization and Optimization</li>
                  <li>Security Assessment and Implementation</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Users are responsible for maintaining the confidentiality of their account 
                  credentials and for all activities that occur under their account. You agree 
                  to notify us immediately of any unauthorized use of your account or any other 
                  breach of security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  4. Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality on our website and services, including 
                  but not limited to text, graphics, logos, icons, images, audio clips, digital 
                  downloads, and software, are the exclusive property of Celestibia Solutions and 
                  are protected by international copyright, trademark, and other intellectual 
                  property laws.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Celestibia Solutions, its directors, employees, partners, 
                  agents, suppliers, or affiliates be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  6. Service Availability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide uninterrupted access to our services. However, we do not 
                  guarantee that our services will be available at all times. We reserve the 
                  right to modify, suspend, or discontinue any part of our services at any time 
                  without prior notice.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  7. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or 
                  sensitive information shared during the course of our engagement. This 
                  obligation shall survive the termination of any agreement between the parties.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws 
                  of India, without regard to its conflict of law provisions. Any disputes 
                  arising under these terms shall be subject to the exclusive jurisdiction 
                  of the courts in India.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users 
                  of any material changes by posting the new terms on our website. Your continued 
                  use of our services after such modifications constitutes acceptance of the 
                  updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;
