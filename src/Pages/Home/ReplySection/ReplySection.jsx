import React from "react";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";
import img2 from "../../../../assets/hero/img2.png";

const ReplySection = () => {
  return (
    <section className="bg-white py-24">
      <div className="w-10/12 mx-auto md:mr-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-20">
        
        
        <div className="relative flex justify-center w-full lg:w-1/2">
          <img
            src={img2}
            alt="Chat preview"
            className="w-[85%] max-w-lg drop-shadow-xl rounded-2xl object-contain hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -z-10 w-[80%] h-[80%] bg-gradient-to-tr from-yellow-50 to-white blur-3xl rounded-full" />
        </div>

        
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold leading-snug text-gray-900">
            Built in one app to make <br /> instant reply within lowest{" "}
            <br /> minutes <span className="text-yellow-500">😊</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <ul className="space-y-3 border border-gray-100 p-4 rounded-xl shadow-sm bg-white">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> Medical and vision
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> Life insurance
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> 401(k) savings
              </li>
            </ul>

            <ul className="space-y-3 border border-gray-100 p-4 rounded-xl shadow-sm bg-white">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> HSAs and FSAs
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> Commuter benefits
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" /> 529 college savings
              </li>
            </ul>
          </div>

          <button className="text-blue-600 font-semibold flex items-center gap-2 mt-6 hover:text-blue-700 transition-all">
            Explore more 
            <FaAngleRight size={20} className="transition-transform duration-200 hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReplySection;
