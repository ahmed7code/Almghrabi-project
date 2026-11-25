import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Omar Al-Harbi",
    role: "Product Manager at CloudScale",
    feedback:
      "Ahmed translated our product vision into a fast, responsive React interface ahead of schedule. His attention to layout details and UI polish stood out immediately.",
    rating: 5,
  },
  {
    id: 2,
    name: "Layla Mansour",
    role: "Founder at Studio North",
    feedback:
      "Working with Ahmed was smooth from day one. He turned our Figma concepts into clean, maintainable components with subtle animations that elevated the whole user experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tariq Al-Qahtani",
    role: "Tech Lead at FinPulse",
    feedback:
      "Reliable, detail-oriented, and great with modern frontend tooling. Our landing page and dashboard components performed cleanly across desktop and mobile screens.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 scroll-mt-24 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Client <span className="text-[#10b981]">Testimonials</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          Feedback from collaborators and clients I have worked with on web
          interfaces and frontend builds.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
            className="group bg-[#121212] border border-zinc-800/80 rounded-2xl p-7 flex flex-col justify-between transition-colors duration-300 hover:border-[#10b981]/50 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.2)]"
          >
            <div>
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg text-[#10b981] group-hover:bg-[#10b981]/10 group-hover:border-[#10b981]/40 transition-colors">
                  <FaQuoteLeft />
                </div>

                <div
                  className="flex items-center gap-1 text-[#10b981] text-sm"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                “{item.feedback}”
              </p>
            </div>

            {/* Client Info */}
            <div className="pt-4 border-t border-zinc-800/80">
              <h3 className="font-bold text-base text-white group-hover:text-[#10b981] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;