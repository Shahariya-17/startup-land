import React from "react";
import avatarImg from "../../../../assets/hero/Group 83.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const HelpCards = () => {
  return (
    <section className="bg-white py-25">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Card 1 */}
        <div className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <img
            src={avatarImg}
            alt="Help Support"
            className="w-16 h-16 object-contain"
          />
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <h5 className="text-lg font-semibold text-gray-800">
                Do you need help support?
              </h5>
              <FaLongArrowAltRight
                size={20}
                className=" hover:translate-x-1 transition"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get your website ads tests delivered and let us <br />
              collect samples from the victory of updated <br />
              management services.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-5 bg-gray-100 border border-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src={avatarImg}
            alt="Help Support"
            className="w-16 h-16 object-contain"
          />
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <h5 className="text-lg font-semibold text-gray-800">
                Do you need quick assistance?
              </h5>
              <FaLongArrowAltRight
                size={20}
                className=" hover:translate-x-1 transition"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We’re here to help you 24/7. Our support team <br />
              ensures smooth communication and better <br />
              experience for all clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCards;
