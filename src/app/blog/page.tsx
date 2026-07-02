import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function page() {
  // Dummy Blog Data (Yeh baad mein Sanity CMS ya API se fetch hoga)
  const blogsData = [
    {
      id: 1,
      title: "How Hydraulic Press Machines Are Revolutionizing Manufacturing",
      excerpt: "Discover the latest advancements in hydraulic technology and how they are increasing efficiency and precision in modern industrial applications.",
      date: "Jul 02, 2026",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Fly Ash Bricks vs. Traditional Clay Bricks: Which is Better?",
      excerpt: "A comprehensive comparison between fly ash bricks and traditional red bricks, analyzing cost, strength, and environmental impact.",
      date: "Jun 28, 2026",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Maintenance Tips for Your Block Making Machine",
      excerpt: "Keep your block making machine running at peak performance with these essential daily, weekly, and monthly maintenance routines.",
      date: "Jun 15, 2026",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "The Future of Automated Construction Machinery in India",
      excerpt: "Exploring the rise of automation in the Indian construction sector and what it means for builders, contractors, and manufacturers.",
      date: "May 30, 2026",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1580983546594-52643a3db100?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Why Invest in a High-Quality Pan Mixer?",
      excerpt: "Understanding the crucial role of a reliable pan mixer in ensuring the perfect consistency and quality of your concrete and ash mixtures.",
      date: "May 12, 2026",
      category: "Equipment Guide",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Nitin Hydraulics Achieves ISO 9001 Certification",
      excerpt: "We are proud to announce our latest milestone in quality assurance, reinforcing our commitment to delivering world-class machinery.",
      date: "Apr 25, 2026",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Reusable Page Header */}
      <PageHeader title="Latest Insights & News" currentPath="Blog" />

      {/* 2. Blog Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Our Latest <span className="text-blue-800">Articles</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Stay updated with the latest trends in the construction machinery industry, maintenance guides, and company news.
            </p>
          </div>

          {/* Responsive CSS Grid (1 col on Mobile, 2 on Tablet, 3 on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 group flex flex-col h-full"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {blog.category}
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col grow">
                  <span className="text-sm font-semibold text-slate-500 mb-3 block">
                    {blog.date}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  {/* Read More Link (Pushed to bottom using mt-auto) */}
                  <Link 
                    href={`/blog/${blog.id}`} 
                    className="mt-auto inline-flex items-center text-blue-800 font-bold hover:text-blue-900 transition-colors group/link"
                  >
                    Read Full Article 
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Animated Bottom Border */}
                <div className="w-full h-1 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </article>
            ))}
          </div>

          {/* Load More Button (Dummy) */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white text-blue-800 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
              Load More Articles
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}