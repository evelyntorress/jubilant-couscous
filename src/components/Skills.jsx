import React from 'react'
import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import Node from '../assets/node.png';
// import GitHub from '../assets/github.png';
// import Mongo from '../assets/mongo.png';

function Skills() {
  return (
    <div name="skills" className=' text-gray-600'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className="text-4xl font-bold inline border-b-2 border-pink-200">Experience</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div>
                <div>
                    <img className="mx-auto" src={HTML} alt="HTML icon" width="80" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills