import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-primary mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-primary mb-4">Get in Touch</h2>
                <p>
                  Whether you have questions about our events, want to collaborate, or are interested in joining our
                  team, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-lg">info@drinterested.org</p>
                    <p className="text-gray-600">We'll respond within 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Join Our Discord</h3>
                    <p className="text-lg">Connect with our community</p>
                    <Button className="mt-2 bg-[#5865F2] hover:bg-[#5865F2]/90">
                      <a
                        href="https://discord.gg/pzbGRgsGXY"
                        target="_blank"
                        className="flex items-center gap-2"
                        rel="noreferrer"
                      >
                        Join Discord
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/dr.interested/"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors"
                    rel="noreferrer"
                  >
                    <Instagram size={24} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dr-interested"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors"
                    rel="noreferrer"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-tertiary p-8 rounded-lg shadow-md">
              <h2 className="text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="btn-primary w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-primary">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">How can I join Dr.Interested?</h3>
              <p>
                We open applications for new members periodically. Follow us on social media or join our mailing list to
                be notified when applications open.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Do I need to be pre-med to join?</h3>
              <p>
                Not at all! We welcome all high school students interested in healthcare, regardless of their future
                career plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Are your events only for members?</h3>
              <p>
                Most of our webinars and workshops are open to all interested students. Some special events may be
                member-exclusive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">
                How can my school collaborate with Dr.Interested?
              </h3>
              <p>
                We're always open to school partnerships! Contact our Outreach Department to discuss potential
                collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

