import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div name='contact' className= 'w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/f022ce8e-bab0-46c8-9d94-ce6170e5547c"  method="POST" className='flex flex-col max-w-[600px] w-full mt-16 '>
            <div className='mt-5' >
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300  '>Contact Me</p>
              <p className='text-gray-300 py-4'><AiOutlineMail/>Email - yinkabakare30@gmail.com</p>
            </div>
           <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
           <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
           <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
           <button className='text-white border-2  hover:bg-pink-600 hover:border-pink-600 px-10 py-2 my-8 mx-auto flex items-center'>Submit</button>
        </form>

    </div>
  )
}

export default Contact