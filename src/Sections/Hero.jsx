function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row justify-between mx-auto max-w-[1248px] pt-14 md:pt-28 px-6 md:px-10">
            <div className="max-w-xl">
                <p className="text-xl text-description">Hi, my name is Tobi.</p>
                <h1 className="text-4xl md:text-6xl font-bold my-5 md:leading-[75px]">I do Pentests & develop Software</h1>
                <p className="text-xl text-description mb-9">
                    I’m a Penetration Tester with a networking background. Alongside I develop both web and desktop applications using best practices to ensure
                    security and scaleability.
                </p>
                <a className="inline-block rounded-3xl bg-coal cursor-pointer" href="#contact__section">
                    <span className="block w-full h-full bg-sandstorm border border-coal px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                        Get in touch
                    </span>
                </a>
            </div>
            <div className="w-1/2 md:w-full mt-12 md:mt-0 mx-auto flex items-center justify-center">
                <img src="/illustrations/character.png" />
            </div>
        </section>
    );
}

export default HeroSection;
