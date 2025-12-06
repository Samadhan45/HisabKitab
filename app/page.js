import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
  pricingData,
  faqData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="stat-number text-4xl md:text-5xl font-bold text-primary mb-2 transform group-hover:scale-110 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to
              <span className="block gradient-title mt-2">Manage Your Money</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful features designed specifically for Indian users to track, analyze, and optimize their finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get Started in <span className="gradient-title">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start managing your finances like a pro in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center relative z-10">
                {/* Connector line - Desktop only */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent dashed-line" />
                )}

                <div className="relative inline-flex w-20 h-20 bg-primary/10 rounded-full items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/10 group transform hover:scale-110 transition-transform duration-300">
                  <div className="text-primary text-3xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-4 border-background">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Loved by <span className="gradient-title">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our users have to say about HisabKitab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      {/* Name is pre-styled in data, wrapping in div to handle it properly if needed */}
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic relative">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="gradient-title">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your financial journey. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingData.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'border-primary border-2 shadow-xl scale-105 z-10' : 'border-border hover:border-primary/50'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-primary py-1 text-center text-white text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 flex flex-col h-full ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-8">{plan.description}</p>

                  <div className="flex-grow space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/dashboard" className="w-full">
                    <Button
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full rounded-xl py-6 text-lg hover:scale-105 transition-transform"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-title">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-bold mb-3 flex items-start">
                  <span className="mr-3 text-primary text-xl">?</span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">

            {/* Glows */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50" />

            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join 50,000+ Indians managing their finances smarter with HisabKitab.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-10 py-7 text-lg rounded-xl shadow-xl shadow-primary/25 glow-button w-full sm:w-auto hover:scale-105 transition-transform"
                >
                  Start Tracking Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

