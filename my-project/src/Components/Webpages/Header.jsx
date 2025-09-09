import { Phone, Mail, Globe, Facebook, Instagram, Twitter, Linkedin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // using react-icons for WhatsApp

function Header() {
  return (
    <div className="hidden md:block fixed top-0 w-full bg-[#0C3C66] text-white text-sm z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <PhoneCall size={16} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>support@docudost.com</span>
          </div>
        </div>

        {/* Right: Social + Language + Help */}
        <div className="flex items-center gap-5">
          {/* Social Media */}
          <div className="flex items-center gap-3 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F47C20] transition">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F47C20] transition">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F47C20] transition">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F47C20] transition">
              <Linkedin size={16} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition">
              <FaWhatsapp size={16} />
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#F47C20] transition">
            <Globe size={16} />
            <span>EN</span>
          </div>

          {/* Help */}
          <a
            href="/help"
            className="hover:text-[#F47C20] transition font-medium"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
