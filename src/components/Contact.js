export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Contact Us</h1>
        <p className="mb-8 max-w-xl text-center">
          Have a question or project in mind? Fill out the form below and we’ll get back to you.
        </p>
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-2 w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  