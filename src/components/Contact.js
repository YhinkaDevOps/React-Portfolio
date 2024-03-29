import emailjs from '@emailjs/browser';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtwd3g8', 'template_aqon548', e.target, 'aShkbk3tf2laAsna0')
      .then(() => {
          toast.success("Message successfuly sent")
      }, (error) => {
         toast.error("Oops something went wrong");
      });
      e.target.reset(); 
  };



  return (
    <div name='contact' className= 'w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
         <ToastContainer autoClose={1500} pauseOnHover={false} />
        <form onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full mt-12 '>
            <div className='mt-5 sm:text-center text-left' >
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact Me</p>
            </div>
            <p className='text-gray-300 pt-4'>Email: yinkabakare30@gmail.com</p>
            <p className='text-gray-300 py-1 pb-2'>Phone: +2348130300335</p>
           
           <input className='bg-[#ccd6f6] my-2 p-2  ' type="text" placeholder='Name' name='name' required  />
           <input className="bg-[#ccd6f6] p-2 " type="text" name="subject" id="" placeholder='Subject'/>
           <input className='my-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required  />
           <textarea className='bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message'required></textarea>
           <button type="submit" className='text-white border-2  hover:bg-pink-600 hover:border-pink-600 px-10 py-2 my-2 mt-7 mx-auto flex items-center rounded-full '>Contact Me</button>          
        </form>

    </div>
  )
}

export default Contact