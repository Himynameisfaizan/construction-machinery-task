import Link from "next/link";

export default function OurProductLine() {
  const products = [
    {
      id: 1,
      name: "Semi-Automatic Brick Making Machine (Techno 24)",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Fully Automatic Block Machine",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Fully Automatic Block Machine",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Product Line</h2>
          <div className="w-24 h-1.5 bg-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            As an industry-leading manufacturer, we build robust machines that guarantee efficiency, durability, and cost-effectiveness for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden bg-white">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 p-8"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <div className="p-8 text-center bg-white border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{product.name}</h3>
                <Link 
                  href="/products" 
                  className="inline-block px-8 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md"
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