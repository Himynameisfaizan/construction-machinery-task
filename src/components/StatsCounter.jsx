export default function StatsCounter() {
  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Technical Staff", value: "50+" },
    { label: "Certifications", value: "15+" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden border-y-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 group">
              <div className="w-24 h-24 rounded-full border-2 border-blue-800 flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors duration-300 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
                <span className="text-3xl font-black text-white">{stat.value}</span>
              </div>
              <p className="text-slate-300 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}