import Link from "next/link";
import PageHeader from "./PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Page Banner Section */}
      
        <PageHeader title="About Us" currentPath="About Us" />
      {/* 2. Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-3 block">
                Welcome To
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                Nitin Hydraulics <br />
                <span className="text-blue-800">Engineering Excellence</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                We are a leading manufacturer of a wide range of hydraulic equipment, brick making machines, block making machines, and custom industrial tools. With years of expertise in the industry, we have established ourselves as a prominent name known for quality and reliability.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Our leadership has played a momentous role in taking the organization to desired prominence. With a practical approach and strict ethical policies, we maintain long-lasting relationships with our global clientele.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">We specialize in the following key aspects:</h3>
              <ul className="space-y-3">
                {['Durable and High-Quality Products', 'Timely Delivery with Reliable Support', 'Competitive Pricing and Great Value'].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-semibold">
                    <svg className="w-5 h-5 text-blue-800 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image with Offset Border */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-blue-800 rounded-2xl hidden md:block"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div 
                  className="w-full h-125 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision, Mission, Values (Light Grey Background) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-800 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our vision is to drive growth by delivering technologically advanced Brick Making Machines, leveraging reliable and innovative processes to provide efficient and sustainable manufacturing solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center relative overflow-hidden">
              {/* Highlight bar for the center card */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-800"></div>
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-800 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To achieve sustainable growth through quality manufacturing and technological leadership, making Nitin Hydraulics the preferred global supplier for construction machinery.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-800 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We embed integrity, trust, and passion to create a motivating workplace. With honesty and quality at every stage, we strive to meet client requirements in the best possible way.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Skill Bars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Leadership Text */}
            <div>
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-3 block">
                Leadership That Drives
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                Excellence At <br />
                <span className="text-blue-800">Nitin Hydraulics</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                At Nitin Hydraulics, strong leadership and ethical practices drive our success. Guided by our visionary management, we excel in Heavy Machinery Manufacturing. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our practical approach fosters long-term customer relationships and empowers employees to make informed decisions, ensuring top-quality products and services are delivered consistently across the globe.
              </p>
            </div>

            {/* Right: Premium Progress/Skill Bars */}
            <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              
              {/* Skill 1 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-900 font-bold">Customer Satisfaction Ensured</span>
                  <span className="text-blue-800 font-black bg-blue-100 px-2 py-1 rounded text-sm">99%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>

              {/* Skill 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-900 font-bold">Skilled Professionals</span>
                  <span className="text-blue-800 font-black bg-blue-100 px-2 py-1 rounded text-sm">95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* Skill 3 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-900 font-bold">Quality Assurance</span>
                  <span className="text-blue-800 font-black bg-blue-100 px-2 py-1 rounded text-sm">100%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Skill 4 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-900 font-bold">Prompt Delivery</span>
                  <span className="text-blue-800 font-black bg-blue-100 px-2 py-1 rounded text-sm">98%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}