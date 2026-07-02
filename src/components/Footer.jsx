import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About Company */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-black tracking-tight text-white">
                NITIN
              </span>
              <span className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase -mt-1">
                Hydraulics
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Leading manufacturer of high-quality construction machinery and hydraulic equipment. We deliver premium industrial solutions with unparalleled reliability and performance.
            </p>
            {/* Social Icons inside Footer */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Our Products', 'Certifications', 'Blog', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                    <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">▸</span>
                    {item === 'Home' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Dummy links for full look) */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {['Hydraulic Press Machines', 'Earth Moving Equipment', 'Industrial Mixers', 'Construction Hoists', 'Spare Parts'].map((item, index) => (
                <li key={index}>
                  <Link href="/products" className="group flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                    <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">▸</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded"></span>
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  1805, Industrial Area, <br />
                  Near Pandit Shree Ram Sharma Metro Station, <br />
                  Bahadurgarh, Haryana—124507, India
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918796265233" className="hover:text-white transition-colors">+91-8796265233</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@nitinhydraulics.com" className="hover:text-white transition-colors">info@nitinhydraulics.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Nitin Hydraulics. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}