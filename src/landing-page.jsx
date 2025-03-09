// import { motion } from "framer-motion";
// ❌ Remove motion if you are not using it
// import { motion } from "framer-motion";

export default function LandingPage() {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <section className="w-full h-screen flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-6xl font-bold">Stay Productive, Stay Organized</h1>
          <p className="text-lg mt-4">Your all-in-one task and habit tracker to boost productivity.</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </section>
      </div>
    );
  }
  
  