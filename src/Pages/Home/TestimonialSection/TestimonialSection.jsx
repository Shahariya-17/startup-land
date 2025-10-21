import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Minnie Horn",
    username: "@hello.minnie",
    image: "https://i.pravatar.cc/100?img=1",
    text: "I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.",
  },
  {
    name: "Merryn Manley",
    username: "@merryn.manley",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Thanks for your kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
  },
  {
    name: "Veona Watson",
    username: "@hi.veona",
    image: "https://i.pravatar.cc/100?img=3",
    text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended.",
  },
  {
    name: "Paseka Nku",
    username: "@hey.nku",
    image: "https://i.pravatar.cc/100?img=4",
    text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result.",
  },
  {
    name: "Cherice Justin",
    username: "@cherice.me",
    image: "https://i.pravatar.cc/100?img=5",
    text: "Thank you for all your help. Your service was excellent and very FAST. I will surely recommend you to my friends.",
  },
  {
    name: "Thais Carballal",
    username: "@myself.thais",
    image: "https://i.pravatar.cc/100?img=6",
    text: "For our recent trip to S.A., I booked several accommodations through SA Places. Everything worked out perfectly with the bookings, and your booking was quick and professional.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#FFFCF7] py-24 overflow-hidden">
      <div className="w-11/12 lg:w-9/12 mx-auto text-center">
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What client say about us
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Customer testimonial
        </motion.p>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-500">{item.username}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
