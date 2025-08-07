import helo from "../assets/images/helo.jpg";

export default function Home() {
  return (
    <div>
      <div
  className="h-[70vh] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center text-white text-center relative"
  style={{
          backgroundImage: `url(${helo})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-6 max-w-xl">
            A modern static website built with React and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 md:px-20 bg-gray-100 space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
            src="/4.jpg"
            alt="Creative Design"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Creative Design</h2>
            <p className="text-gray-600 text-lg">
              We design with passion and precision. Our UI/UX solutions are crafted to boost engagement and bring your ideas to life.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800">Fast Development</h2>
            <p className="text-gray-600 text-lg">
              Our tools and frameworks speed up development without compromising quality. From prototype to production, we’ve got you covered.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Get Started
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transform hover:scale-105 transition duration-300">
          <img
            src="/5.jpg"
            alt="Card"
            className="w-full h-72 object-cover"
          />
          </div>
        </div>
      </div>
      <div className="py-20 px-6 md:px-20 bg-white">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    Latest Trends
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src="images 3.jpeg"
        alt="AI in Design"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI in UI/UX</h3>
        <p className="text-gray-600 text-sm">
          Discover how artificial intelligence is revolutionizing the way we design interfaces and improve user experience.
        </p>
      </div>
    </div>

    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src="images.jpeg"
        alt="React Optimization"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">React 19 Optimizations</h3>
        <p className="text-gray-600 text-sm">
          Explore the latest features and performance boosts introduced in React 19 for blazing-fast frontend apps.
        </p>
      </div>
    </div>

    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src="3.jpg"
        alt="Mobile Trends"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mobile-First Revolution</h3>
        <p className="text-gray-600 text-sm">
          Mobile-first design is no longer optional. See what trends are shaping the mobile experience in 2025.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
