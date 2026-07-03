import Link from "next/link";

export default function AdminDashboard() {
  // Dummy Data for Dashboard UI
  const stats = [
    { id: 1, label: "Total Inquiries", value: "142", trend: "+12% this month", color: "text-blue-600", bg: "bg-blue-100" },
    { id: 2, label: "Active Products", value: "24", trend: "2 added this week", color: "text-emerald-600", bg: "bg-emerald-100" },
    { id: 3, label: "Website Visitors", value: "2,845", trend: "+18% this month", color: "text-purple-600", bg: "bg-purple-100" },
    { id: 4, label: "Published Blogs", value: "12", trend: "Up to date", color: "text-orange-600", bg: "bg-orange-100" }
  ];

  const recentLeads = [
    { id: "L-001", name: "Rahul Sharma", company: "Sharma Builders Pvt Ltd", product: "Brick Making Machine", date: "Today, 10:30 AM", status: "New" },
    { id: "L-002", name: "Amit Patel", company: "Patel Infra", product: "Pan Mixer 500", date: "Yesterday", status: "Contacted" },
    { id: "L-003", name: "Vikram Singh", company: "Singh Contractors", product: "Hydraulic Press", date: "01 Jul 2026", status: "New" },
    { id: "L-004", name: "Suresh Kumar", company: "Kumar Enterprises", product: "Block Machine", date: "28 Jun 2026", status: "Closed" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Here is what's happening with your website today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/products/new" className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition-colors text-sm">
            + Add Product
          </Link>
          <Link href="/admin/blogs/new" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors text-sm">
            + Write Blog
          </Link>
        </div>
      </div>

      {/* 2. Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 font-semibold text-sm">{stat.label}</h3>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.bg} ${stat.color} font-black text-lg`}>
                #
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
            <p className="text-xs font-medium text-slate-400">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* 3. Recent Leads Table Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Recent Inquiries (Leads)</h2>
          <button className="text-blue-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Lead ID</th>
                <th className="px-6 py-4 font-bold">Client Name</th>
                <th className="px-6 py-4 font-bold">Interested In</th>
                <th className="px-6 py-4 font-bold">Date</th>
                <th className="px-6 py-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">{lead.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{lead.name}</p>
                    <p className="text-xs text-slate-500">{lead.company}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{lead.product}</td>
                  <td className="px-6 py-4 text-slate-500">{lead.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'Contacted' ? 'bg-amber-100 text-amber-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}