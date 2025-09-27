import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaUser, FaInfoCircle } from "react-icons/fa";

export default function TeamMember({ image, name, role, bio, linkedin }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-96 h-[560px] relative"
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Flippable Top Half */}
      <motion.div
        className="relative w-full h-80"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side → Image */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt={name}
            width={384}
            height={320}
            className="rounded-md object-cover w-full h-full"
          />
        </div>

        {/* Back Side → Bio */}
        <div
          className="absolute w-full h-full bg-[#000026] p-5 rounded-md flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-base text-[#FFFDD0] leading-relaxed text-left overflow-y-auto max-h-full">
            {bio}
          </p>
        </div>
      </motion.div>

      {/* Static Bottom Section */}
      <div className="mt-3 text-center">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-base text-[#A4BBDD]">{role}</p>
      </div>

      {/* Static Buttons Row */}
      <div className="flex justify-between items-center mt-2 px-1">
        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A4BBDD] hover:text-[#FFFDD0] cursor-pointer"
        >
          <FaLinkedin size={20} />
        </a>
        {/* Toggle Bio/Profile */}
        {!isFlipped ? (
          <button
            onClick={() => setIsFlipped(true)}
            className="flex items-center gap-1 text-[#A4BBDD] hover:text-[#FFFDD0] cursor-pointer text-base"
          >
            <FaInfoCircle size={16} /> Bio
          </button>
        ) : (
          <button
            onClick={() => setIsFlipped(false)}
            className="text-[#A4BBDD] hover:text-[#FFFDD0] cursor-pointer"
          >
            <FaUser size={20} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
