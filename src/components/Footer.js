import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-4">My Website</h2>
            <p className="text-gray-200 text-sm">
              Building modern websites with React and Tailwind CSS.  
              Let's make something great together!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition">About</a></li>
              <li><a href="/services" className="hover:text-gray-300 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <button className="hover:text-gray-300"><Facebook size={22} /></button>
                <button className="hover:text-gray-300"><Twitter size={22} /></button>
                <button className="hover:text-gray-300"><Instagram size={22} /></button>
                <button className="hover:text-gray-300"><Linkedin size={22} /></button>
                </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
