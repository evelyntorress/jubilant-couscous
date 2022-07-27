import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';


function Contact() {
  return (
    <div>
       
        {/* Container */}
    <div name="contact" className=' text-gray-600'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
            <p className="text-4xl font-bold inline border-b-2 border-pink-200">Contact</p> 
            <p className='text-xl py-4'>Please, contact me if you have any questions.</p>
           </div>
        </div>
    </div>

 {/* Social icons  */}
<div className='flex justify-between md:w-[60%] my-6 pb-10'>
            <FaGithubSquare size={30} />
            <HiOutlineMail size={30} />
            <BsLinkedin size={30} />
           
        </div>
    </div>
  );
};

export default Contact
