// src/components/FeatureBlock.js
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureBlock({ title, description, image, reverse }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center justify-between my-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Text Section */}
      <div className="md:w-1/2 px-6 text-center md:text-left">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#FFFDD0] text-lg leading-relaxed">{description}</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center px-6 mt-8 md:mt-0">
        <Image
          src={image}
          alt={title}
          width={420}   // larger image width
          height={260}  // larger image height
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}
