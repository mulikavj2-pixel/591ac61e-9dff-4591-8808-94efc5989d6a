"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedGrid"
      cardStyle="accent-corner-border"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Brew Haven"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Visit Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Brew Haven"
          description="Crafted espresso and artisan coffee in a welcoming atmosphere. Your daily ritual starts here."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve a Table", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/coffee-shop-barista-latte-espresso-1766142404581-9c118714.jpg"
          imageAlt="Freshly brewed coffee with latte art"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Since 2018, Brew Haven has been dedicated to sourcing the finest coffee beans from sustainable farms around the world. We believe in quality, consistency, and creating a space where our community gathers to share moments that matter. Every cup tells a story."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardSeven
          title="Featured Selections"
          description="Our signature coffee blends and seasonal specialties"
          products={[
            {
              id: "1",
              name: "Signature Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/coffee-cup-beverage-drink-menu-1766142406973-7b333bdb.jpg",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              name: "Caramel Macchiato",
              price: "$5.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/latte-art-cappuccino-foam-barista-1766142412069-6772bd05.jpg",
              imageAlt: "Caramel macchiato with artistic foam"
            },
            {
              id: "3",
              name: "Cold Brew Concentrate",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/coffee-beans-roasted-organic-premium-1766142409967-16a34d44.jpg",
              imageAlt: "Smooth cold brew coffee"
            },
            {
              id: "4",
              name: "Seasonal Blend",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/cafe-interior-cozy-seating-ambiance-1766142414464-85d5823e.jpg",
              imageAlt: "Today's seasonal specialty"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Love"
          description="Join hundreds of coffee lovers who make Brew Haven their daily destination"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/woman-portrait-smiling-customer-happy-1766142417510-7acbe198.jpg",
              imageAlt: "Portrait of Sarah"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Enthusiast",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/man-portrait-customer-coffee-enjoying-1766142419611-19c21f41.jpg",
              imageAlt: "Portrait of James"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/woman-portrait-young-customer-friendly-1766142421836-8625a2bc.jpg",
              imageAlt: "Portrait of Emma"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Business Owner",
              company: "Downtown District",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/man-portrait-professional-business-custo-1766142424833-fba3df2f.jpg",
              imageAlt: "Portrait of Michael"
            },
            {
              id: "5",
              name: "Lisa Park",
              role: "Writer & Blogger",
              company: "Content Creator",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/woman-portrait-creative-customer-cafe-1766142427988-4371c490.jpg",
              imageAlt: "Portrait of Lisa"
            },
            {
              id: "6",
              name: "David Brooks",
              role: "Freelancer",
              company: "Remote Worker",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/tmp/man-portrait-casual-customer-relax-1766142430569-be2a9940.jpg",
              imageAlt: "Portrait of David"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Us Today"
          ctaDescription="Stop by our café and experience the Brew Haven difference. We're open daily and ready to serve your perfect cup."
          ctaButton={{
            text: "Get Directions",
            href: "https://maps.google.com"
          }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "What are your hours?",
              content: "We're open Monday to Friday from 7 AM to 7 PM, Saturday 8 AM to 8 PM, and Sunday 8 AM to 6 PM. Closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi and seating for remote workers?",
              content: "Yes! We have comfortable seating, reliable WiFi, and outlets throughout the café. Many of our regulars work here daily. We ask that you purchase something, and longer stays are always appreciated."
            },
            {
              id: "3",
              title: "Can I make private event reservations?",
              content: "Absolutely. We can accommodate groups and private events for meetings, celebrations, or tastings. Contact us at least 2 weeks in advance to discuss your needs and reserve a date."
            },
            {
              id: "4",
              title: "Do you have food options?",
              content: "We partner with local bakeries for fresh pastries, sandwiches, and light snacks. All items are sourced daily to ensure quality and freshness."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, debit cards, digital wallets, and cash. We also offer a loyalty program for frequent visitors."
            },
            {
              id: "6",
              title: "Are there parking options nearby?",
              content: "There's free street parking available on the main avenue and a paid lot two blocks away. We also offer bike racks for our cycling customers."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Brew Haven"
        />
      </div>
    </ThemeProvider>
  );
}