import React from "react";
import bannerImg from "../../../../assets/hero/illustration.png";
import sponsoredImg1 from "../../../../assets/logo/paypal.png";
import sponsoredImg2 from "../../../../assets/logo/google.png";
import sponsoredImg3 from "../../../../assets/logo/Dropbox_logo_2017.png";

const Banner = () => {
  return (
    <section className="bg-[#FFFCF7] py-20">
      <div className="w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Ultimate support <br /> system for leading <br /> agencies
          </h1>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Get your tests delivered and let home collect sample from <br /> the victory  
            of the managements that supplies the best <br /> design system guidelines ever.
          </p>

        
          <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 opacity-90 mt-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC059] outline-none transition-all duration-200"
            />
            <button className="bg-[#FFC059] hover:bg-[#e5a740] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 text-gray-600 text-sm">
            <p className="font-medium">Sponsored by:</p>
            <div className="flex items-center gap-5 opacity-80">
              <img src={sponsoredImg1} alt="PayPal" className="h-6 object-contain hover:opacity-100 transition duration-200" />
              <img src={sponsoredImg2} alt="Google" className="h-6 object-contain hover:opacity-100 transition duration-200" />
              <img src={sponsoredImg3} alt="Dropbox" className="h-6 object-contain hover:opacity-100 transition duration-200" />
            </div>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center lg:justify-end animate-slideUp">
          <img
            src={bannerImg}
            alt="Hero Illustration"
            className="max-w-sm md:max-w-md w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
