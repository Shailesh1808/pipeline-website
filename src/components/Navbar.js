import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // trigger after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000026]/95 shadow-md border-b border-[#1a1a40]"
          : "bg-[#000026]"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-8">
        {/* Logo (click to go home) */}
        <Link href="/" replace>
          <span className="text-white font-bold text-[22px] sm:text-[25px] tracking-[-0.01em] font-inter cursor-pointer">
            Pipeline®
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          <Link href="#about" scroll={true}>
            <span className="text-[#FFFDD0] font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] cursor-pointer">
              About
            </span>
          </Link>
          <Link href="#industries" scroll={true}>
            <span className="text-[#FFFDD0] font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] cursor-pointer">
              Industries
            </span>
          </Link>
          <Link href="#insights" scroll={true}>
            <span className="text-[#FFFDD0] font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] cursor-pointer">
              Insights
            </span>
          </Link>
          <Link href="#team" scroll={true}>
            <span className="text-[#FFFDD0] font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] cursor-pointer">
              Team
            </span>
          </Link>
          <Link href="#contact" scroll={true}>
            <span className="text-[#FFFDD0] font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#FFFDD0] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#000026] px-6 pb-6 space-y-4 text-center">
          <Link href="#about" scroll={true}>
            <span className="block text-[#FFFDD0] font-medium text-[16px] tracking-[-0.01em] cursor-pointer">
              About
            </span>
          </Link>
          <Link href="#industries" scroll={true}>
            <span className="block text-[#FFFDD0] font-medium text-[16px] tracking-[-0.01em] cursor-pointer">
              Industries
            </span>
          </Link>
          <Link href="#insights" scroll={true}>
            <span className="block text-[#FFFDD0] font-medium text-[16px] tracking-[-0.01em] cursor-pointer">
              Insights
            </span>
          </Link>
          <Link href="#team" scroll={true}>
            <span className="block text-[#FFFDD0] font-medium text-[16px] tracking-[-0.01em] cursor-pointer">
              Team
            </span>
          </Link>
          <Link href="#contact" scroll={true}>
            <span className="block text-[#FFFDD0] font-medium text-[16px] tracking-[-0.01em] cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
