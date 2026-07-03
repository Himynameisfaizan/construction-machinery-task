"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Slider ka data (Real production mein tum client ki images lagana)
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Industrial manufacturing image
      title: "Premium Construction Machinery",
      subtitle: "Delivering world-class hydraulic solutions and heavy equipment for your toughest industrial challenges.",
      ctaText: "Explore Our Products",
      ctaLink: "/our-products",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Heavy machinery image
      title: "Unmatched Hydraulic Power",
      subtitle: "Custom-engineered hydraulic press machines designed for precision, durability, and maximum efficiency.",
      ctaText: "Get a Quote",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580983546594-52643a3db100?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Quality control image
      title: "Certified Global Standards",
      subtitle: "Tested for excellence. Trusted by industry leaders across India for unmatched manufacturing quality.",
      ctaText: "View Certifications",
      ctaLink: "/certifications",
    },
  ];

  // Auto-play logic (har 5 second mein slide change)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-slate-900">
      
      {/* 1. Slider Images with Ken Burns & Fade Effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with slight zoom animation */}
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-6000 ease-out ${
              index === current ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />
        </div>
      ))}

      {/* 2. Text Content (Micro-interactions for text) */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`max-w-2xl transition-all duration-1000 ease-in-out ${
                index === current
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-12 invisible absolute"
              }`}
            >
              <div className="inline-block mb-4 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">
                  Nitin Hydraulics
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {slide.ctaText}
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Slider Indicators (Dots) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? "w-8 h-2.5 bg-blue-500"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}