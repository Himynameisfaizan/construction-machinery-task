"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";

interface Product {
  id: string;
  name: string;
  category: string;
  status: string;
  stock: string | number;
  image?: string;
}


export default function ProductsPage() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default Fallback Data (Agar localStorage khali ho)
  const defaultProducts = [
    {
      id: "PRD-01",
      name: "Semi-Automatic Brick Making Machine",
      category: "Brick Machines",
      status: "Active",
      stock: 15,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "PRD-02",
      name: "Fully Automatic Block Machine",
      category: "Block Machines",
      status: "Active",
      stock: 8,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    }
  ];

  useEffect(() => {
    const savedProducts = localStorage.getItem("nitin_products");
    if (savedProducts) {
      setProductsData(JSON.parse(savedProducts));
    } else {
      setProductsData(defaultProducts);
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader title="Our Product Catalog" currentPath="Products" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Industrial <span className="text-blue-800">Machinery</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Explore our comprehensive range of high-performance construction and industrial machinery engineered for durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100 p-6 flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {product.category}
                  </div>
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1 rounded-md shadow-sm ${product.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {product.status}
                  </div>
                  <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </div>

                <div className="p-8 flex flex-col flex-grow border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors flex-grow">
                    {product.name}
                  </h3>
                  
                  <Link 
                    href={`/our-products/${product.id}`}
                    className="w-full text-center px-6 py-3 mt-4 bg-blue-50 text-blue-800 font-bold rounded-lg group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300 border border-blue-100"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}