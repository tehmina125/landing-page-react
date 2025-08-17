import { useEffect, useRef } from "react";
import { Search, ClipboardCheck, Check } from "lucide-react";
import { FaSitemap } from "react-icons/fa";

export default function Services() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl">
            Custom IT Solutions for Your Successful Business
          </p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div
          ref={addToRefs}
          className="text-center mb-12 opacity-0 translate-y-5 transition-all duration-700"
        >
          <h1 className="text-blue-600 font-semibold text-3xl underline">
            Our Services
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Custom IT Solutions for Your <br /> Successful Business
          </h1>
        </div>

        {/* Service 1 */}
        <div
          ref={addToRefs}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 translate-y-5 transition-all duration-700"
        >
          <img
            src="/web.jpeg"
            alt="Web Development"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-600 underline">
              Web Development
            </h2>
            <p className="text-gray-600 mt-4">
              With over 11 years of experience in web design and development,
              Dev Hub Solutions stands as one of the major web development
              companies in London(UK) with a solid team of web designers, and
              developers.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div
          ref={addToRefs}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 translate-y-5 transition-all duration-700"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-600 underline">
              Apps Development
            </h2>
            <p className="text-gray-600 mt-4">
              With years of experience in mobile application development, Dev
              Hub Solutions can create user friendly mobile apps for both
              Android and iOS platforms.
            </p>
          </div>
          <img
            src="/app.jpg"
            alt="Apps Development"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Service 3 */}
        <div
          ref={addToRefs}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 translate-y-5 transition-all duration-700"
        >
          <img
            src="/seo.jpg"
            alt="SEO Optimization"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-600 underline">
              SEO Optimization
            </h2>
            <p className="text-gray-600 mt-4">
              At Dev Hub Solutions, we take your business from the ground up to
              the top of search rankings. Our powerful SEO strategies ensure
              your website dominates Google, Yahoo, Bing, and every major search
              engine—driving visibility, traffic, and growth like never before.
            </p>
          </div>
        </div>
      </div>

      {/* Work Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div
          ref={addToRefs}
          className="text-center mb-12 opacity-0 translate-y-5 transition-all duration-700"
        >
          <h1 className="text-blue-600 font-semibold text-3xl underline">
            Work Process
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Step By Step Simple & Clean <br /> Working Process
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div
            ref={addToRefs}
            className="p-6 rounded-lg shadow hover:shadow-lg transition text-center opacity-0 translate-y-5 transition-all duration-700"
          >
            <Search
              size={40}
              className="text-white bg-blue-500 p-2 rounded-full mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-2">PLANNING</h3>
            <p className="text-gray-700">
              Understand what you want out of your site and how do you plan to
              implement it.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={addToRefs}
            className="p-6 rounded-lg shadow hover:shadow-lg transition text-center opacity-0 translate-y-5 transition-all duration-700"
          >
            <FaSitemap
              size={40}
              className="text-white bg-blue-500 p-2 rounded-full mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-2">DEVELOPMENT</h3>
            <p className="text-gray-700">
              We provide web development with content management systems for
              clients who need more than just the basics.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={addToRefs}
            className="p-6 rounded-lg shadow hover:shadow-lg transition text-center opacity-0 translate-y-5 transition-all duration-700"
          >
            <ClipboardCheck
              size={40}
              className="text-white bg-blue-500 p-2 rounded-full mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-2">REVIEW & TEST</h3>
            <p className="text-gray-700">
              Once the site is ready, it should be checked and tested to ensure
              an error free working.
            </p>
          </div>

          {/* Card 4 */}
          <div
            ref={addToRefs}
            className="p-6 rounded-lg shadow hover:shadow-lg transition text-center opacity-0 translate-y-5 transition-all duration-700"
          >
            <Check
              size={40}
              className="text-white bg-blue-500 p-2 rounded-full mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-2">LAUNCH</h3>
            <p className="text-gray-700">
              After successful testing the product is delivered / deployed to
              the customer for their use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
