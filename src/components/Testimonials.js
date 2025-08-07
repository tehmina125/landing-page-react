export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-gray-800 text-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-blue-600">What Our Clients Say</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"This team transformed our website into a beautiful and fast platform!"</p>
          <h3 className="mt-4 font-bold">- Sarah J.</h3>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"Amazing service, professional communication, and great results."</p>
          <h3 className="mt-4 font-bold">- John D.</h3>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"Reliable, efficient, and extremely skilled team. Highly recommend!"</p>
          <h3 className="mt-4 font-bold">- Amina R.</h3>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"They understood our brand perfectly and delivered beyond expectations."</p>
          <h3 className="mt-4 font-bold">- Omar K.</h3>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"Quick turnaround, clear communication, and top-notch work."</p>
          <h3 className="mt-4 font-bold">- Fatima L.</h3>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"A pleasure to work with from start to finish. Our go-to team now."</p>
          <h3 className="mt-4 font-bold">- Daniel M.</h3>
        </div>
      </div>
    </div>
  );
}
