"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default fallback data agar localStorage khali ho
  const defaultBlogs = [
    { id: "BLG-01", title: "Pan Mixer 500: The Ultimate Choice for Heavy Production", date: "Oct 15, 2026", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: "BLG-02", title: "Fly Ash Bricks Machine Manufacturers in India", date: "Oct 10, 2026", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: "BLG-03", title: "Automatic Fly Ash Block Machine: Boost Your Efficiency", date: "Sep 28, 2026", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  useEffect(() => {
    const savedBlogs = localStorage.getItem("nitin_blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(defaultBlogs);
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Latest Blog</h2>
          <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Hum sirf latest 3 articles dikhayenge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${blog.image})` }}></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 block">{blog.date}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 hover:text-blue-800 transition-colors line-clamp-2 flex-grow">{blog.title}</h3>
                
                {/* Dynamically link to blog details page */}
                <Link href={`/blog/${blog.id}`} className="mt-auto text-blue-800 font-semibold hover:text-blue-900 flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}