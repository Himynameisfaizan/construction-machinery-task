"use client";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  status: string;
  stock: string | number;
  image?: string;
}

export default function AdminProducts() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Naya State Edit track karne ke liye
  const [editingId, setEditingId] = useState(null);
  
  // Image URL field add kar diya
  const [formData, setFormData] = useState({ name: "", category: "", stock: "", image: "" });

  const defaultProducts = [
    { id: "PRD-01", name: "Semi-Automatic Brick Making Machine", category: "Brick Machines", status: "Active", stock: 15, image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { id: "PRD-02", name: "Fully Automatic Block Machine", category: "Block Machines", status: "Active", stock: 8, image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  ];

  useEffect(() => {
    const savedProducts = localStorage.getItem("nitin_products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem("nitin_products", JSON.stringify(defaultProducts));
    }
    setIsLoaded(true);
  }, []);

  // Form Submit (ADD or EDIT dono handle karega)
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProducts;

    if (editingId) {
      // EDIT LOGIC
      updatedProducts = products.map(p => 
        p.id === editingId ? { 
          ...p, 
          name: formData.name, 
          category: formData.category, 
          stock: formData.stock,
          status: Number(formData.stock) > 0 ? "Active" : "Out of Stock",
          image: formData.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        } : p
      );
    } else {
      // ADD LOGIC
      const newProduct = {
        id: `PRD-0${products.length + 1}`,
        name: formData.name,
        category: formData.category,
        status: Number(formData.stock) > 0 ? "Active" : "Out of Stock",
        stock: formData.stock,
        image: formData.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      };
      updatedProducts = [newProduct, ...products];
    }
    
    setProducts(updatedProducts);
    localStorage.setItem("nitin_products", JSON.stringify(updatedProducts)); 
    
    resetForm();
  };

  // EDIT Button Click
  const handleEdit = (product) => {
    setFormData({ name: product.name, category: product.category, stock: product.stock, image: product.image });
    setEditingId(product.id);
    setShowForm(true);
  };

  // DELETE Button Click
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem("nitin_products", JSON.stringify(updatedProducts));
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", category: "", stock: "", image: "" });
  };

  if (!isLoaded) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Manage Products</h1>
        </div>
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700"
          >
            + Add New Product
          </button>
        )}
      </div>

      {/* Form (Add / Edit) */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">{editingId ? "Edit Product" : "Add New Machinery"}</h2>
            <button onClick={resetForm} className="text-slate-400 hover:text-red-500">✖</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Product Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Category *</label>
                <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
                  <option value="">Select Category</option>
                  <option value="Brick Machines">Brick Machines</option>
                  <option value="Block Machines">Block Machines</option>
                  <option value="Mixing Equipment">Mixing Equipment</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Stock Quantity *</label>
                <input type="number" required value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Image URL</label>
                <input type="url" placeholder="https://..." value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={resetForm} className="px-6 py-2.5 bg-slate-100 font-bold rounded-lg hover:bg-slate-200">Cancel</button>
              <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">{editingId ? "Update Product" : "Save Product"}</button>
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
                <th className="px-6 py-4 font-bold">Image</th>
                <th className="px-6 py-4 font-bold">Product Details</th>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Stock</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 group">
                  <td className="px-6 py-4">
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover border" />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{product.name}</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">{product.id}</p>
                  </td>
                  <td className="px-6 py-4 font-medium">{product.category}</td>
                  <td className="px-6 py-4 font-semibold">{product.stock} Units</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700">Delete</button>
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