"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Products", path: "/our-products" },
    { name: "Certifications", path: "/certifications" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    // Light background with Glassmorphism (blur) effect for a premium feel
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* 1. Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                  NITIN
                </span>
                <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase -mt-1">
                  Hydraulics
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Centered) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-base font-semibold transition-all duration-300 ${
                  pathname === link.path
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {link.name}
                {/* Premium Hover Underline Effect */}
                <span 
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 transition-transform duration-300 origin-left ${
                    pathname === link.path ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* 3. CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+918796265233"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-700 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {/* Small Phone Icon SVG */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get a Quote
              </span>
            </a>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-700 focus:outline-none p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon (X)
                <svg className="h-8 w-8 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="h-8 w-8 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname === link.path
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile CTA */}
          <div className="pt-4">
            <a
              href="tel:+918796265233"
              className="flex items-center justify-center w-full px-5 py-3 text-base font-bold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 transition-colors"
            >
              Call: +91 8796265233
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}