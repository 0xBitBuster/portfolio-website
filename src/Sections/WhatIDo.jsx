import { motion } from "framer-motion";

function WhatIDo() {
  return (
    <div className="mx-auto max-w-[1248px] pt-28 md:pt-36 px-6 md:px-10" id="whatido">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="text-center font-semibold text-xl text-description mb-5"
      >
        Passion led us here
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "backOut" }}
        className="text-center text-5xl font-semibold mb-14"
      >
        What I do
      </motion.h2>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/book.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Book Writing</h3>
            <p>
              I write easy-to-follow web development books for beginners, making learning fun and practical.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/web.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Web Development</h3>
            <p>
              I specialize in developing robust, performant and dynamic websites. Whether we are talking about design,
              front or backend.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/desktop.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Desktop Apps</h3>
            <p>
              With a focus on crafting intuitive interfaces and robust functionalities, I can also create desktop
              applications that prioritize security.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhatIDo;
