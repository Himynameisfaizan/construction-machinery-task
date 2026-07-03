"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.id;
  
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem("nitin_products");
    let allProducts = [];
    
    if (savedProducts) {
      allProducts = JSON.parse(savedProducts);
    }

    // URL ki ID se match karne wala product dhoondo
    const currentProduct = allProducts.find(p => p.id === productId);
    setProduct(currentProduct);
    setIsLoaded(true);
  }, [productId]);

  if (!isLoaded) return null;

  // Agar product nahi mila (Deleted ya Galat URL)
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Product Not Found</h1>
        <p className="text-slate-600 mb-8">The machinery you are looking for has been removed or does not exist.</p>
        <Link href="/our-products" className="px-6 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors">
          Browse Catalog
        </Link>
      </div>
    );
  }

  // Fallback Details for newly added admin products
  const productDescription = product.description || `The ${product.name} is a high-performance machine built for rigorous industrial environments. Engineered for efficiency and durability, it offers superior quality output while keeping maintenance costs low. Perfect for scaling your manufacturing operations.`;
  
  const productFeatures = product.features || [
    "High-grade steel body for vibration resistance",
    "Low power consumption with high output yield",
    "User-friendly control panel and operations",
    "Easy maintenance and long service life"
  ];

  const productSpecs = product.specifications || [
    { label: "Category", value: product.category },
    { label: "Available Stock", value: `${product.stock} Units` },
    { label: "Operating Mode", value: "Standard / Custom" },
    { label: "Power Requirement", value: "Varies by configuration" },
    { label: "Warranty", value: "1 Year Standard Warranty" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader title="Product Details" currentPath={product.name} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: Sticky Image */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden group">
                  <div 
                    className="w-full h-[400px] bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Details */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  {product.category}
                </span>
                <span className={`inline-block ml-3 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 ${product.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {product.status} (Stock: {product.stock})
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                  {product.name}
                </h1>
                <div className="w-16 h-1 bg-blue-800 rounded-full"></div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Product Overview</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {productDescription}
                </p>
              </div>

              <div className="mb-10 bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {productFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-slate-700 font-medium">
                      <svg className="w-6 h-6 text-blue-800 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {productSpecs.map((spec, index) => (
                        <tr key={index} className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
                          <th className="py-4 px-6 bg-slate-100/50 text-slate-900 font-bold w-1/3 border-r border-slate-200">
                            {spec.label}
                          </th>
                          <td className="py-4 px-6 text-slate-600 font-medium">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact-us" 
                  className="flex-1 flex justify-center items-center px-8 py-4 bg-blue-800 text-white font-black rounded-lg shadow-lg hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300"
                >
                  Request a Quote
                </Link>
                <a 
                  href={`https://wa.me/918796265233?text=Hi, I am interested in the ${product.name} (ID: ${product.id}).`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center px-8 py-4 bg-green-500 text-white font-black rounded-lg shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Inquiry
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}