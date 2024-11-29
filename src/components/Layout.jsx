import { Outlet } from "react-router-dom";
import { useState, React } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import "../App.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col justify-center">
      <nav className="flex justify-between bg-white px-2 md:px-16 items-center relative">
        <span className="logo text-2xl">Yago Pazos</span>
        <div className="flex flex-row-reverse lg:flex-row">
          <button
            onClick={handleMenuToggle}
            className="lg:hidden text-3xl ml-2"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
          <ul
            className={`flex flex-col lg:flex-row bg-white items-center justify-start transition-all duration-300 overflow-hidden 
          ${
            isMenuOpen ? "max-h-[500px] opacity-100 gap-2" : "max-h-0 opacity-0"
          } 
          lg:max-h-full lg:opacity-100 lg:gap-4 w-full lg:w-auto`}
          >
            {" "}
            <li>
              <a
                className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="navlinks inline-block transform transition-transform duration-300 hover:scale-110"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
