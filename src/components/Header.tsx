import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              alt="Hieu Nguyen"
              className="w-10 h-10"
            />
          </a>
        </h1>
        <div
          className="relative md:justify-self-center"
        >
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((navOpen) => !navOpen)}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
