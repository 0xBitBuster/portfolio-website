import { motion } from "framer-motion";

function Contact() {
    return (
        <section className="flex flex-col items-center my-20 px-8" id="contact">
            <motion.h2 
                className="text-5xl font-bold mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
                Get in touch.
            </motion.h2>
            <div className="flex flex-col sm:flex-row items-center mb-28">
                <div className="relative w-full sm:w-1/2 mb-16 sm:mb-0 sm:mt-10 sm:mr-12 h-52">
                    <motion.div 
                        initial={{ opacity: 0, right: '0', rotate: 0 }}
                        whileInView={{ opacity: 1, right: '12%', rotate: -3 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
        
                        className="absolute w-40 h-40 border-2 border-[#a5a58d] right-12 -rotate-[3deg]" 
                    />
                    <motion.div 
                        initial={{ opacity: 0, right: '0', rotate: 0 }}
                        whileInView={{ opacity: 1, right: '20%', rotate: -20 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
        
                        className="absolute w-40 h-40 border-2 border-[#a5a58d] right-20 -rotate-[20deg]" 
                    />
                    <motion.div 
                        initial={{ opacity: 0, right: '0', rotate: 0 }}
                        whileInView={{ opacity: 1, right: '52%', rotate: -40, y: 40 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
        
                        className="absolute w-40 h-40 border-2 border-[#a5a58d] right-52 -rotate-[40deg] translate-y-10" 
                    />
                    <motion.div 
                        initial={{ opacity: 0, right: '0', rotate: 0 }}
                        whileInView={{ opacity: 1, right: '72%', rotate: -60, y: 80 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
        
                        className="absolute w-40 h-40 border-2 border-[#a5a58d] right-72 -rotate-[60deg] translate-y-20" 
                    />
                </div>
                <div className="sm:w-1/2">
                    <motion.p 
                        className="text-lg font-light mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        I am always open to discuss your project, pentest your applications or answer your questions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <p className="text-description">
                            Email me at
                        </p>
                        <a className="text-lg font-semibold" href="mailto:ScharlT.coding@gmail.com">ScharlT.coding@gmail.com</a>
                    </motion.div>
                </div>
            </div>
            <footer className="w-full max-w-[1284px] flex items-center justify-end">
                <span className="w-20 h-20 bg-white mr-6"></span>
                <div className="text-lg mr-20">
                    <p>Tobias <br /> Scharl</p>
                </div>
            </footer>
        </section>
    );
}

export default Contact;
