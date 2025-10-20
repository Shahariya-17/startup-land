import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-100 via-white to-teal-100 px-4 py-10">
      <div className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* ==== Left Branding Section ==== */}
        <motion.div
          className="w-full lg:w-1/2 p-10 flex flex-col items-center justify-center text-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="" alt="Auth" className="max-w-xs rounded-xl shadow-lg" />
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-700">Boost Your Productivity</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Join ProFast today and manage your work faster, easier, and smarter.
              Experience the speed of progress — powered by innovation.
            </p>
          </motion.div>
        </motion.div>

        {/* ==== Right Login Form Section ==== */}
        <motion.div
          className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;