export default function Services() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Our Services</h1>
      <p className="max-w-2xl mb-10 text-lg text-gray-600">
        We offer cutting-edge solutions in Web Development, UI/UX Design, and SEO to elevate your digital presence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="p-6 bg-white hover:bg-blue-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl rounded-xl border border-blue-100 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Web Development</h2>
          <p className="text-gray-600">
            Modern, responsive websites built with React, Tailwind CSS, and the latest technologies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white hover:bg-blue-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl rounded-xl border border-blue-100 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">UI/UX Design</h2>
          <p className="text-gray-600">
            Beautiful, user-centric interfaces that offer intuitive navigation and high user engagement.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white hover:bg-blue-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl rounded-xl border border-blue-100 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">SEO Optimization</h2>
          <p className="text-gray-600">
            Boost your visibility on Google with smart keyword strategies and performance-driven SEO.
          </p>
        </div>
      </div>
    </div>
  );
}
