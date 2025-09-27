import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Gourisha Sethi",
    role: "CEO / Founder",
    image: "/images/Gourisha.jpg",
    linkedin: "https://linkedin.com/in/qourisha",
    bio: "Founder of Pipeline Securities with expertise in AI security, compliance, and penetration testing. BITS Pilani and Johns Hopkins graduate with experience at Harbor Labs, Deep Armor, Viatris, and LoginSoft, securing FDA-regulated medical devices, designing AI-embedded threat models, and leading high-stakes security engagements."
  },
  {
    name: "Akash Gupta",
    role: "Head of Research & Technology",
    image: "/images/Akash.jpg",
    linkedin: "https://linkedin.com/in/akash",
    bio: "Cybersecurity specialist with 6+ years in penetration testing and threat intelligence. Experience at Fidelity Investments, Pentest People, and NetEnrich, delivering API, mobile, web, and infrastructure security assessments and developing automation for attack surface monitoring and vulnerability scanning."
  },
  {
    name: "Ashwin Srinivasa Ramanujan",
    role: "Founding Engineer",
    image: "/images/Ashwin.jpg",
    linkedin: "https://linkedin.com/in/ashwin",
    bio: "Cybersecurity practitioner and software engineer with hands-on experience in penetration testing, V2X system security, and AI vulnerability analysis. Skilled across offensive and defensive security, from IoT and automotive testing to building secure ML pipelines and encrypted cloud solutions. Also an accomplished researcher with two published papers at Springer and IGI Global."
  },
  {
    name: "Shailesh Rajendran",
    role: "Founding Engineer",
    image: "/images/Shailesh.jpg",
    linkedin: "https://linkedin.com/in/shailesh",
    bio: "Security-focused engineer and researcher with expertise spanning secure software development, penetration testing, and applied AI in cybersecurity. With hands-on experience securing V2X networks, medical devices, he has delivered impactful solutions such as reducing vulnerabilities at Versa Networks, developing a neural network–based IDS, and leading SSDLC for FDA-compliant healthcare devices."
  },
  {
    name: "Haran Ravindran",
    role: "AI/ML Lead",
    image: "/images/Haran.jpg",
    linkedin: "https://linkedin.com/in/haran",
    bio: "Senior ML Engineer at Kunato with expertise in building production-grade AI systems for cybersecurity analytics. Previous experience at Kloudle, NetEnrich, ICICI Bank, and Continental, focusing on anomaly detection, reinforcement learning, and NLP for real-time applications."
  },
  {
    name: "Alaukik Gupta",
    role: "Business Lead",
    image: "/images/Alaukik.jpg",
    linkedin: "https://linkedin.com/in/alaukik",
    bio: "Business analyst and product strategist with experience in MedTech innovation, GTM planning, and fundraising. Roles at NobleReach, Thermaquil, Texas Health Catalyst, and Fogarty Innovation, with background in product development, and partnerships."
  },
];

// Helper to chunk into rows automatically
const chunkMembers = (members) => {
  if (members.length === 6) {
    return [[members[0]], members.slice(1, 4), members.slice(4, 6)];
  }
  if (members.length === 5) {
    return [[members[0]], members.slice(1, 3), members.slice(3, 5)];
  }
  if (members.length === 7) {
    return [[members[0]], members.slice(1, 4), members.slice(4, 7)];
  }
  // Fallback → groups of 3
  const size = 3;
  const rows = [];
  for (let i = 0; i < members.length; i += size) {
    rows.push(members.slice(i, i + size));
  }
  return rows;
};

export default function Team() {
  const grouped = chunkMembers(teamMembers);

  return (
  <section 
    id = "team"
    className="text-white pt-20 pb-8 px-6 md:px-20 scroll-mt-24 bg-robot-arm bg-lock-left">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFFDD0]">
      Meet the Team
    </h2>

    {grouped.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="flex justify-center gap-x-12 mb-1 flex-wrap"
      >
        {row.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    ))}
  </section>
);
}
