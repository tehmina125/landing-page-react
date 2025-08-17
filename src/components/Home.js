import { useState } from "react";
import { ChevronLeft, ChevronRight, Check,Phone,Smile, Briefcase,Award,Box,User,Search,ClipboardCheck,
} from "lucide-react";
import { FaSitemap } from "react-icons/fa";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  const slides = [
    {
      image: "/bg1.jpg",
      subtitle: "Creative & Innovative",
      title: "Reshaping Companies Into Digital Business",
    },
    {
      image: "/bg2.jpg",
      subtitle: "Creative & Innovative",
      title: "Build Your Dream Websites and Apps With Dev Hub Solutions",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, subtitle, title } = slides[current];

  return (
    <div>
{/* Hero Slider */}
        <div className="relative w-full h-[90vh] sm:h-screen flex justify-center items-center text-white text-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
            <div className="inline-block bg-black bg-opacity-50 px-4 sm:px-8 py-6 rounded-lg">
              <p className="text-2xl sm:text-4xl mb-2 sm:mb-4">{subtitle}</p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl whitespace-pre-line mb-4 sm:mb-6">
                {title}
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 text-white border border-white rounded hover:bg-green-700 transition">
                  Free Quote
                </button>
                <button className="px-6 py-3 text-white border border-white rounded hover:bg-blue-700 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 sm:p-3 rounded-full hover:bg-black/40 shadow-lg z-20"
          >
            <ChevronLeft size={24} sm={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 sm:p-3 rounded-full hover:bg-black/40 shadow-lg z-20"
          >
            <ChevronRight size={24} sm={32} />
          </button>
        </div>

        {/* Stats Section */}
        <div className="py-12 px-4 sm:px-12 flex flex-col sm:flex-row justify-center gap-6">
          {/* Happy Clients */}
          <div className="bg-[#06A3DA] text-white rounded-lg p-6 flex-1 hover:scale-105 transform transition duration-300 text-center">
            <Smile className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            <div className="text-4xl sm:text-5xl font-bold mt-2">20</div>
            <div className="mt-1 text-lg sm:text-xl">Happy Clients</div>
          </div>

          {/* Projects Done */}
          <div className="bg-[#091E3E] text-white rounded-lg p-6 flex-1 hover:scale-105 transform transition duration-300 text-center">
            <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            <div className="text-4xl sm:text-5xl font-bold mt-2">30</div>
            <div className="mt-1 text-lg sm:text-xl">Projects Done</div>
          </div>

          {/* Win Awards */}
          <div className="bg-[#06A3DA] text-white rounded-lg p-6 flex-1 hover:scale-105 transform transition duration-300 text-center">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
            <div className="text-4xl sm:text-5xl font-bold mt-2">10</div>
            <div className="mt-1 text-lg sm:text-xl">Win Awards</div>
          </div>
        </div>
      
       {/* About Section */}
        <div className="py-16 px-4 sm:px-6 md:px-20 bg-white space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 md:col-span-7 space-y-4">
              <h3 className="text-blue-600 font-semibold text-2xl sm:text-3xl underline">
                About Us
              </h3>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 underline">
                The Best IT Solution With 11 Years of Experience
              </h2>

              <p className="text-gray-600 text-base sm:text-lg">
                Dev Hub Solutions is the best websites and apps design and development company in London (UK). We offer web and app design and development, graphic design, SEO and digital marketing solutions.
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                Dev Hub Solutions, as a website design and development service provider in London (UK), has a diverse team of web designers, developers, and digital marketers to cater to all kinds of web solutions you may need. A team of highly experienced and skilled professionals assures our clients the best quality services, creative designs, innovative ideas at cost-effective prices, and timely project completion.
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                <strong className="text-blue-600">⚡ Now Providing Web Security Solutions:</strong>
                <span className="text-gray-800 font-bold">
                  Comprehensive web security services—including server-side protection and robust data security—
                </span>{" "}
                are an essential part of our offering.
                <p className="text-green-600 text-base sm:text-lg">
                  Your website and data are safeguarded with the latest technologies and best practices, ensuring complete peace of mind for your business.
                </p>
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-base sm:text-lg font-bold">
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
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-700 text-base sm:text-lg font-semibold">
                    Call to ask any question
                  </p>
                  <p className="text-blue-600 text-lg sm:text-xl font-bold">
                    +44 75 32610367
                  </p>
                </div>
              </div>

              <button className="mt-4 px-6 py-2 text-base sm:text-lg bg-blue-600 text-white rounded hover:bg-green-700 transition">
                Request a Quote
              </button>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2 md:col-span-5 transform hover:scale-105 transition duration-300">
              <img
                src="/about.jpg"
                alt="About"
                className="w-full h-auto sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-blue-600 font-semibold text-2xl sm:text-3xl underline">
              Why Choose Us
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              We Are Here to Grow Your <br /> Business Exponentially
            </h2>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-lg shadow">
                <Box className="text-white bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                <h2 className="text-lg sm:text-xl font-bold underline">Strong Expertise</h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  At <span className="font-semibold">Dev Hub Solutions</span>, our core expertise lies in <span className="text-black font-semibold">Ruby on Rails, MERN, and MEAN</span>, delivering high-performance, future-ready solutions. We also bring proven mastery in <span className="text-black font-semibold">Python, PHP, WordPress, AI &amp; LLM integration, and DevOps automation</span> —making us your ultimate one-stop partner for innovative and scalable IT solutions.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-lg shadow">
                <Award className="text-white bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                <h2 className="text-lg sm:text-xl font-bold underline">On Time Delivery</h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  We do not over promise we over-deliver our promise. We have a great collection of internal frameworks and best-in-class infrastructure that helps us deliver superior quality solutions.
                </p>
              </div>
            </div>

            {/* Column 2 (Image) */}
            <div className="order-2 md:order-none flex justify-center items-center">
              <img
                src="/h.jpg"
                alt="Team"
                className="w-full h-auto object-contain rounded-lg shadow"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 sm:gap-6 order-3">
              <div className="p-4 sm:p-6 rounded-lg shadow">
                <User className="text-white bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                <h2 className="text-lg sm:text-xl font-bold underline">Client First</h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  For any business, clients are always at the core. We start from where you are with your ideas and think from the viewpoint of your end users.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-lg shadow">
                <Phone className="text-white bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                <h2 className="text-lg sm:text-xl font-bold underline">
                  Total Ownership & Feedback Based
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  We take spontaneous feedback from our clients, their customers, and other stakeholders seriously to head in the right direction.
                </p>
              </div>
            </div>
          </div>
        </section>

     {/* Our Services */}
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 space-y-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-blue-600 font-semibold text-2xl sm:text-3xl underline">
              Our Services
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Custom IT Solutions for Your <br /> Successful Business
            </h1>
          </div>

          {/* Web Development */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <img
              src="/web.jpeg"
              alt="Web Development"
              className="w-full h-auto md:h-64 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 underline">
                Web Development
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-4 text-base sm:text-lg">
                With over 11 years of experience in web design and development, Dev Hub Solutions stands as one of the major web development companies in London(UK) with a solid team of web designers, and developers.
              </p>
            </div>
          </div>

          {/* Apps Development */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 underline">
                Apps Development
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-4 text-base sm:text-lg">
                With years of experience in mobile application development, Dev Hub Solutions can create user friendly mobile apps for both Android and iOS platforms.
              </p>
            </div>
            <img
              src="/app.jpg"
              alt="Apps Development"
              className="w-full h-auto md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* SEO Optimization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <img
              src="/seo.jpg"
              alt="SEO Optimization"
              className="w-full h-auto md:h-64 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 underline">
                SEO Optimization
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-4 text-base sm:text-lg">
                At Dev Hub Solutions, we take your business from the ground up to the top of search rankings. Our powerful SEO strategies ensure your website dominates Google, Yahoo, Bing, and every major search engine—driving visibility, traffic, and growth like never before.
              </p>
            </div>
          </div>
        </div>

        {/* Work Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-blue-600 font-semibold text-2xl sm:text-3xl underline">
              Work Process
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Step By Step Simple & Clean <br /> Working Process
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-6">
            {/* Card 1 */}
            <div className="p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <Search size={32} className="text-white bg-blue-500 rounded-full p-2 mx-auto mb-2" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">PLANNING</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Understand what you want out of your site and how do you plan to implement it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <FaSitemap size={32} className="text-white bg-blue-500 rounded-full p-2 mx-auto mb-2" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">DEVELOPMENT</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We provide web development with content management systems for clients who need more than just the basics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <ClipboardCheck size={32} className="text-white bg-blue-500 rounded-full p-2 mx-auto mb-2" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">REVIEW & TEST</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Once the site is ready, it should be checked and tested to ensure an error free working.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <Check size={32} className="text-white bg-blue-500 rounded-full p-2 mx-auto mb-2" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">LAUNCH</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                After successful testing the product is delivered / deployed to the customer for their use.
              </p>
            </div>
          </div>
        </section>

      <ImageCarousel />

    </div>
  );
}
