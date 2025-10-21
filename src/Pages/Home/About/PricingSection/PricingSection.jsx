import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Startup Pack",
      price: isAnnual ? "$19.99/yr" : "$25.99/mo",
      description: "For the startup team who work with new come data stack",
      features: [
        "Ultimate access to all course, exercises and assessments",
        "Free access for all kind of exercise corrections with downloads",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
      ],
    },
    {
      name: "Premium Pack",
      price: isAnnual ? "$39.99/yr" : "$49.99/mo",
      description: "For the Pro users who work with modern data stack",
      features: [
        "Ultimate access to all course, exercises and assessments",
        "Free access for all kind of exercise corrections with downloads",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
      ],
    },
  ];

  return (
    <section className="bg-[#F9FAFC] py-24">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          What deal suit you perfect
        </h2>
        <p className="text-gray-500 mb-10">Meet our pricing plan</p>

        
        <div className="flex justify-center items-center gap-4 mb-14">
          <span
            className={`text-sm font-medium ${
              !isAnnual ? "text-[#2B2D42]" : "text-gray-400"
            }`}
          >
            Monthly Plan
          </span>
          <div
            className="relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-yellow-400 rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-8" : ""
              }`}
            ></div>
          </div>
          <span
            className={`text-sm font-medium ${
              isAnnual ? "text-[#2B2D42]" : "text-gray-400"
            }`}
          >
            Annual Plan
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white shadow-md rounded-2xl p-10 text-left border transition-all duration-300 ${
                idx === 0
                  ? "border-[#2B2D42]/20 hover:border-[#2B2D42]"
                  : "border-transparent hover:border-[#2B2D42]/20"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-[#FBBF24] text-2xl font-bold mb-2">
                {plan.price}
              </p>
              <p className="text-gray-500 mb-6">{plan.description}</p>

              <div className="space-y-3 border-t border-gray-200 pt-4 mb-6">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${
                      i === plan.features.length - 1
                        ? "opacity-50"
                        : "opacity-100"
                    }`}
                  >
                    <FaCheckCircle className="text-yellow-400 mt-1" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-yellow-400 text-[#2B2D42] font-semibold py-3 rounded-md hover:bg-yellow-500 transition-all">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
