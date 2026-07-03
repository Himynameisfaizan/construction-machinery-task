"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: "📊" },
    { name: "Products", path: "/admin/products", icon: "⚙️" },
    { name: "Blogs", path: "/admin/blogs", icon: "🔧" },
    { name: "Inquiries (Leads)", path: "/admin/inquiries", icon: "📩" },
  ];

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      
      {/* 1. Sidebar (Left Side) */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-2xl">
        <div className="h-20 flex items-center justify-center border-b border-slate-800">
          <span className="text-xl font-black tracking-wider text-white">
            NITIN <span className="text-blue-500">ADMIN</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === item.path
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-semibold">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button at bottom */}
        <div className="p-4 border-t border-slate-800">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all font-semibold"
          >
            <span>🚪</span> Back to Website
          </Link>
        </div>
      </aside>

      {/* 2. Main Content Area (Right Side) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Admin Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Welcome, Admin
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              🔔
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold border border-blue-200">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content (Yahan admin ke pages load honge) */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
          {children}
        </main>
        
      </div>
      
    </div>
  );
}