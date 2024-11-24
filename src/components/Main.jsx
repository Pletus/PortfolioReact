import React from "react";

function Main() {
  return (
    <>
      <section class="w-full min-h-lvh flex flex-col md:flex-col lg:flex-col xl:flex-col p-4 pt-12 md:p-20 lg:p-40 xl:px-80 2xl:px-96 justify-center">
        <div class="flex flex-col-reverse md:flex-row lg:flex-row gap-2 md:gap-0 lg:gap-0">
          <div class="md:w-1/2 lg:1/2 flex flex-col justify-center">
            <div class="">
              <h1 class="text-black navlinks text-5xl text-center md:text-left lg:text-left">
                Full-Stack Web Developer
              </h1>
            </div>
            <br />
            <div class="">
              <p class="text-black h3 text-lg text-center md:text-left lg:text-left">
                Greetings, I'm Yago, a web developer based in Berlin, committed
                to deliver high-quality websites.
              </p>
            </div>
            <br />
          </div>
          <br />
          <div class="w-full md:w-1/2 lg:1/2 flex items-center justify-center">
            <img
              class="size-1/2 md:size-3/4 lg:size-72 foto"
              src="./assets/imgs/Photo 2.jpg"
              alt="Yago´s Photo"
            />
            <br />
          </div>
        </div>
        <br />
        <div class="flex flex-wrap gap-4 lg:gap-8 md:gap-8 pl-0 md:pl-4 lg:pl-4 pt-2 md:pt-4 lg:pt-4 justify-center lg:justify-start md:justify-start">
          <div class="flex gap-4 lg:gap-8 md:gap-8">
            <img
              class="ts-icons duration-500"
              src="./assets/icons/html-5-svgrepo-com.svg"
              alt="HTML"
            />
            <img
              class="ts-icons duration-500"
              src="./assets/icons/css-3-svgrepo-com.svg"
              alt="CSS"
            />
          </div>
          <div class="flex gap-4 lg:gap-8 md:gap-8">
            <img
              class="ts-icons duration-500"
              src="./assets/icons/javascript-svgrepo-com.svg"
              alt="JavaScript"
            />
            <img
              class="ts-icons duration-500"
              src="./assets/icons/react-svgrepo-com.svg"
              alt="React"
            />
          </div>
          <div class="flex gap-4 lg:gap-8 md:gap-8">
            <img
              class="ts-icons duration-500"
              src="./assets/icons/Node.js.svg"
              alt="Node"
            />
            <img
              class="ts-icons duration-500"
              src="./assets/icons/Express.svg"
              alt="Express"
            />
          </div>
          <div class="flex gap-4 lg:gap-8 md:gap-8">
            <img
              class="ts-icons duration-500"
              src="./assets/icons/tailwind-svgrepo-com.svg"
              alt="Tailwind"
            />
            <img
              class="ts-icons duration-500"
              src="./assets/icons/mongodb-svgrepo-com.svg"
              alt="MongoDB"
            />
          </div>
        </div>
      </section>
      <br />
      <section
        id="about"
        class="bg-white flex flex-col md:flex-row lg:flex-row p-12 lg:p-40 md:p-20 xl:px-80 2xl:px-96 pb-2 sm:pb-4 w-full min-h-lvh"
      >
        <div class="flex flex-col justify-center md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <h5 class="text-blue-600/100 text-black h3 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
            About
          </h5>
          <br />
          <h5 class="text-black h3 text-lg text-xl pt-4 text-center md:text-left lg:text-left">
            Full-Stack Developer based in Berlin
          </h5>
          <br />
          <p class="text-black h3 pt-4 text-center md:text-left lg:text-left">
            Hey, my name is Yago, Junior Full-Stack Developer. I'm passionate
            about programming and have gained practical experience in both
            frontend and backend development. I've worked with technologies like
            TailwindCSS, HTML, CSS, JavaScript, and React, as well as backend
            technologies like Node.js, Express, and databases such as MySQL and
            MongoDB.
          </p>
        </div>
        <div class="border-b-2 pt-28 border-black"></div>
        <div class="my-16 md:my-0 lg:my-0 mx-0 md:mx-12 lg:mx-32 divider2"></div>
        <div class="flex justify-center items-center pb-28 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 relative">
          <img
            class="w-auto"
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
            alt="desktop-img"
          />
          <img />
        </div>
      </section>
      <section
        id="projects"
        class="w-full min-h-lvh py-20 about flex flex-col md:flex-col lg:flex-col xl:flex-col p-4 px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-96 justify-center"
      >
        <h5 class="text-blue-700/100 text-black h3 mb-20 lg:mb-4 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
          Projects
        </h5>
        <div class="flex flex-col gap-24 items-center justify-center py-4 md:py-20 lg:py-20">
          <a href="https://freebie-it.netlify.app/">
            <img
              src="./assets/imgs/Freebie It.png"
              alt="Freebie It"
              class="complex-shadow"
            />
          </a>
          <a href="https://cute-crostata-59eac6.netlify.app/">
            <img
              src="./assets/imgs/Pokefights.png"
              alt="Pokefights"
              class="complex-shadow"
            />
          </a>
        </div>
        <h3 class="pb-2 mt-20 md:mt-0 md:pb-12 text-blue-700/100 justify-center text-black h3 mb-20 lg:mb-4 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
          On GitHub
        </h3>
        <div class="flex flex-wrap justify-evenly items-center gap-8 md:gap-24">
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/FirstTypeScriptApp">
              <img
                src="./assets/imgs/projectManager.png"
                alt="project management"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="project management"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Project Manager App - TypeScript
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/authorization">
              <img
                src="./assets/imgs/autho.png"
                alt="authentication"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="authentication"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Authentication - JS | React | Express | MongoDB
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/cookbook-with-SQL">
              <img
                src="./assets/imgs/cook PgSQL.png"
                alt="cookbook PgSQL"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="cookbook PgSQL"
              class="text-black h3 lg:mb-4 pt-4 text-center"
            >
              Cook Book - JS | React | Express | PgSQL
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/Adopt_a_pet">
              <img
                src="./assets/imgs/adopt_a_pet.png"
                alt="adopt_a_pet"
                class="w-full h-48 object-cover p-4"
              />
            </a>
            <label
              for="adopt_a_pet"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Adopt a pet - Node | Express
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/FromContentfulToNodeJS">
              <img
                src="./assets/imgs/contentToNode.png"
                alt="contentToNode"
                class="w-full h-48 object-cover p-4"
              />
            </a>
            <label
              for="contentToNode"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              From contentful to Node.js
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/Fetch-Project">
              <img
                src="./assets/imgs/hacker news.png"
                alt="hacker news"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="hacker news"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Hacker news - JS | React | Tailwind
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/CookBook">
              <img
                src="./assets/imgs/cookbook.png"
                alt="cookbook"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="cookbook"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Cook Book - JS | React | Contentful
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/ToDo-React">
              <img
                src="./assets/imgs/ToDo2.png"
                alt="to do list"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="to do list react"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              To Do List - JS | React | LocalStorage
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/To-Do-List">
              <img
                src="./assets/imgs/ToDo1.png"
                alt="todo list js"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="todo list js"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Todo List - JS | LocalStorage
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/Cook-book">
              <img
                src="./assets/imgs/cook-book.png"
                alt="Cook-book"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="Cook-book"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              Cook Book - HTML | CSS
            </label>
          </div>
          <div class="bg-white complex-shadow w-72 flex flex-col justify-center items-center">
            <a href="https://github.com/Pletus/PSDtoHTML">
              <img
                src="./assets/imgs/PSDtoHTML.png"
                alt="PSDtoHTML"
                class="w-full h-48 object-cover"
              />
            </a>
            <label
              for="PSDtoHTML"
              class="justify-center text-black h3 lg:mb-4 pt-4 text-center"
            >
              PSD to HTML
            </label>
          </div>
        </div>
      </section>
      <section
        id="contact"
        class="bg-white flex flex-col p-12 lg:p-40 md:px-20 xl:px-80 2xl:px-96 w-full min-h-lvh"
      >
        <h5 class="text-blue-600/100 text-black h3 text-4xl pt-4 pl-0 md:pl-2 lg:pl-3 text-center md:text-left lg:text-left">
          Contact
        </h5>
        <br />
        <div class="flex flex-col">
          <h4 class="pt-20 pl-0 md:pl-8 lg:pl-8 xl:pl-8 2xl:pl-8 text-black h3 text-md pt-4 text-center md:text-left lg:text-left">
            I'd love to hear from you!
          </h4>
          <br />
          <div class="flex justify-center">
            <div class="pt-12 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-6 md:gap-20 lg:gap-40 xl:gap-60 2xl:gap-96">
              <div class="flex gap-8">
                <div class="flex pl-0 gap-6 flex-row items-center">
                  <img
                    class="ts-icons duration-700"
                    src="./assets/icons/pin.png"
                    alt="Location"
                  />
                  <div>
                    <h6 class="text-black h3 text-md pt-4 text-left font-semibold">
                      Location
                    </h6>
                    <p class="text-black h3 text-md pt-4 text-left">
                      Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex gap-8">
                <div class="flex gap-6 flex-row items-center">
                  <img
                    class="ts-icons duration-700"
                    src="./assets/icons/gmail.png"
                    alt="E-mail"
                  />
                  <div>
                    <h6 class="text-black h3 text-md pt-4 text-left font-semibold">
                      Mail
                    </h6>
                    <p class="text-black h3 text-md pt-4 text-left">
                      yagopb@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-black flex flex-col-reverse md:flex-row lg:flex-row justify-between p-12 lg:px-48 md:p-20 xl:px-80 2xl:px-96 pb-2 sm:pb-4 w-full">
        <h4 class="text-white h3 text-md pt-4 text-center md:text-left lg:text-left">
          Copyright © 2024. All rights are reserved
        </h4>
        <div class="flex gap-6 lg:gap-12 xl:gap-16 2xl:gap-32 justify-evenly">
          <a href="http://www.linkedin.com/in/yagopb">
            <img
              class="ts-icons duration-700"
              src="./assets/icons/icons8-linkedin-96.png"
              alt="linkedin"
            />
          </a>
          <a href="http://github.com/Pletus">
            <img
              class="ts-icons duration-700"
              src="./assets/icons/icons8-github-96.png"
              alt="github"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Main;
