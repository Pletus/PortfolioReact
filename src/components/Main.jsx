import React from "react";
import myFoto from "../assets/imgs/Photo 2.jpg";
import htmlIcon from "../assets/icons/html-5-svgrepo-com.svg";
import cssIcon from "../assets/icons/css-3-svgrepo-com.svg";
import javaScriptIcon from "../assets/icons/javascript-svgrepo-com.svg";
import reactIcon from "../assets/icons/react-svgrepo-com.svg";
import nodeIcon from "../assets/icons/Node.js.svg";
import expressIcon from "../assets/icons/Express.svg";
import tailwindIcon from "../assets/icons/tailwind-svgrepo-com.svg";
import mongoIcon from "../assets/icons/mongodb-svgrepo-com.svg";
import githubIcon from "../assets/icons/icons8-github-96.png";
import linkedinIcon from "../assets/icons/icons8-linkedin-96.png";
import linkedinIcon2 from "../assets/icons/linkedin2.png";
import emailIcon from "../assets/icons/gmail.png";
import mapsIcon from "../assets/icons/google-maps2.png";
import linkIcon from "../assets/icons/external-link-svgrepo-com.svg";
import "../App.css";

function Main() {
  return (
    <div>
      <section className="max-w-2xl px-12 md:px-7 mx-auto flex flex-col md:flex-row justify-center items-center mt-24 md:mt-24 mb-10 md:mb-28">
        <div className="flex flex-col items-center gap-2">
          <div className="p-2">
            <h1 className="text-black navlinks text-4xl text-center md:text-left lg:text-left">
              Full-Stack Web Developer
            </h1>
            <p className="md:max-w-80 text-sm text-black h3 text-center md:text-left lg:text-left mt-4">
              Hi, I'm Yago, a Berlin-based web developer, focused on delivering
              high-quality websites.
            </p>
          </div>
          <div className="flex flex-wrap md:p-2 md:mt-5 gap-2 md:gap-4">
            <div className="flex gap-2 md:gap-4">
              <img
                className="ts-icons duration-500"
                src={htmlIcon}
                alt="HTML"
              />
              <img className="ts-icons duration-500" src={cssIcon} alt="CSS" />
            </div>
            <div className="flex gap-2 md:gap-4">
              <img
                className="ts-icons duration-500"
                src={javaScriptIcon}
                alt="JavaScript"
              />
              <img
                className="ts-icons duration-500"
                src={reactIcon}
                alt="React"
              />
            </div>
            <div className="flex gap-2 md:gap-4">
              <img
                className="ts-icons duration-500"
                src={nodeIcon}
                alt="Node"
              />
              <img
                className="ts-icons duration-500"
                src={expressIcon}
                alt="Express"
              />
            </div>
            <div className="flex gap-2 md:gap-4">
              <img
                className="ts-icons duration-500"
                src={tailwindIcon}
                alt="Tailwind"
              />
              <img
                className="ts-icons duration-500"
                src={mongoIcon}
                alt="MongoDB"
              />
            </div>
          </div>
        </div>
        <div className="flex md:items-center justify-center md:justify-end max-w-60 mt-4">
          <img className="foto" src={myFoto} alt="Yago´s Photo" />
        </div>
      </section>
      <section
        id="projects"
        className="w-auto bg-white flex flex-col justify-center"
      >
        <div className="max-w-2xl px-12 md:px-7 pt-8 md:pt-12 mb-12 md:mb-20 mx-auto">
          <h5 className="text-black h3 md:mb-20 lg:mb-4 text-4xl pt-4 text-center md:text-left">
            Projects
          </h5>
          <img
            className="mt-12 radius"
            src="https://i.imgur.com/Z3cvyZP.png"
            alt="Freebie It Project"
          />
          <div className="flex items-center justify-between mt-5">
            <h4 className="text-black h3 font-medium text-2xl">
              Reduce, Reuse, Rehome
            </h4>
            <div className="flex flex-row justify-center items-center gap-1">
              <img
                className="external-link-icon"
                src={linkIcon}
                alt="link icon"
              />
              <a
                className="text-black text-sm h3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://freebie-it.netlify.app/"
              >
                open website
              </a>
            </div>
          </div>
          <p className="text-black h3 text-xs mt-3">
            A social network built with the MERN Stack, enabling users to share
            and discover locations where unwanted items are left on the street
            for reuse, promoting sustainability and reducing waste.
          </p>
          <img
            className="mt-12 radius"
            src="https://i.imgur.com/Si1Et1Y.png"
            alt="Pokemon Project"
          />
          <div className="flex items-center justify-between mt-3">
            <h4 className="text-black h3 font-medium text-2xl">
              Find your Pokemon!
            </h4>
            <div className="flex flex-row items-center gap-1">
              <img
                className="external-link-icon"
                src={linkIcon}
                alt="link icon"
              />
              <a
                className="text-black text-sm h3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cute-crostata-59eac6.netlify.app/"
              >
                open website
              </a>
            </div>
          </div>
          <p className="text-black h3 text-xs mt-3">
            A Pokémon battle and Pokédex search app built with React, Node.js,
            Tailwind CSS, and PostgreSQL. Users can explore Pokémon details,
            simulate battles, and enjoy a dynamic, interactive interface.
          </p>
        </div>
      </section>
      <section
        id="about"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="max-w-2xl px-7 pt-12 mb-28 mx-auto">
          <h5 className="text-black h3 mb-20 lg:mb-4 text-4xl pt-4 text-left">
            About me
          </h5>
          <p className="text-black h3 pt-4 text-sm text-center md:text-left lg:text-left">
            As a Full-Stack Developer, I am passionate about building seamless
            websites and applications. I have experience with frontend
            technologies like TailwindCSS, HTML, CSS, JavaScript, and React, as
            well as backend tools like Node.js, Express, MySQL, and MongoDB,
            creating responsive and scalable solutions.
          </p>
          <img
            className="radius2 mt-8"
            src="https://i.imgur.com/CIeIZak.png"
            alt="desktop-img"
          />
        </div>
      </section>
      <section id="contact" className="bg-white w-full">
        <div className="max-w-2xl px-7 pt-12 pb-20 mx-auto">
          <h5 className="text-black h3 mb-20 lg:mb-4 text-4xl pt-4 text-left">
            Say hi!
          </h5>
          <div className="flex flex-col md:flex-row justify-between pt-3">
            <div className="flex flex-col">
              <img
                className="ts-icons2 duration-700"
                src={emailIcon}
                alt="E-mail"
              />
              <h6 className="text-black h3 text-md pt-3 text-left font-medium text-sm">
                Write to:
              </h6>
              <p className="text-black h3 text-md text-sm text-left">
                yagopb@gmail.com
              </p>
            </div>
            <div>
              <img
                className="ts-icons2 duration-700"
                src={linkedinIcon2}
                alt="Linkedin"
              />
              <h6 className="text-black h3 text-md pt-3 text-left font-medium text-sm">
                Find me at:
              </h6>
              <p className="text-black h3 text-md text-sm text-left">
                yagopb@gmail.com
              </p>
            </div>
            <div>
              <img
                className="ts-icons2 duration-700"
                src={mapsIcon}
                alt="Location"
              />
              <h6 className="text-black h3 text-md pt-3 text-left font-medium text-sm">
                Located at:
              </h6>
              <p className="text-black h3 text-md text-sm text-left">
                Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black">
        <div className="max-w-2xl px-7 pt-20 pb-20 mx-auto flex justify-between items-center flex-col md:flex-row">
          <h4 className="text-white h3 text-sm text-center md:text-left lg:text-left">
            Copyright © 2024. All rights are reserved
          </h4>
          <div className="flex gap-4">
            <a
              href="http://www.linkedin.com/in/yagopb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="ts-icons duration-700"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
            <a
              href="http://github.com/Pletus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="ts-icons duration-700"
                src={githubIcon}
                alt="github"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
