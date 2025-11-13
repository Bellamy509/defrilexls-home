'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface FooterProps {
  variant?: 'contact-us' | 'find-talent' | 'find-jobs' | 'resources' | 'default';
}

const Footer = ({ variant = 'default' }: FooterProps) => {
  // Primary CTA content based on page variant
  const primaryCTA = {
    'contact-us': {
      headline: 'Need Assistance? Let\'s Connect.',
      body: 'Our team is here to help you find the best solution for your interpretation needs.',
      buttons: [
        { label: 'Contact us', href: '/contact#form', primary: true },
        { label: 'Find Talent', href: '/find-talent', primary: false },
        { label: 'Find Jobs', href: '/find-jobs', primary: false },
      ],
    },
    'find-talent': {
      headline: 'Ready to scale your multilingual operations?',
      body: 'Access pre-vetted interpreters in 300+ languages with instant booking.',
      buttons: [
        { label: 'Get started', href: '/find-talent#start', primary: true },
        { label: 'Talk to Sales', href: '/contact', primary: false },
      ],
    },
    'find-jobs': {
      headline: 'Interpret when, where, and how you want',
      body: 'Join the Defrilex Marketplace and match with high-paying assignments.',
      buttons: [
        { label: 'Browse jobs', href: '/find-jobs#browse', primary: true },
        { label: 'Create your profile', href: '/auth/sign-up', primary: false },
      ],
    },
    'resources': {
      headline: 'Insights to grow your language program',
      body: 'Industry guides, case studies, and best practices.',
      buttons: [
        { label: 'Read insights', href: '/resources#insights', primary: true },
        { label: 'Download a guide', href: '/resources#guides', primary: false },
      ],
    },
    'default': {
      headline: 'Need Assistance? Let\'s Connect.',
      body: 'Our team is here to help you find the best solution for your interpretation needs.',
      buttons: [
        { label: 'Contact us', href: '/contact#form', primary: true },
        { label: 'Find Talent', href: '/find-talent', primary: false },
        { label: 'Find Jobs', href: '/find-jobs', primary: false },
      ],
    },
  };

  // Secondary CTA content based on page variant
  const secondaryCTA = {
    'contact-us': [
      {
        title: 'Get an instant quote',
        description: 'The fastest way to get documents translated with transparent pricing.',
        buttonLabel: 'Instant quote',
        buttonHref: 'https://defrilex-ls.com/contact',
      },
      {
        title: 'Talk to an expert',
        description: 'Book a 15-minute call with our team.',
        buttonLabel: 'Schedule a call',
        buttonHref: 'https://calendly.com/clientservices-defrilex-ls/30min',
      },
    ],
    'find-talent': [
      {
        title: 'Build an RFP quickly',
        description: 'Download a customizable RFP template for your hiring needs.',
        buttonLabel: 'Download template',
        buttonHref: '#rfp-template',
      },
    ],
    'find-jobs': [
      {
        title: 'Boost your profile',
        description: 'Access our certification & portfolio checklist to stand out.',
        buttonLabel: 'Get checklist',
        buttonHref: '#profile-checklist',
      },
    ],
    'resources': [
      {
        title: 'Subscribe for monthly insights',
        description: 'No spam, just actionable content delivered to your inbox.',
        buttonLabel: 'Subscribe now',
        buttonHref: '#subscribe',
      },
    ],
    'default': [
      {
        title: 'Get an instant quote',
        description: 'The fastest way to get documents translated with transparent pricing.',
        buttonLabel: 'Instant quote',
        buttonHref: 'https://defrilex-ls.com/contact',
      },
      {
        title: 'Talk to an expert',
        description: 'Book a 15-minute call with our team.',
        buttonLabel: 'Schedule a call',
        buttonHref: 'https://calendly.com/clientservices-defrilex-ls/30min',
      },
    ],
  };

  const currentPrimaryCTA = primaryCTA[variant];
  const currentSecondaryCTA = secondaryCTA[variant];

  const companyLinks = [
    { name: 'About Us', href: 'https://defrilex.com/about.php' },
    { name: 'Careers', href: 'https://defrilex.com/Jobs.php' },
    { name: 'News', href: '#' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Sale', href: '/legal/terms' },
  ];

  const platformLinks = [
    { name: 'Find Jobs', href: '/find-jobs' },
    { name: 'Find Talent', href: '/find-talent' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const legalLinks = [
    { name: 'Terms', href: '/legal/terms' },
    { name: 'Privacy', href: '/legal/privacy' },
    { name: 'Cookies', href: '#cookies' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-4 w-4" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="h-4 w-4" /> },
  ];

  return (
    <footer className="bg-white border-t border-border">
      {/* Primary CTA Band */}
      <section className="bg-gray-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-3 leading-tight">
                {currentPrimaryCTA.headline}
              </h2>
              <p className="text-base lg:text-lg text-body-text leading-relaxed max-w-2xl">
                {currentPrimaryCTA.body}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {currentPrimaryCTA.buttons.map((btn) => (
                <Button
                  key={btn.label}
                  asChild
                  variant={btn.primary ? 'default' : 'outline'}
                  size="lg"
                  className="min-w-[140px]"
                >
                  <a href={btn.href}>{btn.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Cards */}
      {currentSecondaryCTA.length > 0 && (
        <section className="bg-white border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className={`max-w-5xl mx-auto grid gap-6 ${
              currentSecondaryCTA.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-2xl'
            }`}>
              {currentSecondaryCTA.map((cta) => (
                <div
                  key={cta.title}
                  className="bg-gray-50 rounded-lg p-6 lg:p-8 border border-border hover:border-gray-300 transition-colors"
                >
                  <h3 className="text-xl font-bold text-dark-text mb-2">
                    {cta.title}
                  </h3>
                  <p className="text-sm text-body-text mb-4 leading-relaxed">
                    {cta.description}
                  </p>
                  <Button asChild variant="outline" size="default">
                    <a 
                      href={cta.buttonHref}
                      {...(cta.buttonHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {cta.buttonLabel}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Utility Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pb-12 border-b border-border">
          {/* Column 1 - Company */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-dark-text mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-body-text hover:text-primary-blue hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Platform */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-dark-text mb-4">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-body-text hover:text-primary-blue hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources (empty for layout) */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Column 4 - Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-dark-text mb-4">Contact</h4>

            {/* Language & Currency Selectors */}
            <div className="space-y-3 mb-6">
              <button className="w-full border border-border rounded flex items-center justify-between px-3 py-2 text-sm text-left text-body-text bg-white hover:border-gray-400 focus:ring-2 focus:ring-ring focus:outline-none transition-colors">
                <span>English</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              <button className="w-full border border-border rounded flex items-center justify-between px-3 py-2 text-sm text-left text-body-text bg-white hover:border-gray-400 focus:ring-2 focus:ring-ring focus:outline-none transition-colors">
                <span>US dollar (USD)</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <a
                href="tel:+18889820561"
                className="flex items-start text-sm text-body-text hover:text-primary-blue group transition-colors"
              >
                <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary-blue transition-colors mt-0.5 flex-shrink-0" />
                <span className="ml-2">+1 (888) 982-0561</span>
              </a>
              <a
                href="mailto:contact@defrilex.com"
                className="flex items-start text-sm text-body-text hover:text-primary-blue group transition-colors"
              >
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary-blue transition-colors mt-0.5 flex-shrink-0" />
                <span className="ml-2">contact@defrilex.com</span>
              </a>
              <div className="flex items-start text-sm text-body-text">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="ml-2">12000 Biscayne Blvd Suite 205, Miami, FL 33181</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © Defrilex — All rights reserved.
          </span>
          <nav className="flex items-center gap-1">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-body-text hover:text-primary-blue hover:underline transition-colors px-2"
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-muted-foreground">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-light-gray-bg hover:bg-gray-200 flex items-center justify-center text-muted-foreground hover:text-body-text transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;