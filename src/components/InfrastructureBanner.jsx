import Link from "next/link";

export default function InfrastructureBanner() {
  return (
    <section 
      className="relative w-full py-32 bg-slate-900 bg-fixed bg-center bg-cover overflow-hidden" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-lg">
          Expert Engineering & <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200">
            Advanced Infrastructure
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Backed by state-of-the-art manufacturing facilities and a highly skilled workforce, we deliver heavy machinery that meets the highest global standards of precision, durability, and performance.
        </p>
        
        <Link 
          href="/contact" 
          className="group inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-blue-800 rounded-lg shadow-2xl hover:bg-blue-900 hover:shadow-blue-900/50 hover:-translate-y-1 transition-all duration-300 border border-blue-700/50"
        >
          Take a Facility Tour
          <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}