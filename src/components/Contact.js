import { FaInstagram, FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const layoutType = "2x2"; // switch to "1-3" for Framer-style layout

  const contacts = [
    {
      icon: <FaMedium className="text-4xl sm:text-5xl mb-4 text-white" />,
      title: "@PipelineAI_25",
      description: "Follow our weekly Blogs on Medium",
      link: "https://medium.com/@PipelineAI_25",
    },
    {
      icon: <FaInstagram className="text-4xl sm:text-5xl mb-4 text-white" />,
      title: "@pipelineai_25",
      description: "Follow our Instagram for activities and updates",
      link: "https://www.instagram.com/pipelineai_25/?igsh=Ymo2amVzdW5hMTF2#",
    },
    {
      icon: <FaXTwitter className="text-4xl sm:text-5xl mb-4 text-white" />,
      title: "@PipelineAI25",
      description: "Follow us on X to keep up with Cybersecurity news",
      link: "https://x.com/PipelineAI25",
    },
    {
      icon: <MdEmail className="text-4xl sm:text-5xl mb-4 text-white" />,
      title: "contact@ganess.tech",
      description: "Reach out to us via email for business inquiries",
      link: "mailto:contact@ganess.tech",
    },
  ];

  const ContactCard = ({ icon, title, description, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
    >
      {icon}
      <h3 className="text-base sm:text-lg font-semibold mt-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-[220px]">{description}</p>
    </a>
  );

  return (
    <section
      id="contact"
      className="text-white pt-12 pb-20 px-4 sm:px-6 md:px-20 scroll-mt-24 bg-robot-arm bg-lock-left"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 text-[#FFFDD0]">
        Want to learn more about Pipeline?
      </h2>

      {/* Layout Option 1: 2x2 */}
      {layoutType === "2x2" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {contacts.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>
      )}

      {/* Layout Option 2: 1-3 */}
      {layoutType === "1-3" && (
        <div className="max-w-6xl mx-auto space-y-12">
          {/* First row (1 item) */}
          <div className="grid grid-cols-1 place-items-center">
            <ContactCard {...contacts[0]} />
          </div>
          {/* Second row (3 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {contacts.slice(1).map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
