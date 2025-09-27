const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a3a] to-[#050522] text-white border-t border-gray-700 px-6 md:px-20 pt-12 pb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start max-w-6xl mx-auto">
        
        {/* Logo / Name */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-bold">Pipeline®</h1>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-12 text-sm text-center md:text-left">
          
          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2">Platform</h3>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:text-[#FFFDD0]">Features</a></li>
              <li><a href="#industries" className="hover:text-[#FFFDD0]">Industries</a></li>
              <li><a href="#insights" className="hover:text-[#FFFDD0]">Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:text-[#FFFDD0]">About</a></li>
              <li><a href="#team" className="hover:text-[#FFFDD0]">Team</a></li>
              <li><a href="#blogs" className="hover:text-[#FFFDD0]">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li><a href="mailto:contact@ganess.tech" className="hover:text-[#FFFDD0]">Email</a></li>
              <li><a href="https://twitter.com/PipelineAI25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFDD0]">X</a></li>
              <li><a href="https://instagram.com/pipelineai_25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFDD0]">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
