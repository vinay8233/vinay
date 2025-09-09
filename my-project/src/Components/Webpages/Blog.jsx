// // pages/Blogs.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/blogs")
//       .then((res) => setBlogs(res.data.blogs || []))
//       .catch((err) => console.error("Error fetching blogs:", err));
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-5">
//       <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
//         My Blog
//       </h1>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {blogs.map((blog) => (
//           <Link
//             key={blog._id}
//             to={`/blogs/${blog.slug}`} // ✅ use slug instead of id/title
//           >
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                   {blog.title}
//                 </h2>
//                 <p className="text-gray-600 mb-4 line-clamp-3">
//                   {blog.description}
//                 </p>
//                 <div className="flex justify-between items-center text-sm text-gray-500">
//                   <span>✍️ {blog.author}</span>
//                   <span>
//                     📅 {new Date(blog.date).toLocaleDateString("en-US")}
//                   </span>
//                 </div>
//                 <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;


// pages/Blogs.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data.blogs || []))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        My Blog
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <Link key={blog._id} to={`/blogs/${blog.slug}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              {blog.image && (
          <img
            src={`http://localhost:5000${blog.image}`} // ✅ ensure correct server path
            alt={blog.title}
            className="w-full h-72 object-cover"
          />
        )}

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>✍️ {blog.author || "Unknown"}</span>
                  <span>
                    📅{" "}
                    {blog.date
                      ? new Date(blog.date).toLocaleDateString("en-US")
                      : "N/A"}
                  </span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
