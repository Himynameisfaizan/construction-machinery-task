import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Reusable Page Header */}
      <PageHeader title="Contact Us" currentPath="Contact" />

      {/* 2. Main Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Premium Message & Heading */}
              <div>
                <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-3 block">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                  Let's Build Something <br />
                  <span className="text-blue-800">Great Together.</span>
                </h2>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-800 rounded-r-lg mb-6">
                  <p className="text-slate-700 font-medium italic">
                    "Whether you need a custom machinery quote, technical support, or partnership inquiries, our expert team is ready to assist you 24/7."
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                
                {/* Location Card */}
                <div className="flex items-start p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Corporate Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      1805, Industrial Area, <br />
                      Near Pandit Shree Ram Sharma Metro Station, <br />
                      Bahadurgarh, Haryana—124507, India
                    </p>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="flex items-start p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Contact Details</h4>
                    <a href="tel:+918796265233" className="block text-slate-600 text-sm hover:text-blue-800 transition-colors mb-1">
                      <strong>Phone:</strong> +91-8796265233
                    </a>
                    <a href="mailto:info@nitinhydraulics.com" className="block text-slate-600 text-sm hover:text-blue-800 transition-colors">
                      <strong>Email:</strong> info@nitinhydraulics.com
                    </a>
                  </div>
                </div>

                {/* Social Media & Business Hours */}
                <div className="flex items-start p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="ml-4 w-full">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm mb-3">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    
                    {/* Social Icons */}
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                      <a href="#" className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
                      <a href="#" className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Lead Generation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-800 to-blue-500"></div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">Send Us an Inquiry</h3>
                <p className="text-slate-500 text-sm mb-8">Fill out the form below and our sales team will get back to you within 24 hours.</p>

                <form className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all" required />
                    </div>
                  </div>

                  {/* Row 2: Email & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                      <input type="text" placeholder="Your Business Pvt. Ltd." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  {/* Machine Interest Dropdown */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Product of Interest</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all text-slate-600">
                      <option value="general">General Inquiry</option>
                      <option value="brick-machine">Brick Making Machine</option>
                      <option value="block-machine">Block Making Machine</option>
                      <option value="pan-mixer">Pan Mixer</option>
                      <option value="custom">Custom Hydraulic Solution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                    <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all resize-none" required></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full py-4 bg-blue-800 text-white font-black text-lg rounded-lg shadow-lg hover:bg-blue-900 hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2">
                    Submit Inquiry
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Full Width Map Section */}
      <section className="w-full h-96 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Nitin Hydraulics Location"
          src="https://maps.app.goo.gl/dS1fNTW48CNLR7ya9" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  );
}