// import {
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUp,
// } from "lucide-react";

// function Footer() {
//   return (
//     <footer id="top" className="relative text-white mt-0 overflow-hidden">
     

      

//       {/* Footer Content */}
//       <div className="relative bg-gradient-to-br from-blue-800 via-blue-800 to-blue-900 pt-3">
//         <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-4 sm:grid-cols-2 gap-12 pb-16">
//           {/* Brand Info */}
//           <div>
//             <h2 className="text-2xl font-extrabold tracking-wide text-yellow-400 mb-4">
//               Visa Services
//             </h2>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Hassle-free visa & passport solutions for smooth and secure travel
//               journeys.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-gray-300">
//               {["Home", "About", "Services", "Contact"].map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={`/${link.toLowerCase()}`}
//                     className="relative inline-block group"
//                   >
//                     <span className="transition group-hover:text-yellow-400">
//                       {link}
//                     </span>
//                     <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
//               Contact
//             </h3>
//             <ul className="space-y-3 text-gray-300 text-sm">
//               <li className="flex items-center gap-2">
//                 <Phone size={18} className="text-yellow-400" /> +91 98765 43210
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail size={18} className="text-yellow-400" />{" "}
//                 support@visaservices.com
//               </li>
//               <li className="flex items-center gap-2">
//                 <MapPin size={18} className="text-yellow-400" /> Jaipur,
//                 Rajasthan, India
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
//               Follow Us
//             </h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 hover:scale-110 transition"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a
//                 href="https://wa.me/919876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 hover:scale-110 transition"
//               >
//                 <MessageCircle size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 text-center text-gray-400 text-sm py-6">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-yellow-400">Visa Services</span>. All Rights
//           Reserved.
//         </div>

//         {/* Back to Top Button */}
//         <a
//           href="#top"
//           className="absolute right-6 bottom-6 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 shadow-lg hover:bg-yellow-500 hover:shadow-xl transition transform hover:-translate-y-1"
//         >
//           <ArrowUp size={22} />
//         </a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;






import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import Logo from "../../assets/logo.png"; // update with your logo path

function Footer() {
  return (
    <footer
      id="top"
      className="relative text-white overflow-hidden bg-gradient-to-br from-[#0C3C66] via-[#092847] to-[#061a2f]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 md:px-20 grid md:grid-cols-5 sm:grid-cols-2 gap-12 pt-20 pb-28">
        {/* Brand Info with Logo */}
        <div className="space-y-4 col-span-2">
          <img
            src={Logo}
            alt="Docudost Logo"
            className="w-44 animate-float drop-shadow-lg"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            🌍 Trusted hands for global papers.  
            Hassle-free <span className="text-yellow-400">Visa</span> &{" "}
            <span className="text-yellow-400">Passport</span> solutions for a
            secure travel journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {["Home", "About", "Services", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="relative inline-block group"
                >
                  <span className="transition-all duration-300 group-hover:text-yellow-400">
                    {link}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
            Resources
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-yellow-400 transition">Privacy Policy</li>
            <li className="hover:text-yellow-400 transition">Terms of Service</li>
            <li className="hover:text-yellow-400 transition">FAQs</li>
            <li className="hover:text-yellow-400 transition">Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-yellow-400">
            Stay Updated
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe to our newsletter for visa updates & travel tips.
          </p>
          <form className="flex bg-white/10 rounded-lg overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent text-sm text-white outline-none placeholder-gray-400"
            />
            <button className="px-4 py-2 bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media + Bottom Bar */}
      <div className="relative border-t border-gray-700 px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Icons */}
        <div className="flex space-x-4">
          {[
            { icon: <Facebook size={20} />, link: "https://facebook.com" },
            { icon: <Instagram size={20} />, link: "https://instagram.com" },
            {
              icon: <MessageCircle size={20} />,
              link: "https://wa.me/919876543210",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-blue-900 hover:scale-110 transition-all shadow-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Docudost</span>. All
          Rights Reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="absolute right-6 bottom-6 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition transform hover:-translate-y-1 animate-bounce"
      >
        <ArrowUp size={22} />
      </a>

      {/* Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
