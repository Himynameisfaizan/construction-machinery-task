"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OurProductLine() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default fallback data agar localStorage khali ho
  const fallbackProducts = [
    {
      id: "PRD-01",
      name: "Semi-Automatic Brick Making Machine (Techno 24)",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "PRD-02",
      name: "Fully Automatic Block Machine",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // LocalStorage se data load karna
  useEffect(() => {
    const savedData = localStorage.getItem("nitin_products");
    if (savedData) {
      setProducts(JSON.parse(savedData));
    } else {
      setProducts(fallbackProducts);
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Product Line</h2>
          <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            As an industry-leading manufacturer, we build robust machines that guarantee efficiency.
          </p>
        </div>

        {/* Hum sirf latest 2 ya 4 products dikhayenge Homepage pe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden bg-white">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 p-8"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <div className="p-8 text-center bg-white border-t border-slate-200 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex-grow">{product.name}</h3>
                <Link 
                  href={`/our-products/${product.id}`} 
                  className="inline-block px-8 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md mt-auto"
                >
                  View Machine Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}