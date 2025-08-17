import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* ✅ Banner Section */}
      <div
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            If You Have Any Query, Feel Free To Contact Us
          </p>
        </div>
      </div>

      {/* ✅ Contact Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold uppercase tracking-wide">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            If You Have Any Query, Feel Free To Contact Us
          </h3>
          <div className="mt-2 w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* ✅ Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-lg text-white mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <p className="font-semibold">Call to ask any question</p>
            <p className="text-blue-600 font-bold text-lg">
              +44 75 32610367
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-lg text-white mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <p className="font-semibold">Email to get free quote</p>
            <p className="text-blue-600 font-bold text-lg">
              info@devhubsol.com
            </p>
          </div>

          {/* Office */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-lg text-white mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="font-semibold">Visit our office</p>
            <p className="text-blue-600 font-bold text-lg">
              2 Gainsborough Road, London,
              <br /> E11 1HT, United Kingdom
            </p>
          </div>
        </div>

        {/* ✅ Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-4 py-3 w-full bg-blue-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded px-4 py-3 w-full bg-blue-50"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded px-4 py-3 w-full bg-blue-50"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded px-4 py-3 w-full h-32 bg-blue-50"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 w-full rounded hover:bg-blue-700 font-bold"
            >
              SEND
            </button>
          </form>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19862.196930834622!2d0.009!3d51.564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a728aa3b85b7%3A0xa0a0e3a22b93e9!2s2%20Gainsborough%20Rd%2C%20London%20E11%201HT%2C%20UK!5e0!3m2!1sen!2suk!4v1692269099999!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
