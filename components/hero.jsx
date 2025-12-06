"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = 100;

          if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
          } else {
            imageElement.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background -z-10" />

      {/* Floating Elements (Subtle) */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] animate-fade-in-up">
          Manage Your Money with <br />
          <span className="gradient-title">India&rsquo;s Smartest Finance Platform</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Automated expense tracking, personalized budget planning, and investment insights tailored for the Indian economy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-7 text-lg rounded-2xl shadow-xl shadow-primary/20 glow-button transform hover:scale-105 transition-all duration-300"
            >
              Start Tracking Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-10 py-7 text-lg rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 border-2"
            >
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Dashboard Preview Image */}
        <div className="hero-image-wrapper mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div ref={imageRef} className="hero-image">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-background/50 backdrop-blur-xl">
                <Image
                  src="/banner.jpeg"
                  width={1280}
                  height={720}
                  alt="HisabKitab Dashboard"
                  className="w-full h-auto rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority
                />

                {/* Glass Overlay on Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-muted-foreground text-sm font-medium">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
