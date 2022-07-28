import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Mongo from '../assets/mongo.png';

function Skills() {
  return (
    <div name="skills" className='w-full h-screen text-gray-600'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className="text-4xl font-bold inline border-b-2 border-pink-200">Toolkit</p>
                <p className='text-xl py-4'>These are the technologies I've worked with</p>
            </div>
            {/* Container for the icons */}
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
                <div>
                    <img className="mx-auto" src={HTML} alt="HTML icon" width="60" />
                    <p className='my-4'>HTML</p>
                </div>

                <div>
                    <img className="mx-auto" src={CSS} alt="HTML icon" width="60" />
                    <p className='my-4'>CSS</p>
                </div>

                <div>
                    <img className="mx-auto" src={JavaScript} alt="HTML icon" width="60" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div>
                    <img className="mx-auto" src={Node} alt="HTML icon" width="60" />
                    <p className='my-4'>Node</p>
                </div>

                <div>
                    <img className="mx-auto" src={Mongo} alt="HTML icon" width="60" />
                    <p className='my-4'>Mongo DB</p>
                </div>

                <div>
                    <img className="mx-auto" src={ReactImg} alt="HTML icon" width="60" />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills