import React from "react";
import { FaCog, FaChartLine, FaFileAlt, FaGlobe, FaTachometerAlt } from "react-icons/fa";
import dashboardImg from '../../../../assets/hero/Mask Group.png'

const OverViewSection = () => {
  return (
    <section className="bg-[#2B2D42] text-white py-20">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-wrap justify-center lg:justify-start gap-10 border-b border-gray-600 pb-6 mb-12">
          <div className="flex flex-col items-center gap-2">
            <FaTachometerAlt size={22} className="text-yellow-400" />
            <p className="text-sm text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1">
              Budget Overview
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
            <FaCog size={22} />
            <p className="text-sm">Create & adjust</p>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
            <FaFileAlt size={22} />
            <p className="text-sm">View Reports</p>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
            <FaGlobe size={22} />
            <p className="text-sm">Optimize website</p>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition">
            <FaChartLine size={22} />
            <p className="text-sm">Custom Dashboard</p>
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
         
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold leading-snug">
              Introduce quality feature <br /> that boost your website <br />
              rank & performance
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Build an incredible workplace and grow your business with
              Gusto’s all-in-one platform with amazing contents. Get your
              tests delivered at let home collect sample from the victory of
              the supplies design system.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] font-semibold px-6 py-3 rounded-md transition-all">
              More Details
            </button>
          </div>

         
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={dashboardImg}
              alt="Dashboard Overview"
              className="w-[90%] max-w-2xl rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverViewSection;
