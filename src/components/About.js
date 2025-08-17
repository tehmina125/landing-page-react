import { Smile, Briefcase, Award, Check, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="/bg2.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6 md:px-20 bg-white space-y-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-4 order-2 md:order-1 md:col-span-7">
            <h2 className="text-3xl font-bold text-gray-800 underline">
              The Best IT Solution With 11 Years of Experience
            </h2>

            <p className="text-gray-600 text-lg">
              Dev Hub Solutions is the best websites and apps design and
              development company in London (UK). We offer web and app design
              and development, graphic design, SEO and digital marketing
              solutions.
            </p>

            <p className="text-gray-600 text-lg">
              Dev Hub Solutions, as a website design and development service
              provider in London (UK), has a diverse team of web designers,
              developers, and digital marketers to cater to all kinds of web
              solutions you may need. A team of highly experienced and skilled
              professionals assures our clients the best quality services,
              creative designs, innovative ideas at cost-effective prices, and
              timely project completion.
            </p>

            <p className="text-gray-600 text-lg">
              <strong className="text-blue-600">
                ⚡ Now Providing Web Security Solutions:
              </strong>{" "}
              <span className="text-gray-800 font-bold">
                Comprehensive web security services—including server-side
                protection and robust data security—
              </span>{" "}
              are an essential part of our offering.
            </p>

            <p className="text-green-600 text-lg">
              Your website and data are safeguarded with the latest technologies
              and best practices, ensuring complete peace of mind for your
              business.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-lg font-bold">
              <div className="flex items-center">
                <Check className="text-blue-600 mr-2 w-5 h-5 font-bold" />
                Professional Staff
              </div>
              <div className="flex items-center">
                <Check className="text-blue-600 mr-2 w-5 h-5 font-bold" />
                24/7 Support
              </div>
              <div className="flex items-center sm:col-span-2 md:col-span-1">
                <Check className="text-blue-600 mr-2 w-5 h-5 font-bold" />
                Fair Prices
              </div>
            </div>

            {/* Call Section */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-700 text-lg font-semibold">
                  Call to ask any question
                </p>
                <p className="text-blue-600 text-xl font-bold">
                  +44 75 32610367
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 px-6 py-2 text-lg bg-blue-600 text-white rounded hover:bg-green-700 transition">
              Request a Quote
            </button>
          </div>

          {/* Right Image */}
          <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2 md:col-span-5 transform hover:scale-105 transition duration-300">
            <img
              src="/about.jpg"
              alt="Card"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6 md:px-20 flex justify-center">
        <div className="flex gap-0 space-x-0">
          {/* Happy Clients */}
          <div className="bg-[#06A3DA] text-white rounded-lg p-6 w-80 hover:scale-105 transform transition duration-300 text-center">
            <Smile className="w-12 h-12 mx-auto" />
            <div className="text-5xl font-bold mt-2">20</div>
            <div className="mt-1 text-xl">Happy Clients</div>
          </div>

          {/* Projects Done */}
          <div className="bg-[#091E3E] text-white rounded-lg p-6 w-80 hover:scale-105 transform transition duration-300 text-center">
            <Briefcase className="w-12 h-12 mx-auto" />
            <div className="text-5xl font-bold mt-2">30</div>
            <div className="mt-1 text-xl">Projects Done</div>
          </div>

          {/* Win Awards */}
          <div className="bg-[#06A3DA] text-white rounded-lg p-6 w-80 hover:scale-105 transform transition duration-300 text-center">
            <Award className="w-12 h-12 mx-auto" />
            <div className="text-5xl font-bold mt-2">10</div>
            <div className="mt-1 text-xl">Win Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
}
