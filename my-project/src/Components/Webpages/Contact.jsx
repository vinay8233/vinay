// import {
//   Phone,
//   Mail,
//   MessageCircle,
//   Facebook,
//   Instagram,
//   MapPin,
//   Clock,
//   Headset,
// } from "lucide-react";
// import { motion } from "framer-motion";

// function Contact() {
//   const contactMethods = [
//     {
//       icon: <Phone className="w-7 h-7 text-white" />,
//       title: "Call Us",
//       text: "+91 98765 43210",
//       color: "from-yellow-400 to-orange-500",
//     },
//     {
//       icon: <Mail className="w-7 h-7 text-white" />,
//       title: "Email Us",
//       text: "support@visaservices.com",
//       color: "from-blue-500 to-indigo-600",
//     },
//     {
//       icon: <MessageCircle className="w-7 h-7 text-white" />,
//       title: "WhatsApp",
//       text: "Chat with us",
//       link: "https://wa.me/919876543210",
//       color: "from-green-400 to-green-600",
//     },
//     {
//       icon: <Facebook className="w-7 h-7 text-white" />,
//       title: "Facebook",
//       text: "Follow us",
//       link: "https://facebook.com",
//       color: "from-blue-600 to-blue-800",
//     },
//     {
//       icon: <Instagram className="w-7 h-7 text-white" />,
//       title: "Instagram",
//       text: "Follow us",
//       link: "https://instagram.com",
//       color: "from-pink-400 to-pink-600",
//     },
//   ];

//   return (
//     <div className="mt-16">
//       {/* HERO SECTION */}
//       <section className="relative h-[250px]">
//         <img
//           src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
//           alt="Contact Us"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//             Contact <span className="text-yellow-400">Us</span>
//           </h1>
//         </div>
//       </section>

//       {/* CONTACT CARDS */}
//       <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
//   {/* Background Decoration */}
//   <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-blue-100/20 to-transparent blur-3xl opacity-40"></div>

//   <h2 className="relative text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
//     Get in Touch
//   </h2>

//   <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-10 z-10">
//     {contactMethods.map((item, i) => (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: i * 0.15 }}
//         whileHover={{ scale: 1.07 }}
//         className="group bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl relative overflow-hidden"
//       >
//         {/* Glow Effect */}
//         <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-200/30 to-blue-200/30 blur-2xl"></div>

//         <div
//           className={`relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-md mb-5 group-hover:scale-110 transition-transform`}
//         >
//           {item.icon}
//         </div>

//         <h3 className="relative text-xl font-semibold text-blue-900 mb-2">
//           {item.title}
//         </h3>

//         {item.link ? (
//           <a
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative text-gray-700 hover:text-blue-900 hover:underline transition"
//           >
//             {item.text}
//           </a>
//         ) : (
//           <p className="relative text-gray-700">{item.text}</p>
//         )}

//         {/* Extra Subtext */}
//         <p className="relative text-sm text-gray-500 mt-2">
//           {item.subtext || "Available 24/7 for your assistance"}
//         </p>
//       </motion.div>
//     ))}
//   </div>
// </section>


//       {/* CONTACT FORM */}
//       <section className="py-16 px-6 md:px-20 bg-white">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-10 border-t-4 border-yellow-400"
//         >
//           <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
//             Send Us a Message
//           </h3>
//           <form className="space-y-5">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       {/* EXTRA INFO */}
//       <section className="py-16 px-6 md:px-20 bg-gray-50">
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               icon: <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
//               title: "Our Office",
//               text: "Jaipur, Rajasthan, India",
//             },
//             {
//               icon: <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
//               title: "Working Hours",
//               text: "Mon - Sat: 9:00 AM - 7:00 PM",
//             },
//             {
//               icon: <Headset className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
//               title: "24/7 Support",
//               text: "Always available for urgent needs",
//             },
//           ].map((info, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
//             >
//               {info.icon}
//               <h4 className="text-lg font-semibold text-blue-900 mb-1">
//                 {info.title}
//               </h4>
//               <p className="text-gray-600">{info.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* GOOGLE MAP */}
//       <section className="h-[400px]">
//         <iframe
//           title="office-location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.199115511903!2d75.7872703745678!3d26.912433776671915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b8ab5b8b13%3A0xdeb6f9dc3d1e9e5!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1693679915931!5m2!1sen!2sin"
//           className="w-full h-full border-0"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-4"
//         >
//           We’re Just a Message Away
//         </motion.h2>
//         <p className="mb-6 text-lg">
//           Reach us anytime for visa & passport assistance.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-2xl transition"
//         >
//           Start Chat
//         </motion.button>
//       </section>
//     </div>
//   );
// }

// export default Contact;




import { useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  MapPin,
  Clock,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/createContact",
        formData
      );
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-7 h-7 text-white" />,
      title: "Call Us",
      text: "+919001043218",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Mail className="w-7 h-7 text-white" />,
      title: "Email Us",
      text: "support@docudost.com",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-white" />,
      title: "WhatsApp",
      text: "Chat with us",
      link: "https://wa.me/+919001043218",
      color: "from-green-400 to-green-600",
    },
    
    {
      icon: <Instagram className="w-7 h-7 text-white" />,
      title: "Instagram",
      text: "Follow us",
      link: "https://www.instagram.com/docudost_/",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <div className="mt-16">
      {/* HERO SECTION */}
      <section className="relative h-[250px]">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-blue-100/20 to-transparent blur-3xl opacity-40"></div>
        <h2 className="relative text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
          Get in Touch
        </h2>
        <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-10 z-10">
          {contactMethods.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.07 }}
              className="group bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-200/30 to-blue-200/30 blur-2xl"></div>
              <div
                className={`relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-md mb-5 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="relative text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 hover:text-blue-900 hover:underline transition"
                >
                  {item.text}
                </a>
              ) : (
                <p className="relative text-gray-700">{item.text}</p>
              )}
              <p className="relative text-sm text-gray-500 mt-2">
                {item.subtext || "Available 24/7 for your assistance"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-10 border-t-4 border-yellow-400"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Send Us a Message</h3>

          {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>

      {/* EXTRA INFO */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />, title: "Our Office", text: "Jaipur, Rajasthan, India" },
            { icon: <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 7:00 PM" },
            { icon: <Headset className="w-8 h-8 text-yellow-500 mx-auto mb-3" />, title: "24/7 Support", text: "Always available for urgent needs" },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              {info.icon}
              <h4 className="text-lg font-semibold text-blue-900 mb-1">{info.title}</h4>
              <p className="text-gray-600">{info.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="h-[400px]">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.199115511903!2d75.7872703745678!3d26.912433776671915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b8ab5b8b13%3A0xdeb6f9dc3d1e9e5!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1693679915931!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          We’re Just a Message Away
        </motion.h2>
        <p className="mb-6 text-lg">Reach us anytime for visa & passport assistance.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-2xl transition"
        >
          Start Chat
        </motion.button>
      </section>
    </div>
  );
}

export default Contact;

