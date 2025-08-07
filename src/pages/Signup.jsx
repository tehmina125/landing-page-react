import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Create an Account</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex items-start text-sm text-gray-700 gap-2">
            <input type="checkbox" required />
            <label>
              I agree to the
              <button
                type="button"
                className="text-green-600 hover:underline ml-1"
                onClick={() => alert("Show Terms and Conditions")}
              >
                Terms & Conditions
              </button>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-3 text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")} 
              className="text-green-700 hover:underline"
            >
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
