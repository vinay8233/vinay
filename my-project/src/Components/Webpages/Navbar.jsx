// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // icons

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = ["Home", "About", "Contact", "E-Visa", "Passport", "Services"];

//   return (
//     <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <img src="Docudost Logo PNG.png" alt="" />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-lg font-medium">
//           {menuItems.map((item) => (
//             <li key={item}>
//               <a
//                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="hover:text-yellow-400 transition duration-300 relative group"
//               >
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <button className="hidden md:block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
//           Help
//         </button>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none transition-transform duration-300"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-blue-800 border-t border-blue-700 px-6 pb-6 space-y-4 text-lg font-medium shadow-inner animate-slideDown">
//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="block hover:text-yellow-400 transition duration-300"
//               onClick={() => setIsOpen(false)} // close menu on click
//             >
//               {item}
//             </a>
//           ))}
//           <button className="w-full bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
//             Help
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // for desktop hover
  const [mobileDropdown, setMobileDropdown] = useState(null); // for mobile click

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    
    
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav
  className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md
    top-0 sm:top-8
    ${isScrolled ? "bg-white/95 shadow-md py-2" : "bg-white py-4"}
  `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 transition-all duration-300">
        {/* Logo */}
        <div className="h-12 flex items-center">
          <img
            src="Docudost_Logo_PNG-removebg-preview.png"
            alt="DocuDost Logo"
            className="w-40 md:w-48 lg:w-52 h-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Menu (only from lg and above) */}
        <ul className="hidden lg:flex space-x-8 xl:space-x-10 text-[15px] xl:text-[16px] font-medium tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.link || "#"}
                className="flex items-center gap-1 relative text-[#0C3C66] hover:text-[#F47C20] transition duration-300"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F47C20] transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Dropdown Menu (Desktop) */}
              {item.dropdown && activeDropdown === item.name && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 transition-all duration-300">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.link}
                        className="block px-4 py-2 text-[#0C3C66] hover:bg-[#F47C20] hover:text-white transition duration-300"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Login/Register Buttons */}
        <div className="hidden lg:flex gap-4">
          <a
            href="/login"
            className="px-6 py-2 rounded-full font-semibold text-[#0C3C66] border border-[#0C3C66] hover:bg-[#0C3C66] hover:text-white transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-2 rounded-full font-semibold bg-[#F47C20] text-white hover:bg-[#d8660f] transition-all duration-300"
          >
            Register
          </a>
        </div>

        {/* Hamburger (Mobile + Tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#0C3C66] focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 border-t border-gray-200 px-6 pb-6 space-y-4 text-base font-medium shadow-inner animate-slideDown">
          {menuItems.map((item) => (
            <div key={item.name} className="space-y-2">
              <button
                onClick={() =>
                  item.dropdown
                    ? setMobileDropdown(
                        mobileDropdown === item.name ? null : item.name
                      )
                    : setIsOpen(false)
                }
                className="flex justify-between items-center w-full text-[#0C3C66] hover:text-[#F47C20] transition duration-300"
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu (Mobile + Tablet) */}
              {item.dropdown && mobileDropdown === item.name && (
                <div className="pl-4 space-y-2 animate-slideDown">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.link}
                      className="block text-sm text-gray-700 hover:text-[#F47C20] transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login/Register Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/login"
              className="px-6 py-2 rounded-full font-semibold text-[#0C3C66] border border-[#0C3C66] hover:bg-[#0C3C66] hover:text-white transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href="/register"
              className="px-6 py-2 rounded-full font-semibold bg-[#F47C20] text-white hover:bg-[#d8660f] transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
