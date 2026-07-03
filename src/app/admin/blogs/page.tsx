"use client";
import { useState, useEffect } from "react";

export default function AdminBlogs() {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({ 
    title: "", 
    category: "", 
    excerpt: "", 
    image: "",
    content: "" 
  });

  const defaultBlogs = [
    { 
      id: "BLG-01", 
      title: "How Hydraulic Press Machines Are Revolutionizing Manufacturing", 
      category: "Technology", 
      date: "Jul 02, 2026",
      excerpt: "Discover the latest advancements in hydraulic technology and how they are increasing efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Full article content goes here..."
    },
    { 
      id: "BLG-02", 
      title: "Fly Ash Bricks vs. Traditional Clay Bricks: Which is Better?", 
      category: "Construction", 
      date: "Jun 28, 2026",
      excerpt: "A comprehensive comparison between fly ash bricks and traditional red bricks analyzing cost and strength.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Full article content goes here..."
    },
  ];

  useEffect(() => {
    const savedBlogs = localStorage.getItem("nitin_blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(defaultBlogs);
      localStorage.setItem("nitin_blogs", JSON.stringify(defaultBlogs));
    }
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aaj ki date auto-generate karna (Format: Jul 03, 2026)
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    let updatedBlogs;

    if (editingId) {
      updatedBlogs = blogs.map(b => 
        b.id === editingId ? { 
          ...b, 
          title: formData.title, 
          category: formData.category, 
          excerpt: formData.excerpt,
          content: formData.content,
          image: formData.image || "https://images.unsplash.com/photo-1580983546594-52643a3db100?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        } : b
      );
    } else {
      const newBlog = {
        id: `BLG-0${blogs.length + 1}`,
        title: formData.title,
        category: formData.category,
        date: today,
        excerpt: formData.excerpt,
        content: formData.content,
        image: formData.image || "https://images.unsplash.com/photo-1580983546594-52643a3db100?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      };
      updatedBlogs = [newBlog, ...blogs];
    }
    
    setBlogs(updatedBlogs);
    localStorage.setItem("nitin_blogs", JSON.stringify(updatedBlogs)); 
    resetForm();
  };

  const handleEdit = (blog) => {
    setFormData({ title: blog.title, category: blog.category, excerpt: blog.excerpt, image: blog.image, content: blog.content });
    setEditingId(blog.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this article?")) {
      const updatedBlogs = blogs.filter(b => b.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem("nitin_blogs", JSON.stringify(updatedBlogs));
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", category: "", excerpt: "", image: "", content: "" });
  };

  if (!isLoaded) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Manage Articles</h1>
        </div>
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700"
          >
            + Write New Article
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">{editingId ? "Edit Article" : "Draft New Article"}</h2>
            <button onClick={resetForm} className="text-slate-400 hover:text-red-500">✖</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Article Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Category *</label>
                <input type="text" required placeholder="e.g. Technology, Maintenance" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Cover Image URL</label>
                <input type="url" placeholder="https://..." value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Short Excerpt (Summary) *</label>
                <textarea required rows={2} value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Content *</label>
                <textarea required rows={6} value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={resetForm} className="px-6 py-2.5 bg-slate-100 font-bold rounded-lg hover:bg-slate-200">Cancel</button>
              <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">{editingId ? "Update Article" : "Publish Article"}</button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase border-b">
                <th className="px-6 py-4 font-bold">Cover</th>
                <th className="px-6 py-4 font-bold">Article Details</th>
                <th className="px-6 py-4 font-bold">Date Published</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50 group">
                  <td className="px-6 py-4">
                    <img src={blog.image} alt={blog.title} className="w-16 h-12 rounded object-cover border" />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 line-clamp-1">{blog.title}</p>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded mt-1 inline-block">{blog.category}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-600">{blog.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(blog)} className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-700">Delete</button>
                    </div>
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