import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">My Website</h1>

        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/">Home</Link></li>
          <li className="relative group">
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
            <li>
              <Link
                to="/services/web-development"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/ui-ux-design"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link
                to="/services/seo"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                SEO Optimization
              </Link>
            </li>
          </ul>
        </li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Signup
            </Link>
          </li>
        </ul>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md z-50 relative">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="block text-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
