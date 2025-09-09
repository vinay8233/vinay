import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageSEO() {
  const [pages, setPages] = useState([]); // dynamic pages from backend
  const [page, setPage] = useState("home");
  const [seo, setSeo] = useState({ title: "", description: "", keywords: "", ogImage: "" });

  // Fetch available pages
  useEffect(() => {
    axios.get("http://localhost:5000/api/seo").then(res => {
      if (res.data.length > 0) {
        setPages(res.data.map(p => p.page));
      } else {
        setPages(["home", "about", "services", "contact"]); // fallback
      }
    });
  }, []);

  // Fetch SEO data when page changes
  useEffect(() => {
    if (!page) return;
    axios.get(`http://localhost:5000/api/seo/${page}`).then(res => {
      if (res.data) setSeo(res.data);
      else setSeo({ title: "", description: "", keywords: "", ogImage: "" });
    });
  }, [page]);

  // Handle Save
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/seo/${page}`, seo);
    alert(`SEO updated successfully for ${page} page!`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">SEO Settings</h2>

      {/* Page Selector */}
      <label className="block mb-2 font-semibold">Select Page</label>
      <select
        value={page}
        onChange={(e) => setPage(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      >
        {pages.map((p, i) => (
          <option key={i} value={p}>{p}</option>
        ))}
      </select>

      {/* SEO Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meta Title"
          value={seo.title || ""}
          onChange={(e) => setSeo({ ...seo, title: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <textarea
          placeholder="Meta Description"
          value={seo.description || ""}
          onChange={(e) => setSeo({ ...seo, description: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Keywords (comma separated)"
          value={seo.keywords || ""}
          onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="text"
          placeholder="OG Image URL"
          value={seo.ogImage || ""}
          onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save SEO
        </button>
      </form>
    </div>
  );
}
