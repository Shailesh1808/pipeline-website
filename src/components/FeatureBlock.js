import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureBlock({ title, description, image, reverse }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center justify-between my-12 sm:my-16 md:my-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Text Section */}
      <div className="md:w-1/2 px-4 sm:px-6 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-[#FFFDD0] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center px-4 sm:px-6 mt-6 md:mt-0">
        <Image
          src={image}
          alt={title}
          width={500}
          height={320}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </motion.div>
  );
}
