import { motion } from "framer-motion";
import { calculateAge, getYearsSince } from "../helpers/date";

const birthday = new Date('2007-01-01'); // Birthday
const startedCoding = new Date('2019-01-01'); // Started coding
const startedPentesting = new Date('2022-06-01'); // Started pentesting

function AboutMe() {
    return (
        <section className="flex flex-col xl:flex-row h-full mx-10 xl:mx-40" id="aboutme">
            <div className="xl:w-3/5 p-6 md:p-12 bg-white">
                <motion.h2 
                    className="text-5xl font-semibold mb-7"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                >
                    About me
                </motion.h2>
                <div className="text-lg">          
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                        Hi! I’m Tobias Scharl, a {calculateAge(birthday)} year old based in Germany, software developer and penetration tester.
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                        I’m a very passionate and curious person, especially when it comes to thinking about solving problems.
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                        It all began {getYearsSince(startedCoding)} years ago, where I developed my interest for coding websites using <span className="px-1 py-0.5 bg-[#fcf4ee]">HTML, CSS and JS.</span>
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                        The problem: they were static. That’s where <span className="px-1 py-0.5 bg-[#fcf4ee]">PHP, Node.js, React.js and later on Next.js</span> came into play.
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                    Saving data in one big text file is bad, that’s why I learned to manage databases such as <span className="px-1 py-0.5 bg-[#fcf4ee]">MySQL and MongoDB</span> with large amounts of data. 
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                    But requesting the same data from a database every single request is also not ideal - caching and optimizing are the two buzzwords. <span className="px-1 py-0.5 bg-[#fcf4ee]">Redis</span> came for the help!
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                    And here we are, mid {startedPentesting.getFullYear()}. Everyone is talking about bitcoin, hackers and the rise of AI. That’s the moment I wanted to find out more about hacking and ever since started persuing my pentesting career.
                    </motion.p>
                    <motion.p 
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}    
                    >
                        <span className="px-1 py-0.5 bg-[#fcf4ee]">Reconnaissance, finding vulnerabilities and securing servers</span> are now part of my daily life. It’s stunning how much you can learn.
                    </motion.p>
                </div>
            </div>
            <div className="w-full xl:w-3/5 bg-[url(/images/robot_painting.png)] bg-cover bg-center bg-[#d8cded] bg-no-repeat min-h-[500px] xl:min-h-[1000px]" />
        </section>
    );
}

export default AboutMe;
