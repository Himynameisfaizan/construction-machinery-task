import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="bg-blue-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Need Bricks And Blocks Making Machinery Solutions?
            </h2>
            <p className="text-blue-200 text-lg">We Are Available For You 24/7.</p>
          </div>
          <Link 
            href="/contact-us" 
            className="shrink-0 px-8 py-4 bg-white text-blue-800 font-black rounded-lg shadow-lg hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}