function WhatIDo() {
    return (
        <div className="mx-auto max-w-[1248px] pt-28 md:pt-36 px-6 md:px-10" id="whatido">
            <p className="text-center font-semibold text-xl text-description mb-5">Passion led us here</p>
            <h2 className="text-center text-5xl font-semibold mb-14">What I do</h2>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                <div className="rounded-3xl flex-1 bg-coal">
                    <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                        <img src="/illustrations/bug.png" className="max-w-[120px] mb-6" />
                        <h3 className="text-3xl font-semibold mb-4">Penetration Tests</h3>
                        <p>I Pentest systems to uncover vulnerabilities, report them and fortify defenses to protect digital assets from potential cyber threats.</p>
                    </div>
                </div>
                <div className="rounded-3xl flex-1 bg-coal">
                    <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                        <img src="/illustrations/web.png" className="max-w-[120px] mb-6" />
                        <h3 className="text-3xl font-semibold mb-4">Web Development</h3>
                        <p>I specialize in developing robust, performant and dynamic websites. Whether we are talking about design, front or backend.</p>
                    </div>
                </div>
                <div className="rounded-3xl flex-1 bg-coal">
                    <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                        <img src="/illustrations/desktop.png" className="max-w-[120px] mb-6" />
                        <h3 className="text-3xl font-semibold mb-4">Desktop Apps</h3>
                        <p>With a focus on crafting intuitive interfaces and robust functionalities, I can also create desktop applications that prioritize security.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIDo;
