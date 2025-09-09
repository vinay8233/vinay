import { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, PlusCircle, X } from "lucide-react";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    tags: "",
    status: "draft",
    image: null,
    gallery: [],
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data.blogs || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      if (name === "image") {
        const file = files[0];
        if (file && file.type.startsWith("image/")) {
          setForm(prev => ({ ...prev, image: file }));
          setPreviewImage(URL.createObjectURL(file));
        } else {
          alert("Please select a valid image file");
        }
      }

      if (name === "gallery") {
        const fileArray = Array.from(files).filter(f => f.type.startsWith("image/"));
        setForm(prev => ({ ...prev, gallery: fileArray }));
        setPreviewGallery(fileArray.map(f => URL.createObjectURL(f)));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.content || !form.category) {
      alert("Title, description, content, and category are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("tags", form.tags);
    formData.append("status", form.status);

    if (form.image instanceof File) formData.append("image", form.image);
    form.gallery.forEach(f => {
      if (f instanceof File) formData.append("gallery", f);
    });

    const seo = {
      metaTitle: form.metaTitle,
      metaDescription: form.metaDescription,
      keywords: form.keywords.split(",").map(k => k.trim()),
    };
    formData.append("seo", JSON.stringify(seo));

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/blogs/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:5000/api/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({
        title: "", description: "", content: "", category: "", tags: "",
        status: "draft", image: null, gallery: [], metaTitle: "", metaDescription: "", keywords: ""
      });
      setPreviewImage(null);
      setPreviewGallery([]);
      setEditingId(null);
      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      content: blog.content || "",
      category: blog.category || "",
      tags: blog.tags ? blog.tags.join(", ") : "",
      status: blog.status || "draft",
      image: null,
      gallery: [],
      metaTitle: blog.seo?.metaTitle || "",
      metaDescription: blog.seo?.metaDescription || "",
      keywords: blog.seo?.keywords ? blog.seo.keywords.join(", ") : "",
    });
    setEditingId(blog._id);
    setPreviewImage(blog.image ? `http://localhost:5000${blog.image}` : null);
    setPreviewGallery(blog.gallery?.map(img => `http://localhost:5000${img}`) || []);
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4" encType="multipart/form-data">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Blog" : "Create Blog"}</h2>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="w-full p-2 border rounded" rows="5" required />
        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" required />
        <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="w-full p-2 border rounded" />

        <input type="file" name="image" onChange={handleChange} accept="image/*" className="w-full p-2 border rounded" />
        {previewImage && <img src={previewImage} alt="Preview" className="w-32 h-20 object-cover my-2 border" />}

        <input type="file" name="gallery" onChange={handleChange} accept="image/*" multiple className="w-full p-2 border rounded" />
        {previewGallery.length > 0 && previewGallery.map((img, i) => <img key={i} src={img} alt="Gallery" className="w-24 h-16 object-cover m-1 border" />)}

        <input type="text" name="metaTitle" value={form.metaTitle} onChange={handleChange} placeholder="SEO Meta Title" className="w-full p-2 border rounded" />
        <input type="text" name="metaDescription" value={form.metaDescription} onChange={handleChange} placeholder="SEO Meta Description" className="w-full p-2 border rounded" />
        <input type="text" name="keywords" value={form.keywords} onChange={handleChange} placeholder="SEO Keywords" className="w-full p-2 border rounded" />

        <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <PlusCircle size={18} /> {editingId ? "Update Blog" : "Create Blog"}
        </button>
      </form>

      {/* Blog Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Likes</th>
              <th className="p-2 border">Views</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBlog(blog)}>
                <td className="p-2 border">{blog.title}</td>
                <td className="p-2 border">{blog.category}</td>
                <td className="p-2 border capitalize">{blog.status}</td>
                <td className="p-2 border">{blog.likes}</td>
                <td className="p-2 border">{blog.views}</td>
                <td className="p-2 border flex gap-2">
                  <button onClick={e => { e.stopPropagation(); handleEdit(blog); }} className="text-blue-600 hover:underline flex gap-1"><Pencil size={16}/>Edit</button>
                  <button onClick={e => { e.stopPropagation(); handleDelete(blog._id); }} className="text-red-600 hover:underline flex gap-1"><Trash2 size={16}/>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 overflow-auto py-8">
          <div className="bg-white w-11/12 md:w-4/5 lg:w-3/4 p-6 rounded-lg shadow-xl relative">
            <button onClick={() => setSelectedBlog(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black"><X size={28}/></button>
            <article className="space-y-6">
              <h1 className="text-4xl font-bold">{selectedBlog.title}</h1>
              <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4">
                <span className="capitalize bg-blue-100 text-blue-800 px-2 py-1 rounded">{selectedBlog.category}</span>
                <span className={`capitalize ${selectedBlog.status === 'published' ? 'text-green-600' : 'text-yellow-600'}`}>{selectedBlog.status}</span>
                <span>Likes: {selectedBlog.likes}</span>
                <span>Views: {selectedBlog.views}</span>
              </div>
              {selectedBlog.image && <img src={`http://localhost:5000${selectedBlog.image}`} alt="Main" className="w-full h-96 object-cover rounded shadow-md cursor-zoom-in" onClick={() => window.open(`http://localhost:5000${selectedBlog.image}`, "_blank")}/>}
              <div className="prose max-w-full mt-4" dangerouslySetInnerHTML={{ __html: selectedBlog.content }}></div>

              {selectedBlog.gallery?.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedBlog.gallery.map((img, i) => (
                      <img key={i} src={`http://localhost:5000${img}`} alt={`Gallery ${i}`} className="w-full h-40 object-cover rounded shadow hover:scale-105 transition-transform cursor-zoom-in" onClick={() => window.open(`http://localhost:5000${img}`, "_blank")} />
                    ))}
                  </div>
                </section>
              )}

              {selectedBlog.tags?.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Tags</h2>
                  <div className="flex flex-wrap gap-2">{selectedBlog.tags.map((tag, i) => <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tag}</span>)}</div>
                </section>
              )}

              {selectedBlog.seo && (
                <section className="mt-6 bg-gray-50 p-4 rounded shadow-sm">
                  <h2 className="text-lg font-semibold mb-2">SEO Info</h2>
                  <p><strong>Meta Title:</strong> {selectedBlog.seo.metaTitle || "-"}</p>
                  <p><strong>Meta Description:</strong> {selectedBlog.seo.metaDescription || "-"}</p>
                  <p><strong>Keywords:</strong> {selectedBlog.seo.keywords?.join(", ") || "-"}</p>
                </section>
              )}
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
