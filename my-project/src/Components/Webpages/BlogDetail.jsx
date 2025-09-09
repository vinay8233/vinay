// // pages/BlogDetail.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function BlogDetail() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/blogs/${slug}`)
//       .then((res) => setBlog(res.data.data))
//       .catch((err) => console.error(err));
//   }, [slug]);

//   if (!blog) {
//     return <p className="text-center text-gray-500 mt-20">Loading...</p>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-5">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-72 object-cover"
//         />
//         <div className="p-8">
//           <h1 className="text-4xl font-bold text-blue-800 mb-4">{blog.title}</h1>
//           <div className="flex justify-between text-sm text-gray-500 mb-6">
//             <span>✍️ {blog.author}</span>
//             <span>📅 {new Date(blog.date).toLocaleDateString()}</span>
//             <span>👁️ {blog.views} Views</span>
//           </div>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             {blog.content}
//           </p>

//           {/* Tags */}
//           <div className="mb-6">
//             {blog.tags?.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* Gallery */}
//           {blog.gallery?.length > 0 && (
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               {blog.gallery.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`Gallery ${idx}`}
//                   className="rounded-lg shadow"
//                 />
//               ))}
//             </div>
//           )}

//           {/* Comments */}
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
//           {blog.comments?.length > 0 ? (
//             <div className="space-y-4">
//               {blog.comments.map((c, idx) => (
//                 <div key={idx} className="bg-gray-50 p-4 rounded-lg">
//                   <p className="font-semibold">{c.user}</p>
//                   <p className="text-gray-600">{c.message}</p>
//                   <span className="text-xs text-gray-400">
//                     {new Date(c.date).toLocaleDateString()}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No comments yet.</p>
//           )}

//           {/* Back Button */}
//           <div className="mt-8">
//             <Link
//               to="/blogs"
//               className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
//             >
//               ← Back to Blogs
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogDetail;


// pages/BlogDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${slug}`)
      .then((res) => setBlog(res.data.blog)) // ✅ backend returns blog, not data
      .catch((err) => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) {
    return <p className="text-center text-gray-500 mt-20">Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Blog Main Image */}
        {blog.image && (
          <img
            src={`http://localhost:5000${blog.image}`} // ✅ ensure correct server path
            alt={blog.title}
            className="w-full h-72 object-cover"
          />
        )}

        <div className="p-8">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            {blog.title}
          </h1>

          {/* Blog Meta Info */}
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>✍️ {blog.author || "Admin"}</span>
            <span>
              📅{" "}
              {new Date(blog.createdAt || blog.date).toLocaleDateString()}
            </span>
            <span>👁️ {blog.views || 0} Views</span>
          </div>

          {/* Blog Content */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {blog.content}
          </p>

          {/* Tags */}
          {blog.tags?.length > 0 && (
            <div className="mb-6">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Gallery */}
          {blog.gallery?.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {blog.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:5000${img}`} // ✅ serve from backend
                  alt={`Gallery ${idx}`}
                  className="rounded-lg shadow"
                />
              ))}
            </div>
          )}

          {/* Comments */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Comments
          </h2>
          {blog.comments?.length > 0 ? (
            <div className="space-y-4">
              {blog.comments.map((c, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{c.user}</p>
                  <p className="text-gray-600">{c.message}</p>
                  <span className="text-xs text-gray-400">
                    {new Date(c.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          {/* Back Button */}
          <div className="mt-8">
            <Link
              to="/blog"
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

