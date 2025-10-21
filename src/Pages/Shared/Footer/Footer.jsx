import React from "react";
import logo from '../../../../assets/logo/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#1B1D3C] text-white">
      <div className="py-20 mt-5 text-center px-5 border-b border-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Subscribe to get notified about update
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          By subscribing with your mail, you will accept our privacy policy
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center flex-wrap gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-[240px] px-4 py-3 rounded-md bg-[#2B2D52] text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-[#1B1D3C] font-semibold rounded-md hover:bg-yellow-500 transition-all"
          >
            Subscribe us
          </button>
        </form>
      </div>

      
      <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-5 w-11/12 lg:w-10/12 mx-auto text-sm text-gray-400">
       
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
          <p className="text-gray-300 font-medium">
            Startup<span className="text-white">Landing</span>{" "}
            <span className="text-gray-400">© 2019 Shahariyar Rakib, Inc</span>
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Advertise</li>
          <li className="hover:text-yellow-400 cursor-pointer">Supports</li>
          <li className="hover:text-yellow-400 cursor-pointer">Marketing</li>
          <li className="hover:text-yellow-400 cursor-pointer">FAQ</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
