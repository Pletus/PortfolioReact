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
import emailIcon from "../assets/icons/gmail.png";
import pinIcon from "../assets/icons/pin.png";
import linkIcon from "../assets/icons/external-link-svgrepo-com.svg";
import "../App.css";

function Main() {
  return (
    <div>
      <section className="max-w-2xl px-7 mx-auto flex flex-col md:flex-row p-4 justify-center mt-3 md:mt-12 mb-4 md:mb-28">
        <div className="flex flex-col gap-2 mt-4">
          <div className="p-2">
            <h1 className="text-black navlinks text-4xl text-center md:text-left lg:text-left">
              Full-Stack Web Developer
            </h1>
            <p className="md:max-w-80 text-sm text-black h3 text-center md:text-left lg:text-left mt-4">
              Hi, I'm Yago, a Berlin-based web developer, focused on delivering
              high-quality websites.
            </p>
          </div>
          <div className="flex flex-wrap p-2 mt-5 gap-4">
            <div className="flex gap-4">
              <img
                className="ts-icons duration-500"
                src={htmlIcon}
                alt="HTML"
              />
              <img className="ts-icons duration-500" src={cssIcon} alt="CSS" />
            </div>
            <div className="flex gap-4">
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
            <div className="flex gap-4">
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
            <div className="flex gap-4">
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
        <div className="flex items-center justify-end max-w-60">
          <img className="foto" src={myFoto} alt="Yago´s Photo" />
        </div>
      </section>
      <section
        id="projects"
        className="w-full bg-white about flex flex-col justify-center"
      >
        <div className="max-w-2xl px-7 pt-12 mb-20 mx-auto">
          <h5 className="text-black h3 mb-20 lg:mb-4 text-4xl pt-4 text-left">
            Projects
          </h5>
          <div className="image-container">
            <img
              className="mt-12 radius"
              src="https://i.imgur.com/Z3cvyZP.png"
              alt="Freebie It Project"
            />
          </div>
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
              <a className="text-black text-sm h3" href="">
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
              <a className="text-black text-sm h3" href="">
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
        className="w-full about flex flex-col justify-center items-center"
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
      <section
        id="contact"
        className="bg-white w-full"
      >
        <div className="max-w-2xl px-7 mx-auto">
          <h5 className="text-black h3 text-4xl pt-4 text-center md:text-left">
            Contact
          </h5>
          <h4 className="pt-20 text-black h3 text-md pt-4 text-center md:text-left">
            I'd love to hear from you!
          </h4>
          <img className="ts-icons duration-700" src={pinIcon} alt="Location" />
          <h6 className="text-black h3 text-md pt-4 text-left font-semibold">
            Location
          </h6>
          <p className="text-black h3 text-md pt-4 text-left">
            Berlin, Germany
          </p>
          <img className="ts-icons duration-700" src={emailIcon} alt="E-mail" />
          <h6 className="text-black h3 text-md pt-4 text-left font-semibold">
            Mail
          </h6>
          <p className="text-black h3 text-md pt-4 text-left">
            yagopb@gmail.com
          </p>
        </div>
      </section>
      <footer className="bg-black flex flex-col-reverse md:flex-row lg:flex-row justify-between p-12 lg:px-48 md:p-20 xl:px-80 2xl:px-96 pb-2 sm:pb-4 w-full">
        <h4 className="text-white h3 text-md pt-4 text-center md:text-left lg:text-left">
          Copyright © 2024. All rights are reserved
        </h4>
        <div className="flex gap-6 lg:gap-12 xl:gap-16 2xl:gap-32 justify-evenly">
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
      </footer>
    </div>
  );
}

export default Main;
