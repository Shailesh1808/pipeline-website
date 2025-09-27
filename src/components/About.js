import FeatureBlock from "./FeatureBlock";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiClipboardList,
  HiMap,
  HiLockClosed,
  HiUsers,
  HiClock,
  HiCubeTransparent,
  HiLightningBolt,
} from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-24 px-6 scroll-mt-24 bg-robot-arm bg-lock-left"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-[#A4BBDD] leading-snug">
          Built for Highly Regulated Industries. <br />
          Ready for Fast, Accurate Compliance. <br />
          Streamlined Security for Manufacturers.
        </h2>
      </div>

      {/* Feature Blocks */}
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <FeatureBlock
          title="Automated threat modeling."
          description="Upload documentation or system details to generate interactive, component-level threat models instantly."
          image="/images/placeholder.jpg"
          reverse={false}
        />

        <FeatureBlock
          title="Curated pentest planning."
          description="Every component generates plain-English test plans, CVSS scoring, tool suggestions, and pass/fail templates."
          image="/images/pentest-planning.jpg"
          reverse={true}
        />

        <FeatureBlock
          title="Dynamic compliance mapping."
          description="All test cases are mapped to region and industry standards: MIL-STD, DO-178C, ISO 26262, HIPAA, UNECE WP.29, and more."
          image="/images/compliance-mapping.png"
          reverse={false}
        />
      </div>

      {/* Icon Grid */}
      <div className="max-w-5xl mx-auto mt-16 md:mt-20">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div>
            <HiShieldCheck className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              AI Security
            </p>
          </div>
          <div>
            <HiClipboardList className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Pentest Planning
            </p>
          </div>
          <div>
            <HiMap className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Compliance Map
            </p>
          </div>
          <div>
            <HiLockClosed className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Secure Data
            </p>
          </div>
          <div>
            <HiUsers className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Team Friendly
            </p>
          </div>
          <div>
            <HiClock className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Timeline View
            </p>
          </div>
          <div>
            <HiCubeTransparent className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Interactive Models
            </p>
          </div>
          <div>
            <HiLightningBolt className="w-10 h-10 mx-auto mb-2 text-[#A4BBDD]" />
            <p className="text-[#FFFDD0] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Fast Setup
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
