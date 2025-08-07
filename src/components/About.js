export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-center items-center px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-10">
          We are passionate about building elegant, fast, and accessible websites using modern tools like React and Tailwind CSS. Our mission is to create digital experiences that make a real impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">🎯 Our Mission</h3>
          <p className="text-sm text-gray-600">
            To deliver innovative web solutions tailored to meet client needs, combining design, performance, and usability.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">💡 Our Vision</h3>
          <p className="text-sm text-gray-600">
            To be a leading web development company known for transforming ideas into impactful user experiences.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2">🤝 Our Values</h3>
          <p className="text-sm text-gray-600">
            Integrity, innovation, and customer focus drive everything we do. We value long-term partnerships and user satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
