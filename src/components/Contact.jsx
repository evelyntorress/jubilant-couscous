import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { RiMailSendFill} from "react-icons/ri";

function Contact() {
  return (
    <div>
      {/* Container */}
      <div
        name="contact"
        className="bg-[#ff6b6b] flex justify-center items-center p-4 text-gray-600 "
      >
        {/* Form */}
        <form
          method="POST"
          action="https://getform.io/f/07d81929-9a30-49a5-a63a-8802a13aaf6c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-2 border-pink-200">
              Contact
            </p>
            <p className="text-xl py-4">
              Please, contact me if you have any questions.
            </p>
          </div>
          <input
            className="bg-[#fef9ef] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#fef9ef]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#fef9ef] p-2"
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-rose-500 hover:border-gray-200 px-4 py-2 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>

      {/* Social icons  */}
      <div className="flex justify-between md:w-[50%] pl-10 my-6 pb-10">
        <a
          className="flex justify-between items-center w-full text-gray-600"
          href="https://github.com/evelyntorress"
          target={"blank"}
        >
          <FaGithubSquare size={30} />
        </a>
        <a
          className="flex justify-between items-center w-full text-gray-600"
          href="https://www.linkedin.com/in/evelyn-torres-salgado-846a98121/"
          target={"blank"}
        >
          <BsLinkedin size={30} />
        </a>
        <a
          className="flex justify-between items-center w-full text-gray-600"
          href="https://docs.google.com/document/d/1U9qwwZJXZB6kgPUEr3So8tzyUMkR5ZvqU4X-bRvIGlQ/edit"
          target={"blank"}
        >
          <BsFillPersonLinesFill size={30} />
        </a>
          <a
          className="flex justify-between items-center w-full text-gray-600"
          href="mailto:evelyntorress@gmail.com"
          target={"blank"}
        >
          <RiMailSendFill size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;