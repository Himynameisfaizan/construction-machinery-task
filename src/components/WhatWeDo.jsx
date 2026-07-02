import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-1 bg-blue-800 rounded-full"></span>
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase">
                What We Do
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Nitin Hydraulics <br />
              <span className="text-blue-800 font-extrabold text-3xl md:text-4xl">
                Engineering Excellence
              </span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Nitin Hydraulics is a premier manufacturing company driven by highly skilled and dedicated professionals. We offer a comprehensive product range that includes Hydraulic Press Machines, Block Making Machines, and custom industrial equipment. 
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              By leveraging cutting-edge technology and stringent quality control, we ensure that every machine delivers maximum efficiency, durability, and value for your investment.
            </p>

            <ul className="space-y-4 mb-10">
              {['Custom Machinery Design', 'Global Quality Standards', '24/7 Technical Support'].map((item, index) => (
                <li key={index} className="flex items-center text-slate-800 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-800">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-blue-800 rounded-lg shadow-lg hover:bg-blue-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Read More
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative z-10 order-1 lg:order-2">
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-blue-800 rounded-2xl hidden md:block"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          
              <div 
                className="w-full h-100 md:h-125 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
              ></div>
              
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border-l-4 border-blue-800 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-50 rounded-full text-blue-800 font-black text-2xl">
                10+
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg leading-none">Years of</p>
                <p className="text-blue-800 font-semibold text-sm mt-1">Excellence</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}