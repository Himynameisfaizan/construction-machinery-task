import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "Certified for maintaining strict quality control across all manufacturing processes, ensuring consistent and reliable machinery output.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      id: 2,
      title: "CE Marking",
      subtitle: "European Conformity Standard",
      description: "Our machines comply with the rigorous safety, health, and environmental protection requirements set by the European Economic Area.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
      )
    },
    {
      id: 3,
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "Recognized for our eco-friendly manufacturing practices and commitment to reducing industrial waste and carbon footprint.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: 4,
      title: "Make in India",
      subtitle: "Government of India Initiative",
      description: "Proudly manufacturing indigenous, high-grade construction machinery contributing to the nation's industrial growth.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Page Header */}
      <PageHeader title="Global Certifications" currentPath="Certifications" />

      {/* 2. Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-3 block">
            Our Commitment to Quality
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Tested for Excellence. <br />
            <span className="text-blue-800">Trusted Worldwide.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            At Nitin Hydraulics, quality is not just a standard; it is our habit. We adhere to stringent international manufacturing and safety standards to ensure that every machine leaving our facility delivers unmatched performance, durability, and operator safety.
          </p>
        </div>
      </section>

      {/* 3. Certifications Grid (Premium Display) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="group flex flex-col sm:flex-row items-center sm:items-start bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-800"
              >
                {/* Premium Icon/Badge Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6 sm:mb-0 sm:mr-8 group-hover:bg-blue-800 group-hover:text-white group-hover:scale-105 transition-all duration-500 shadow-inner">
                  {cert.icon}
                </div>
                
                {/* Text Content */}
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-800 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-blue-800 font-bold text-sm uppercase tracking-wide mb-4">
                    {cert.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Assurance Process (Bonus Points Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-slate-200 rounded-2xl hidden md:block"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: "url('https://picsum.photos/1000/500')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-black text-2xl">In-House Testing Lab</p>
                  <p className="text-blue-200 font-semibold">Bahadurgarh, Haryana</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-3 block">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                Rigorous Testing At <br /> Every Stage.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Achieving global certifications requires more than just paperwork. We subject every component to strict stress tests and real-world simulations to guarantee maximum uptime for your business.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Raw Material Inspection", text: "Every batch of steel and hydraulics is laboratory-tested before fabrication." },
                  { title: "Precision Machining", text: "CNC and VMC machines ensure components are accurate to the micron." },
                  { title: "Load & Stress Testing", text: "Completed machines are run at 110% capacity to ensure ultimate safety." }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded bg-blue-800 flex items-center justify-center text-white font-black mr-4 flex-shrink-0 shadow-md">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="bg-slate-900 py-16 border-t-4 border-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6">Ready to upgrade your manufacturing?</h2>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:-translate-y-1"
          >
            Get a Certified Machine Quote
          </Link>
        </div>
      </section>

    </main>
  );
}