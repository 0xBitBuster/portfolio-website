function Contact() {
    return (
        <section className="flex flex-col items-center my-20 px-8" id="contact">
            <h2 className="text-5xl font-bold mb-16">Get in touch.</h2>
            <div className="flex flex-col sm:flex-row items-center mb-28">
                <div className="relative w-full sm:w-1/2 mb-16 sm:mb-0 sm:mt-10 sm:mr-12 h-52">
                    <div className="absolute w-40 h-40 border-2 border-[#a5a58d] right-12 -rotate-[3deg]"></div>
                    <div className="absolute w-40 h-40 border-2 border-[#a5a58d] right-20 -rotate-[20deg]"></div>
                    <div className="absolute w-40 h-40 border-2 border-[#a5a58d] right-52 -rotate-[40deg] translate-y-10"></div>
                    <div className="absolute w-40 h-40 border-2 border-[#a5a58d] right-72 -rotate-[60deg] translate-y-20"></div>
                </div>
                <div className="sm:w-1/2">
                    <p className="text-lg font-light mb-8">I am always open to discuss your project, pentest your applications or answer your questions.</p>
                    <p className="text-description">Email me at</p>
                    <a className="text-lg font-semibold" href="">ScharlT.coding@gmail.com</a>
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
