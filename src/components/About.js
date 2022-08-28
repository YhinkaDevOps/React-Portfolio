import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full'>
            <div className=' sm:text-center text-left pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>
                    About
                </p>
            </div>
            <div>
                
            </div>
        
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Olayinka, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        I am passionate about building excellent software that improves
                        the lives of those around me. I specialize in creating software
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if you had
                        a software expert available at your fingertips?
                    </p>
                </div>

            </div>
        </div>
    </div>
        

  )
}

export default About