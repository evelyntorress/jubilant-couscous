import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen text-gray-600">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-pink-200">
            Toolkit
          </p>
          <p className="text-xl py-4">
            These are the languages and technologies I've worked with:
          </p>
        </div>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Nodejs</li>
          <li>Expressjs</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React</li>
          <li>Insomnia</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>Bulma</li>
          <li>Tailwind</li>
        </ol>

      </div>
    </div>
  );
}

export default Skills;
