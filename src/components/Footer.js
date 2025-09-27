const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0a0a3a] to-[#050522] text-white border-t border-gray-700 px-6 md:px-20 pt-12 pb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start max-w-6xl mx-auto w-full">
        
        {/* Logo / Name */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-bold">Pipeline®</h1>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-8 sm:gap-12 text-sm text-center md:text-left w-full md:w-auto">
          
          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2 text-base">Platform</h3>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:text-[#FFFDD0] block">Features</a></li>
              <li><a href="#industries" className="hover:text-[#FFFDD0] block">Industries</a></li>
              <li><a href="#insights" className="hover:text-[#FFFDD0] block">Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2 text-base">Company</h3>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:text-[#FFFDD0] block">About</a></li>
              <li><a href="#team" className="hover:text-[#FFFDD0] block">Team</a></li>
              <li><a href="#blogs" className="hover:text-[#FFFDD0] block">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#A4BBDD] font-semibold mb-2 text-base">Contact</h3>
            <ul className="space-y-1">
              <li><a href="mailto:contact@ganess.tech" className="hover:text-[#FFFDD0] block">Email</a></li>
              <li><a href="https://twitter.com/PipelineAI25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFDD0] block">X</a></li>
              <li><a href="https://instagram.com/pipelineai_25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFDD0] block">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Pipeline®. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
