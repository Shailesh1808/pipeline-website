import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [showLine2, setShowLine2] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Sequence timing: show line 2 quickly after line 1, then video
  useEffect(() => {
    const line2Timer = setTimeout(() => setShowLine2(true), 1000); // short gap
    const videoTimer = setTimeout(() => setShowVideo(true), 1500); // after line 2 finishes

    return () => {
      clearTimeout(line2Timer);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center text-center px-4 pt-3 scroll-mt-24 bg-robot-arm"
    >
      {/* Line 1 */}
      <h1 className="text-white font-bold text-[40px] tracking-[-0.04em] leading-[1em] font-inter mb-4">
        <Typewriter
          words={["AI-Powered Security & Compliance"]}
          loop={1}
          cursor={false}
          typeSpeed={20}
          delaySpeed={300}
        />
      </h1>

      {/* Line 2 with fade-in */}
      <div
        className={`transition-opacity duration-700 ${
          showLine2 ? "opacity-100" : "opacity-0"
        }`}
      >
        {showLine2 && (
          <h2 className="text-[#A4BBDD] font-bold text-[40px] tracking-[-0.04em] leading-[1em] font-inter">
            <Typewriter
              words={["Purpose-Built for Embedded Devices"]}
              loop={1}
              cursor={false}
              typeSpeed={20}
              delaySpeed={300}
            />
          </h2>
        )}
      </div>

      {/* Demo Video with fade-in */}
      <div
        className={`mt-12 w-full max-w-5xl transition-opacity duration-1000 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          className="w-full rounded-lg shadow-lg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
