import Link from "next/link";

export default function BlogDetails({ params }: { params: { id: any } }) {
  const blogId = params.id;

  const blog = {
    id: blogId,
    title: "How Hydraulic Press Machines Are Revolutionizing Manufacturing",
    date: "Jul 02, 2026",
    category: "Technology",
    author: "Nitin Engineering Team",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",

    content: [
      "In the ever-evolving landscape of industrial manufacturing, precision, power, and efficiency are paramount. Hydraulic press machines have emerged as the backbone of modern heavy machinery, fundamentally changing how metal, plastics, and other materials are shaped and formed.",
      "A hydraulic press utilizes hydraulic cylinders to generate a compressive force. The basic principle relies on Pascal’s Law, which states that when pressure is applied to a confined fluid, the pressure change occurs throughout the entire fluid.",
      "With the integration of automated controls and IoT sensors, modern hydraulic presses offer unparalleled precision. Operators can now program exact pressure limits, holding times, and stroke speeds, ensuring that every manufactured piece meets stringent quality standards.",
      "Furthermore, these advancements significantly reduce material wastage and operator fatigue. As industries continue to demand higher output with lower environmental impact, energy-efficient hydraulic systems are leading the charge towards sustainable manufacturing."
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      
      <section 
        className="relative pt-32 pb-20 bg-slate-900"
        style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
         
          <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-white font-semibold mb-8 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to All Articles
          </Link>

          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-slate-300 text-sm font-semibold">
              {blog.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold border-2 border-white/20">
              N
            </div>
            <span className="text-slate-200 font-medium">By {blog.author}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-8 mb-10">
            <h3 className="text-slate-900 font-bold">Share this article:</h3>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn'].map((social, index) => (
                <button key={index} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all">
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-loose">
            {/* 
              ADMIN PANEL INTEGRATION NOTE: 
              Real CMS sends HTML string. You will render it using:
              <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} /> 
              For now, we map the dummy array.
            */}
            {blog.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg">
                {index === 0 ? (
                  // Dropcap effect for the first letter of the first paragraph (Premium Look)
                  <span className="float-left text-5xl font-black text-blue-800 mr-2 mt-1 leading-none">
                    {paragraph.charAt(0)}
                  </span>
                ) : null}
                {index === 0 ? paragraph.substring(1) : paragraph}
              </p>
            ))}
          </div>

          {/* Tags & Bottom Call to action */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2 mb-12">
              <span className="text-slate-900 font-bold mr-2 py-1">Tags:</span>
              {['Machinery', 'Manufacturing', 'Innovation', 'Heavy Duty'].map((tag, index) => (
                <span key={index} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-semibold hover:bg-slate-200 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Newsletter / Contact Box */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Need Custom Machinery Solutions?</h3>
              <p className="text-slate-600 mb-6">Our experts are ready to help you optimize your manufacturing process.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md">
                Contact Our Team
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}