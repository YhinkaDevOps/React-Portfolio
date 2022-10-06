import React from 'react';
import  { Link} from  'react-scroll'
import Yinkaimg from '../image/yinka.jpg';
import resume from '../Olayinka_Resume.pdf';


const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1700px] mx-auto px-10 flex flex-col-reverse h-full md:flex-row items-center '>
        <div className='homebio-container xl:mx-auto 2xl:mx-auto md:mt-12 sm:mb-5 lg:mt-12 2xl:ml-12 xl:ml-11 flex flex-col  mx-auto md:w-3/5 md:ml-10 xs:space-y-0 xs:mb-[40px] space-y-1 '>
            <p className='text-pink-600 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl'>Hello 👋</p>
             
            <h1 className='text-2xl sm:text-4xl md:text-3xl font-bold text-[#ccd6f6] lg:text-4xl 2xl:text-7xl '>
               I'm Bakare <span className='name_span'>Olayinka</span>
            </h1>
            <h2 className='text-2xl sm:text-4xl md:text-3xl font-bold text-[#8892b0] leading-7 lg:text-4xl 2xl:text-7xl'>
               Front-End Developer.
            </h2>
            <p className='text-[#ccd6f6] py-4 max-w-[800px] leading-4 xl:text-xl xl:max-w[800px] xs:text-base lg:text-lg 2xl:text-2xl 2xl:max-w-[1000px] description' >
                I’m a front-end developer specializing in building exceptional digital experiences. Currently, I’m focused on
                building responsive front-end web applications.
            </p>
          <div className='flex space-x-5 '>
            <button className=' text-white group px-1 py-1 my-2  flex items-center hover:border-pink-600 hover:bg-pink-600 rounded-md Home-btn sm:text-sm md:text-sm xs:text-xs lg:text-base xl:text-lg xl:py-3 2xl:py-4 2xl:px-4 2xl:text-2xl'>
              <Link to='project' smooth={true} duration={500}>
                View Projects
              </Link>
            
            </button>
            <a href={resume} download className='flex  md:hidden text-white group px-2 py-2 my-2  items-center hover:border-pink-600 hover:bg-pink-600 rounded-md Home-btn sm:text-sm md:text-sm xs:text-xs lg:text-base xl:text-lg xl:py-3 2xl:py-4 2xl:px-4 2xl:text-2xl'>
              Download Resume
            </a>
          </div>
        </div>
          <div className='home-img mx-auto w-1/2 xs:mb-10 xl:ml-5 sm:w-[24%] md:w-[24%] lg:w-[24%] xl:w-[25%] xl:mt-12  '>
            <img src={Yinkaimg} alt="Homeimage" />
          </div>
       </div>
    </div>
  )
}

export default Home