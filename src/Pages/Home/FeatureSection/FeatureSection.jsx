import React from "react";
import img1 from "../../../../assets/hero/img.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div className="bg-white py-24 flex justify-center">
      <div className="w-10/12 flex flex-col lg:flex-row items-center gap-16">
        
        
        <motion.div
          className="flex justify-center lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={img1}
            alt="Feature Illustration"
            className="w-[90%] max-w-lg rounded-2xl object-contain  hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
              Meet our premium features <br /> that will make you wow
            </h1>
            <p className="py-4 text-gray-600 leading-relaxed">
              Build an incredible workplace and grow your business with
              <br />
              Gusto’s all-in-one platform packed with modern tools and
              creative solutions.
            </p>
          </div>

          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-2xl border border-gray-100 p-7 rounded-2xl transition-all"
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              Organize your project content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get your website ads tests delivered and collect samples with the
              most efficient management tools — the best design system with
              intuitive, user-friendly features.
            </p>
          </motion.div>

         
          <div className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 hover:bg-[#FFF3D6] py-5 px-6 rounded-xl flex justify-between items-center transition-all cursor-pointer"
            >
              <h5 className="text-gray-700 font-medium">
                Collaborate your multiple team support easily
              </h5>
              <FaLongArrowAltRight className="text-gray-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 hover:bg-[#FFF3D6] py-5 px-6 rounded-xl flex justify-between items-center transition-all cursor-pointer"
            >
              <h5 className="text-gray-700 font-medium">
                Build powerful design systems quickly
              </h5>
              <FaLongArrowAltRight className="text-gray-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
