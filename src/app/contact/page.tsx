'use client';

import { useState } from 'react';
import { MessageCircle, Headphones, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

interface ContactCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  note?: string;
  actionType: 'mailto' | 'tel' | 'link';
  actionValue: string;
  actionText: string;
  address?: string[];
}

const contactCards: ContactCard[] = [
  {
    icon: MessageCircle,
    title: 'Chat to sales',
    text: 'Speak to our friendly team.',
    note: 'Mon–Fri, 9am–5pm ET. Response within 1 business day.',
    actionType: 'mailto',
    actionValue: 'mailto:sales@defrilex.com',
    actionText: 'sales@defrilex.com',
  },
  {
    icon: Headphones,
    title: 'Chat to support',
    text: 'We\'re here to help.',
    note: 'Avg. first response: <24h.',
    actionType: 'mailto',
    actionValue: 'mailto:support@defrilex.com',
    actionText: 'support@defrilex.com',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    text: 'Visit our office HQ.',
    address: ['12000 Biscayne Blvd, Suite 205', 'Miami, FL 33181, USA'],
    actionType: 'link',
    actionValue: 'https://www.google.com/maps/search/?api=1&query=12000+Biscayne+Blvd+Suite+205+Miami+FL+33181',
    actionText: 'View on Google Maps',
  },
  {
    icon: Phone,
    title: 'Call us',
    text: 'Mon–Fri from 8am to 5pm ET.',
    actionType: 'tel',
    actionValue: 'tel:+18889820561',
    actionText: '+1 (888) 982-0561',
  },
];

const faqItems = [
  {
    question: 'How do I book an interpreter?',
    answer: 'Create an account, post your job or choose instant booking, then confirm schedule and rate. It\'s that simple! Our platform makes it easy to find qualified interpreters for your specific language needs.',
  },
  {
    question: 'Which languages do you support?',
    answer: 'We support 200+ languages including Haitian Creole, Spanish, ASL, French, Portuguese, Mandarin, Arabic, Russian, and many more. View our full list of supported languages for comprehensive coverage.',
  },
  {
    question: 'Do you offer on-site and remote interpreting?',
    answer: 'Yes—we offer on-site, phone, and video interpreting services. Coverage varies by region, but we work to ensure you have the right interpreter available when and where you need them.',
  },
  {
    question: 'How are interpreters vetted?',
    answer: 'All interpreters undergo ID verification, credentials review, skills assessment, and ongoing quality assurance. We maintain high standards to ensure professional, reliable service.',
  },
  {
    question: 'What are your support hours?',
    answer: 'Our support team is available Mon–Fri, 9am–5pm ET. Emergency support is available for active clients with urgent interpretation needs.',
  },
  {
    question: 'How do vendors work with Defrilex?',
    answer: 'Vendors can manage teams, contracts, and payouts through our dedicated vendor portal. The platform provides tools for team coordination, billing management, and performance tracking.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'sales',
    message: '',
    honeypot: '', // Anti-spam honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot detected');
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          topic: formData.topic,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        topic: 'sales',
        message: '',
        honeypot: '',
      });
      toast.success("Thanks! We'll be in touch within 1 business day.");

      // Track form submission
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Contact Form Submitted', {
          topic: formData.topic,
        });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactCardClick = (actionType: string, actionValue: string) => {
    // Track clicks
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Contact Card Clicked', {
        type: actionType,
        value: actionValue,
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-background py-16 md:py-20 lg:py-24">
            <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
                  Contact our friendly team
                </h1>
                <p className="mt-6 text-lg md:text-xl text-[#768190] leading-[1.6]">
                  Let us know how we can help.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Cards Section */}
          <section className="bg-background py-12 md:py-16">
            <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={index}
                      className="group bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                      role="region"
                      aria-label={card.title}
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                        <p className="text-[#768190] text-base leading-relaxed mb-4">{card.text}</p>

                        {card.address && (
                          <address className="text-[#768190] text-sm leading-relaxed mb-4 not-italic">
                            {card.address.map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </address>
                        )}

                        <a
                          href={card.actionValue}
                          target={card.actionType === 'link' ? '_blank' : undefined}
                          rel={card.actionType === 'link' ? 'noopener noreferrer' : undefined}
                          onClick={() => handleContactCardClick(card.actionType, card.actionValue)}
                          className="inline-flex items-center text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded mt-auto group/link"
                        >
                          {card.actionText}
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                        </a>

                        {card.note && (
                          <p className="text-[#768190] text-xs leading-relaxed mt-4 pt-4 border-t border-border">
                            {card.note}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-muted py-16 md:py-20" role="region" aria-label="Contact form">
            <div className="max-w-[800px] mx-auto px-4 xl:px-0">
              <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in touch</h2>
                  <p className="text-[#768190] text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold text-lg">Thank you for reaching out!</p>
                    <p className="text-green-700 mt-2">We'll be in touch within 1 business day.</p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute opacity-0 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-2 block">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-foreground mb-2 block">
                        Company <span className="text-muted-foreground text-xs">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="topic" className="text-sm font-semibold text-foreground mb-2 block">
                        Topic <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        required
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-required="true"
                      >
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us how we can help..."
                        rows={6}
                        className="w-full resize-none"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-background py-16 md:py-20 lg:py-24" role="region" aria-label="Frequently asked questions">
            <div className="max-w-[900px] mx-auto px-4 xl:px-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground leading-[1.3] tracking-[-0.25px]">
                  Frequently asked questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-border px-6">
                    <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#768190] text-base leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}