import React from 'react';
import  { Link} from  'react-scroll'
import Yinkaimg from '../image/yinka.jpg'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1700px] mx-auto px-10 flex flex-col-reverse h-full md:flex-row items-center '>
        <div className='homebio-container xl:mx-auto 2xl:mx-auto lg:mt-10 2xl:ml-12 xl:ml-11 flex flex-col  mx-auto md:w-3/5 md:ml-10  space-y-1 '>
            <p className='text-pink-600 text-2xl lg:text-5xl xl:text-5xl 2xl:text-7xl'>I'm</p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6]  2xl:text-7xl '>
                Bakare <span className='name_span'>Olayinka</span>
            </h1>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#8892b0] leading-7 2xl:text-7xl'>
                I'm a Front-End Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[800px] leading-5 xl:text-xl xl:max-w[800px] lg:text-xl 2xl:text-2xl 2xl:max-w-[1000px]' >
                I’m a front-end developer specializing in building exceptional digital experiences. Currently, I’m focused on
                building responsive front-end web applications.
            </p>
          <div >
            <button className=' text-white group px-2 py-2 my-2 flex items-center hover:border-pink-600 hover:bg-pink-600 rounded-md Home-btn lg:text-lg xl:text-xl xl:py-3 2xl:py-4 2xl:px-4 2xl:text-2xl'>
              <Link to='project' smooth={true} duration={500}>
                View Projects
              </Link>
            
            </button>
          </div>
        </div>
          <div className='home-img mx-auto w-1/2 xl:ml-5 md:w-[24%] lg:w-[24%] xl:w-[25%]  '>
            <img className=''  src={Yinkaimg} alt="" />
          </div>
       </div>
        

    </div>
  )
}

export default Home