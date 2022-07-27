import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import homePageImage from "../assets/profile-picture.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fef9ef]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-row items-center justify-evenly">
          <div className="heading-container">
            <h1 className="text-cyan-600 text-4xl font-bold py-3 px-6">
              Hello, good to see you here!
            </h1>
            <h1 class="name" className="text-purple-900 text-5xl py-2 px-0 ">
              I am Evelyn.
            </h1>
            <h1 className="text-3xl sm:text-3xl py-3 px-6 font-bold text-cyan-600">
              A Full Stack Web Developer.
            </h1>
          </div>
          <img src={homePageImage} alt="profile" width="200" height="200" />
        </div>
        <h2 className="text-sky-900 text-lg py-4 max-w-[700px]">
          Mastering skills in HTML, CSS, JavaScript, APIs, NodeJS, OOP, Express,
          and SQL.
        </h2>

        <div>
          <button className="text-black border-2 border-gray-600 px-6 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
            Projects
            <span className="hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
