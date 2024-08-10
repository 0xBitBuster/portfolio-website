import { useEffect, useState } from "react";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isToggled ? "hidden" : "auto";
  }, [isToggled]);

  return (
    <nav className="flex items-center justify-between px-10 my-6 mx-auto max-w-[1248px]">
      <div>
        <img src="/logo.png" alt="BitBuster" className="max-w-[220px] hover:opacity-90" />
      </div>
      <div>
        <div className="hidden md:flex space-x-7 text-lg font-semibold underline-offset-8">
          <a className="cursor-pointer hover:underline" href="#aboutme">
            About
          </a>
          <a className="cursor-pointer hover:underline" href="#whatido">
            What I Do
          </a>
          <a className="cursor-pointer hover:underline" href="#projects">
            My Work
          </a>
          <a className="cursor-pointer hover:underline" href="#contact">
            Contact
          </a>
        </div>
        <div className="md:hidden relative z-20">
          <button className="flex flex-col space-y-1.5" onClick={() => setIsToggled(!isToggled)} aria-label="Menu">
            <span className={`w-8 h-1 rounded bg-coal duration-300 origin-top-left ${isToggled ? "rotate-45" : ""}`}></span>
            <span className={`w-6 h-1 rounded bg-coal duration-300 block ml-auto ${isToggled ? "opacity-0" : ""}`}></span>
            <span className={`w-8 h-1 rounded bg-coal duration-300 origin-bottom-left ${isToggled ? "-rotate-45" : ""}`}></span>
          </button>
        </div>
        <div
          className={`z-10 fixed top-0 h-screen w-screen bg-white flex flex-col items-center justify-center space-y-10 text-2xl font-semibold underline-offset-8 ${
            isToggled ? "left-0" : "left-full"
          } duration-500`}
        >
          <a className="cursor-pointer hover:underline" href="#aboutme" onClick={() => setIsToggled(!isToggled)}>
            About
          </a>
          <a className="cursor-pointer hover:underline" href="#whatido" onClick={() => setIsToggled(!isToggled)}>
            What I Do
          </a>
          <a className="cursor-pointer hover:underline" href="#projects" onClick={() => setIsToggled(!isToggled)}>
            My Work
          </a>
          <a className="cursor-pointer hover:underline" href="#contact" onClick={() => setIsToggled(!isToggled)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
