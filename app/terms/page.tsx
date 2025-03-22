import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-fancy text-primary mb-6">Terms and Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              1. Introduction
            </h2>
            <p>
              Welcome to Dr.Interested. These Terms and Conditions govern your use of our website and services. By
              accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              2. Use of Our Services
            </h2>
            <p>
              Dr.Interested provides educational content, webinars, and resources for high school students interested in
              healthcare careers. Our services are intended for educational purposes only and do not constitute
              professional medical advice.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              3. User Accounts
            </h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are
              responsible for maintaining the confidentiality of your account and password and for restricting access to
              your computer.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              4. Privacy Policy
            </h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
              personal information. By using our services, you consent to our collection and use of your data as
              described in our Privacy Policy.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              5. Email Communications
            </h2>
            <p>
              By providing your email address and subscribing to our newsletter, you consent to receive communications
              from us. These may include updates, event announcements, and educational content. You can unsubscribe at
              any time by clicking the unsubscribe link in our emails.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              6. Intellectual Property
            </h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of Dr.Interested
              and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without
              our express permission.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              7. User Conduct
            </h2>
            <p>When using our services, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Post or transmit harmful or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for commercial purposes without permission</li>
            </ul>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              8. Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our
              website will be error-free or uninterrupted.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              9. Limitation of Liability
            </h2>
            <p>
              Dr.Interested shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising out of your use or inability to use our services.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any significant changes.
              Your continued use of our services after such modifications constitutes your acceptance of the updated
              Terms.
            </p>

            <h2 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              11. Contact Us
            </h2>
            <p>If you have any questions about these Terms, please contact us at info@drinterested.org.</p>
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button className="btn-primary">Return to Home</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

