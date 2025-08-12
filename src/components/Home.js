import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Phone, Smile, Briefcase, Award, Box, User , Search,ClipboardCheck} from "lucide-react";
import { FaSitemap } from "react-icons/fa";

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
      <div className="relative h-screen w-full flex justify-center items-center text-white text-center overflow-hidden">
        <img
          src={image}
          alt={title} // Use descriptive alt without redundant words like "image" or "photo"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 text-white text-center">
          <div className="inline-block bg-black bg-opacity-50 px-6 py-6 rounded-lg">
            <p className="text-4xl mb-4">{subtitle}</p>
            <h1 className="text-6xl whitespace-pre-line mb-6">{title}</h1>

            {/* Buttons inside opacity box */}
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 text-white border border-white rounded hover:bg-green-700 transition">
                Free Quote
              </button>
              <button className="px-6 py-3 text-white border border-white rounded hover:bg-blue-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/40 shadow-lg z-20"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/40 shadow-lg z-20"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 px-6 md:px-20 grid md:grid-cols-3 gap-6 shadow-sm justify-center">
        {/* Happy Clients */}
        <div className="bg-blue-500 text-white rounded-lg p-6 w-56 mx-auto text-center hover:scale-105 transform transition duration-300">
          <Smile className="w-10 h-10 mx-auto" />
          <div className="text-4xl font-bold mt-2">20</div>
          <div className="mt-1 text-lg">Happy Clients</div>
        </div>

        {/* Projects Done */}
        <div className="bg-blue-500 text-white rounded-lg p-6 w-56 mx-auto text-center hover:scale-105 transform transition duration-300">
          <Briefcase className="w-10 h-10 mx-auto" />
          <div className="text-4xl font-bold mt-2">30</div>
          <div className="mt-1 text-lg">Projects Done</div>
        </div>

        {/* Win Awards */}
        <div className="bg-blue-500 text-white rounded-lg p-6 w-56 mx-auto text-center hover:scale-105 transform transition duration-300">
          <Award className="w-10 h-10 mx-auto" />
          <div className="text-4xl font-bold mt-2">10</div>
          <div className="mt-1 text-lg">Win Awards</div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6 md:px-20 bg-white space-y-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="space-y-4 order-2 md:order-1 md:col-span-7">
            <h2 className="text-3xl font-bold text-gray-800  underline">
              The Best IT Solution With 11 Years of Experience
            </h2>

            <p className="text-gray-600 text-lg">
              Dev Hub Solutions is the best websites and apps design and development company in London (UK).
              We offer web and app design and development, graphic design, SEO and digital marketing solutions.
            </p>

            <p className="text-gray-600 text-lg">
              Dev Hub Solutions, as a website design and development service
              provider in London (UK), has a diverse team of web designers, developers, and digital marketers to
              cater to all kinds of web solutions you may need. A team of highly experienced and skilled professionals
              assures our clients the best quality services, creative designs, innovative ideas at cost-effective prices, and timely project completion.
            </p>

            <p className="text-gray-600 text-lg">
              <strong className="text-blue-600">⚡ Now Providing Web Security Solutions:</strong>
              <span className="text-gray-800 font-bold">
                Comprehensive web security services—including server-side protection and robust data security—
              </span>
              are an essential part of our offering.
              <p className="text-green-600 text-lg">
                Your website and data are safeguarded with the latest technologies and best practices,
                ensuring complete peace of mind for your business.
              </p>
            </p>

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

            <button className="mt-4 px-6 py-2 text-lg bg-blue-600 text-white rounded hover:bg-green-700 transition">
              Request a Quote
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2 md:col-span-5 transform hover:scale-105 transition duration-300">
            <img
              src="/about.jpg"
              alt="Card"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h3 className="text-5xl text-blue-600 font-semibold text-lg  underline">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            We Are Here to Grow Your <br /> Business Exponentially
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg shadow">
            <Box className="text-white bg-blue-500 w-10 h-10 mb-2" />
              <h2 className="text-xl font-bold  underline">Strong Expertise</h2>
              <p className="text-gray-500">
                At <span className="font-semibold">Dev Hub Solutions</span>, our core expertise lies in{" "}
                <span className="text-black font-semibold">Ruby on Rails, MERN, and MEAN</span>, delivering high-performance,
                future-ready solutions. We also bring proven mastery in{" "}
                <span className="text-black font-semibold">Python, PHP, WordPress, AI &amp; LLM integration, and DevOps automation</span>
                —making us your ultimate one-stop partner for innovative and scalable IT solutions. With cutting-edge skills and a results-driven approach, we help businesses thrive in today’s competitive digital landscape.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow">
            <Award className="text-white bg-blue-500 w-10 h-10 mb-2" />
              <h2 className="text-xl font-bold  underline">On Time Delivery</h2>
              <p className="text-gray-500">
                We do not over promise we over-deliver our promise. We have a great collection of internal frameworks with best-in-class
                infrastructure with a decade of experience in the IT software development industry that helps us to deliver solutions with
                superior quality at all times. We have learned how to avoid mistakes and repeat success all these years. We don't brag about
                consistency alone. In time, we describe and produce it. Our Products are here to notify the same.
              </p>
            </div>
          </div>

          {/* Column 2 (Image spans both rows) */}
          <div>
            <img
              src="/h.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg shadow">
            <User className="text-white bg-blue-500 w-10 h-10 mb-2" />
              <h2 className="text-xl font-bold  underline">Client First</h2>
              <p className="text-gray-500">
                For any business, Clients are always at the core. Being a leading developer
                of web and mobile applications, our concept goes beyond our direct customers.
                We always start from where you are with your ideas and we think from the
                viewpoints of your end users, their areas of pain, and formulate a solution
                that solves key issues to help your business.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow">
            <Phone className="text-white bg-blue-500 w-10 h-10 mb-2" />
              <h2 className="text-xl font-bold  underline">Total Ownership & Feedback Based</h2>
              <p className="text-gray-500">
                We do not follow the criteria or requirements just like that. Right from the
                beginning we have a direct influence on the project. We take spontaneous
                feedback from our clients, their customers, and other stakeholders that have
                an impact on the product. And we take your product and its feedback seriously.
                With this we make sure that we all are heading towards the right direction.
                Which saves really everything that matters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services */}
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-blue-600 font-semibold text-3xl  underline">Our Services</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Custom IT Solutions for Your <br /> Successful Business
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/web.jpeg"
            alt="Web Development"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-600  underline">Web Development</h2>
            <p className="text-gray-600 mt-4">
            With over 11 years of experience in web design and development, Dev Hub Solutions
             stands as one of the major web development companies in London(UK) with a solid 
             team of web designers, and developers.            
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-600  underline">Apps Development</h2>
            <p className="text-gray-600 mt-4">
            With years of experience in mobile application development, Dev Hub Solutions 
            can create user friendly mobile apps for both Android and iOS platforms.  
                      </p>
          </div>
          <img
            src="/app.jpg"
            alt="Digital Marketing"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/seo.jpg"
            alt="Web Security"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-600  underline">SEO Optimization</h2>
            <p className="text-gray-600 mt-4">
            At Dev Hub Solutions, we take your business from the ground up to the top of search rankings. 
            Our powerful SEO strategies ensure your website dominates Google, Yahoo, Bing, and every major
             search engine—driving visibility, traffic, and growth like never before.
               </p>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
          <h1 className="text-blue-600 font-semibold text-3xl  underline">Work Process</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Step By Step Simple & Clean <br /> Working Process  </h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-6 rounded-lg shadow hover:shadow-lg transition text-center">
        <Search size={40} className="text-white bg-blue-500 text-5xl mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">PLANNING</h3>
          <p className="text-gray-700">
          Understand what you want out of your
           site and how do you plan to implement it.  </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-lg shadow hover:shadow-lg transition text-center">
        <FaSitemap size={40} className="text-white bg-blue-500 text-5xl mx-auto" />
        <h3 className="text-2xl font-semibold mb-2">DEVELOPMENT</h3>
                  <p className="text-gray-700">
                  We provide web development with content 
                  management systems for clients who need more than just the basics </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-lg shadow hover:shadow-lg transition text-center">
        <ClipboardCheck size={40} className="text-white bg-blue-500 text-5xl mx-auto" />
        <h3 className="text-2xl font-semibold mb-2">REVIEW & TEST</h3>
                  <p className="text-gray-700">
                  Once the site is ready, it should be
                   checked and tested to ensure an error free working. </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-lg shadow hover:shadow-lg transition text-center">
        <Check size={40} className="text-white bg-blue-500 mx-auto" />
        <h3 className="text-2xl font-semibold mb-2">LAUNCH</h3>
                  <p className="text-gray-700">
                  After successful testing the product is delivered
                   / deployed to the customer for their use.          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
