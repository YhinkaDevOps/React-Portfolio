import React from 'react';
import  { Link} from  'react-scroll'
import Yinkaimg from '../image/yinka.jpg'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse h-full md:flex-row items-center '>
        <div className='homebio-container flex flex-col md:mt-10 mx-auto md:w-3/5 md:ml-10 '>
            <p className='text-pink-600 text-2xl'>I'm</p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] '>
                Bakare <span className='name_span'>Olayinka</span>
            </h1>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#8892b0]'>
                I'm a Front-End Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I’m a front-end developer specializing in building exceptional digital experiences. Currently, I’m focused on
                building responsive front-end web applications.
            </p>
          <div >
            <button className=' text-white group px-2 py-1 my-2 flex items-center hover:border-pink-600 hover:bg-pink-600 rounded-md Home-btn '>
              <Link to='project' smooth={true} duration={500}>
                View Projects
              </Link>
            
            </button>
          </div>
        </div>
          <div className='home-img w-3/4 '>
            <img  src={Yinkaimg} alt="" />
          </div>
       </div>
        

    </div>
  )
}

export default Home