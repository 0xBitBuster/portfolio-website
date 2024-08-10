import { useEffect, useRef } from "react";
import { throttle } from "lodash";
import { motion } from "framer-motion";

function HeroSection() {
  const characterRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", throttle(handleMouseMovement, 10));

    return () => window.removeEventListener("mousemove", handleMouseMovement);
  }, []);

  const handleMouseMovement = (e) => {
    const rect = characterRef.current.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    leftEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
    rightEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
  };

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  return (
    <section className="flex flex-col md:flex-row justify-between mx-auto max-w-[1248px] pt-14 md:pt-28 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="max-w-xl"
      >
        <p className="text-xl text-description">Hi, my name is Tobi.</p>
        <h1 className="text-4xl md:text-6xl font-bold my-5 md:leading-[75px]">I do Pentests & develop Software</h1>
        <p className="text-xl text-description mb-9">
          I’m a Penetration Tester with a networking background. Alongside I develop both web and desktop applications
          using best practices to ensure security and scaleability.
        </p>
        <a className="inline-block rounded-3xl bg-coal cursor-pointer" href="#contact">
          <span className="block w-full h-full bg-sandstorm border border-coal px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            Get in touch
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-1/2 md:w-full mt-12 md:mt-0 mx-auto flex items-center justify-center"
      >
        <div className="relative">
          <img src="/illustrations/character.png" alt="" className="select-none" ref={characterRef} />
          <img
            src="/illustrations/character_eye.png"
            alt=""
            className="absolute top-[43%] left-[40%] select-none w-[10%] md:w-[7%] lg:w-auto"
            ref={leftEyeRef}
          />
          <img
            src="/illustrations/character_eye.png"
            alt=""
            className="absolute top-[43%] right-[36%] select-none w-[10%] md:w-[7%] lg:w-auto"
            ref={rightEyeRef}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
