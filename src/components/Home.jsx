import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fef9ef]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-900 text-3xl">Hi, I am Evelyn.</p>
        <h1 className="text-3xl sm:text-5xl py-3 font-bold text-cyan-600">
          A junior Full Stack Web Developer.
        </h1>
        <img src="./assets/profile-picture.png" alt="profile" />
        <h2 className="text-sky-900 text-lg py-4 max-w-[700px]">
          Mastering skills in HTML, CSS, JavaScript, APIs, NodeJS, OOP, Express,
          and SQL.
        </h2>

        <div>
          <button className="text-black border-2 border-gray-600 px-6 py-1 my-3 flex items-center hover:bg-sky-500/60 hover:border-gray-500">
            Work 
            <span className="hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3" /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
