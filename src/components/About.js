import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full'>
            <div className=' sm:text-center text-left pb-5 about'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300  '>
                    About
                </p>
            </div>
            <div>
                
            </div>
        
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold about-intro '>
                    <p>Hi. I'm Olayinka, nice to meet you. Please take a look around.</p>
                </div>
                <div className='about-info space-y-3 ' >
                    <p >
                       A self taught frontend developer located in Lagos, Nigeria. Also innovative, detailed oriented, 
                       and enthusistic about combining beautifully structured codes with awesome interface and learning about
                       new technologies. I develop and build web interfaces from simple landing pages to multi-paged web applications
                         so that it is functional and user-friendly. 
                    </p>

                    <p>
                        
                    </p>
                   
                </div>

            </div>
        </div>
    </div>
        

  )
}

export default About