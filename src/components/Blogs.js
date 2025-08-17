export default function Blogs() {
  const blogData = [
    { text: "This team transformed our website into a beautiful and fast platform!", author: "Sarah J." },
    { text: "Amazing service, professional communication, and great results.", author: "John D." },
    { text: "Reliable, efficient, and extremely skilled team. Highly recommend!", author: "Amina R." },
    { text: "They understood our brand perfectly and delivered beyond expectations.", author: "Omar K." },
    { text: "Quick turnaround, clear communication, and top-notch work.", author: "Fatima L." },
    { text: "A pleasure to work with from start to finish. Our go-to team now.", author: "Daniel M." }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 text-gray-800">
      {/* ✅ Full-Width Banner */}
      <div
        className="relative w-full bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg md:text-xl">
            Read the latest articles & updates from our team
          </p>
        </div>
      </div>

      {/* ✅ Blogs Section */}
      <div className="w-full max-w-4xl px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600">
          Read The Latest Articles from Our Blog Post
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-lg opacity-0 translate-y-4 animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <p className="italic">"{blog.text}"</p>
              <h3 className="mt-4 font-bold">- {blog.author}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
