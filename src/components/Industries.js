import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const industries = [
  {
    title: "MedTech",
    description: "Regulated by HIPAA, FDA regulations for medical devices",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Aerospace",
    description: "Adhering to DO-178C, military-grade security standards",
    image: "/images/aerospace.png",
  },
  {
    title: "Automotive",
    description: "Regulated by ISO 26262, UNECE WP.29 for cybersecurity",
    image: "/images/automotive.png",
  },
  {
    title: "Home Automation / IoT",
    description: "Aligned with NIST IoT, Matter, and privacy frameworks",
    image: "/images/placeholder.jpg",
  },
];

export default function Industries() {
  const controls = useAnimation();

  useEffect(() => {
    // Adjust scroll speed by screen width
    const speed = window.innerWidth < 768 ? 12 : 25; // faster on mobile

    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: speed,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section
      id="industries"
      className="pt-16 pb-12 px-6 relative scroll-mt-24 bg-robot-arm"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#A4BBDD]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Industries We Serve
        </motion.h2>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#000026] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#000026] to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center justify-center"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {[...industries, ...industries].map((industry, idx) => (
            <div
              key={idx}
              className="min-w-[320px] flex-shrink-0 text-center flex flex-col items-center"
            >
              {/* Fixed-size image container */}
              <div className="w-[350px] h-[200px] relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white uppercase max-w-[350px]">
                {industry.title}
              </h3>
              <p className="text-base font-medium leading-snug text-[#FFFDD0] mt-2 max-w-[350px]">
                {industry.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
