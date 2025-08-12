import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* One row, four columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1 */}
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center">
              <FaUserTie className="mr-2" />
              Dev Hub Solutions
            </h1>
            <p className="text-gray-200">
              Manifesting The Technology For Your Future. Committed to meet 
              deadlines, our deep software engineering and product expertise 
              offer the best solutions to your business needs.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>2 Gainsborough Road, London, E11 1HT, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@devhubsol.com" className="hover:underline">info@devhubsol.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+447532610367" className="hover:underline">+44 75 32610367</a>
              </div>

              {/* Social Media Buttons */}
              <div className="flex space-x-4 mt-4">
                <button className="hover:text-gray-300" aria-label="Facebook">
                  <Facebook size={22} />
                </button>
                <button className="hover:text-gray-300" aria-label="Twitter">
                  <Twitter size={22} />
                </button>
                <button className="hover:text-gray-300" aria-label="Instagram">
                  <Instagram size={22} />
                </button>
                <button className="hover:text-gray-300" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition">About</a></li>
              <li><a href="/services" className="hover:text-gray-300 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-gray-300 transition">Blog</a></li>
              <li><a href="/faq" className="hover:text-gray-300 transition">FAQ</a></li>
              <li><a href="/support" className="hover:text-gray-300 transition">Support</a></li>
              <li><a href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
