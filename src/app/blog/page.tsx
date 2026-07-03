"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

export default function BlogPage() {
  const [blogsData, setBlogsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default Fallback Data (Agar user seedha is page par aaye bina admin visit kiye)
  const defaultBlogs = [
    { 
      id: "BLG-01", 
      title: "How Hydraulic Press Machines Are Revolutionizing Manufacturing", 
      category: "Technology", 
      date: "Jul 03, 2026",
      excerpt: "Discover the latest advancements in hydraulic technology and how they are increasing efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    { 
      id: "BLG-02", 
      title: "Fly Ash Bricks vs. Traditional Clay Bricks: Which is Better?", 
      category: "Construction", 
      date: "Jun 28, 2026",
      excerpt: "A comprehensive comparison between fly ash bricks and traditional red bricks analyzing cost and strength.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    { 
      id: "BLG-03", 
      title: "Maintenance Tips for Your Block Making Machine", 
      category: "Maintenance", 
      date: "Jun 15, 2026",
      excerpt: "Keep your block making machine running at peak performance with these essential daily routines.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const savedBlogs = localStorage.getItem("nitin_blogs");
    if (savedBlogs) {
      setBlogsData(JSON.parse(savedBlogs));
    } else {
      setBlogsData(defaultBlogs);
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader title="Latest Insights & News" currentPath="Blog" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Our Latest <span className="text-blue-800">Articles</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Stay updated with the latest trends in the construction machinery industry, maintenance guides, and company news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 group flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {blog.category}
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm font-semibold text-slate-500 mb-3 block">
                    {blog.date}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Link href={`/blog/${blog.id}`} className="mt-auto inline-flex items-center text-blue-800 font-bold hover:text-blue-900 transition-colors group/link">
                    Read Full Article 
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full h-1 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}