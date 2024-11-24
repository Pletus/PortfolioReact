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
import "../App.css";

function Main() {
  return (
    <div>
      <section className="max-w-4xl px-8 mx-auto flex flex-row p-4 justify-center">
        <div className="flex flex-col gap-2 md:gap-0 lg:gap-0">
          <div>
            <h1 className="text-black navlinks text-5xl text-center md:text-left lg:text-left">
              Full-Stack Web Developer
            </h1>
            <div className="">
              <p className="text-black h3 text-lg text-center md:text-left lg:text-left">
                Hi, I'm Yago, a Berlin-based web developer, focused on
                delivering high-quality websites.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-8 md:gap-8 pl-0 md:pl-4 lg:pl-4 pt-2 md:pt-4 lg:pt-4 justify-center lg:justify-start md:justify-start">
            <div className="flex gap-4 lg:gap-8 md:gap-8">
              <img
                className="ts-icons duration-500"
                src={htmlIcon}
                alt="HTML"
              />
              <img className="ts-icons duration-500" src={cssIcon} alt="CSS" />
            </div>
            <div className="flex gap-4 lg:gap-8 md:gap-8">
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
            <div className="flex gap-4 lg:gap-8 md:gap-8">
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
            <div className="flex gap-4 lg:gap-8 md:gap-8">
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
        <div className="md:w-1/2 lg:1/2 flex items-center justify-center">
          <img
            className="size-1/2 md:size-3/4 lg:size-72 foto"
            src={myFoto}
            alt="Yago´s Photo"
          />
        </div>
      </section>
      <br />
      <section
        id="projects"
        className="w-full bg-white min-h-lvh py-20 about flex flex-col md:flex-col lg:flex-col xl:flex-col p-4 px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-96 justify-center"
      >
        <h5 className="text-black h3 mb-20 lg:mb-4 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
          Projects
        </h5>
      </section>
      <section
        id="about"
        className="flex flex-col md:flex-row lg:flex-row p-12 lg:p-40 md:p-20 xl:px-80 2xl:px-96 pb-2 sm:pb-4 w-full min-h-lvh"
      >
        <div className="flex flex-col justify-center md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <h5 className="text-black h3 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
            About
          </h5>
          <br />
          <h5 className="text-black h3 text-lg text-xl pt-4 text-center md:text-left lg:text-left">
            Full-Stack Developer based in Berlin
          </h5>
          <br />
          <p className="text-black h3 pt-4 text-center md:text-left lg:text-left">
            Hey, my name is Yago, Junior Full-Stack Developer. I'm passionate
            about programming and have gained practical experience in both
            frontend and backend development. I've worked with technologies like
            TailwindCSS, HTML, CSS, JavaScript, and React, as well as backend
            technologies like Node.js, Express, and databases such as MySQL and
            MongoDB.
          </p>
        </div>
        <div className="border-b-2 pt-28 border-black"></div>
        <div className="my-16 md:my-0 lg:my-0 mx-0 md:mx-12 lg:mx-32 divider2"></div>
        <div className="flex justify-center items-center pb-28 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 relative">
          <img
            className="w-auto"
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
            alt="desktop-img"
          />
          <img />
        </div>
      </section>
      <section
        id="contact"
        className="bg-white flex flex-col p-12 lg:p-40 md:px-20 xl:px-80 2xl:px-96 w-full min-h-lvh"
      >
        <h5 className="text-black h3 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
          Contact
        </h5>
        <br />
        <div className="flex flex-col">
          <h4 className="pt-20 pl-0 md:pl-8 lg:pl-8 xl:pl-8 2xl:pl-8 text-black h3 text-md pt-4 text-center md:text-left lg:text-left">
            I'd love to hear from you!
          </h4>
          <br />
          <div className="flex justify-center">
            <div className="pt-12 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-6 md:gap-20 lg:gap-40 xl:gap-60 2xl:gap-96">
              <div className="flex gap-8">
                <div className="flex pl-0 gap-6 flex-row items-center">
                  <img
                    className="ts-icons duration-700"
                    src={pinIcon}
                    alt="Location"
                  />
                  <div>
                    <h6 className="text-black h3 text-md pt-4 text-left font-semibold">
                      Location
                    </h6>
                    <p className="text-black h3 text-md pt-4 text-left">
                      Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex gap-6 flex-row items-center">
                  <img
                    className="ts-icons duration-700"
                    src={emailIcon}
                    alt="E-mail"
                  />
                  <div>
                    <h6 className="text-black h3 text-md pt-4 text-left font-semibold">
                      Mail
                    </h6>
                    <p className="text-black h3 text-md pt-4 text-left">
                      yagopb@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
