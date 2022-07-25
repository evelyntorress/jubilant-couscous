import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#fef9ef] text-gray-600 text-2xl"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container*/}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-2 border-pink-600">
              About
            </p>  
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right text-3xl font-bold'>
            <p>Hi, my name is Evelyn. Please, take a look around my website.</p>
          </div>
          <div>
            <p>I have many years of experience working in teams.
               My ideas coming for my relation with photography, which is one of my hobbies.
               I am sure my past jobs experience in culinary arts field and tourism would help
               in a way to buildt interesting web sites.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
