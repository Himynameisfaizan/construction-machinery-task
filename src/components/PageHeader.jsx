import Link from "next/link";

export default function PageHeader({ title, currentPath }) {
  return (
    <section 
      className="relative py-24 bg-slate-900 bg-center bg-cover"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Dynamic Title */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
          {title}
        </h1>
        
        {/* Dynamic Breadcrumbs */}
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
          <Link href="/" className="text-blue-400 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          {/* Current Page Name */}
          <span className="text-slate-200">{currentPath}</span>
        </div>
      </div>
    </section>
  );
}