function AboutMe() {
    return (    
        <section className="flex flex-col md:flex-row" id="aboutme">
            <div className="md:w-1/2 lg:w-2/5 bg-white p-6 sm:p-12">
                <h2 className="text-5xl font-semibold mb-7">About me</h2>
                <p className="text-lg">
                    Hi! I’m Tobias Scharl, a 16 year old based in Germany, software developer, penetration tester and gamer. <br /><br />
                    Currently, I’m focused on learning Penetration testing by getting my hands dirty with HackTheBox’s Academy. <br /><br />
                    I’m a very passionate and curious person, especially when it comes to thinking about solving problems.<br /><br />
                    It all began 4 years ago, where I developed my interest for coding websites using HTML, CSS and JS. <br /><br />
                    The problem: they were static. That’s where PHP, Node.js, React.js and later on Next.js came into play. <br /><br />
                    Saving data in one big text file is bad, that’s why I learned to manage databases such as MySQL and MongoDB with large amounts of data. <br /><br /> But requesting the same data from a database every single request is also not ideal - caching and optimizing are the two buzzwords. Redis came for the help!<br /><br />
                    And here we are, mid 2022. Everyone is talking about bitcoin, hackers and the rise of AI. That’s the moment I wanted to find out more about hacking and ever since started persuing my pentesting career.<br /><br />
                    Reconnaissance, finding vulnerabilities and securing servers are now part of my daily life. It’s stunning how much you can learn.<br /><br />
                </p>
            </div>
            <div className="md:w-1/2 lg:w-3/5 bg-[url(/images/robot_painting.png)] bg-cover bg-center bg-[#d8cded] bg-no-repeat min-h-[400px] md:min-h-[1000px] "></div>
        </section>
    );
}

export default AboutMe;
