import { motion } from "framer-motion";
import Tag from "../Components/Tag";

function FeaturedProjects() {
  return (
    <section className="pt-24 md:pt-32" id="projects">
      <motion.h2
        className="text-center text-5xl font-semibold mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
      >
        Featured projects
      </motion.h2>

      <div className="flex flex-col sm:flex-row w-screen">
        <div className="sm:w-1/2 bg-[url(/images/talking_chatgpt.png)] bg-cover bg-center bg-no-repeat brightness-95 hover:brightness-75 duration-300 min-h-[400px] md:min-h-[70vh]"></div>
        <div className="flex flex-col justify-center sm:w-1/2 bg-white p-8 sm:p-12">
          <div className="max-w-5xl mr-auto">
            <motion.div
              className="flex mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <Tag text="JavaScript" color="sandstorm" />
              <Tag text="HTML" color="red-400" />
              <Tag text="CSS" color="sky-400" />
            </motion.div>
            <motion.h3
              className="text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Talking ChatGPT Extension
            </motion.h3>
            <motion.p
              className="text-description text-xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Convert your speech into text so you can have a real conversation with (a talking) ChatGPT. <br /> This
              extension is ideal for anyone who needs to quickly convert spoken words into written text.
            </motion.p>
            <motion.a
              className="text-lg font-semibold group hover:text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
              href="https://chrome.google.com/webstore/detail/talking-chatgpt/dppbeenbobngogcdfnocicajiegcofmo"
              target="_blank"
              rel="noopener"
            >
              Visit Extension <span className="duration-300 group-hover:ml-2">→</span>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row w-screen">
        <div className="flex flex-col justify-center sm:w-1/2 bg-white p-8 sm:p-12">
          <div className="max-w-5xl ml-auto">
            <motion.div
              className="flex mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <Tag text="Next.js" color="fuchsia-400" />
              <Tag text="Node.js" color="green-400" />
              <Tag text="MongoDB" color="lime-400" />
            </motion.div>
            <motion.h3
              className="text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Sycheats
            </motion.h3>
            <motion.p
              className="text-description text-xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Sycheats was a former platform for sharing and downloading cheats for video games. All cheats were tested
              for malware, authentication was handled using JWTs (Access + Refresh Tokens) and Redis.
            </motion.p>
            <motion.p
              className="text-lg font-semibold text-gray-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
              href="#"
              rel="noopener"
            >
              Website is closed
            </motion.p>
          </div>
        </div>
        <div className="sm:w-1/2 bg-[url(/images/sycheats.png)] bg-cover bg-center bg-no-repeat brightness-95 hover:brightness-75 duration-300 min-h-[400px] md:min-h-[70vh]"></div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
