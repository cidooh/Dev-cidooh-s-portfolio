"use client"
import React, {useRef,useState} from 'react';
import emailjs from'@emailjs/browser'

const ContactForm = () => {
    const form = useRef(null);
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8ix8ve8', 'template_iqelagj', form.current, '5Gc9cPD45q7Z1TtWi')
          .then(
            () => {
              setStatus('SUCCESS');
            },
            (error) => {
              console.error('FAILED...', error.text);
              setStatus('FAILED');
            },
          );
      };
    


  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Get In touch!</h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
                 </p>

        {/* Input */}
        <form ref={form} className='mt-8 block w-full overflow-hidden' onSubmit={sendEmail}>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <input type="text" id='name' placeholder='Full name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-nonew-full' name='user_name'/>

            {/* <input type="text" id='lastname' placeholder='Last name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-nonew-full' /> */}
  
        </div>

        <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
            <input  type="email" id='email' name='user_email' placeholder='email address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-nonew-full' />

            <input type="text" id='phonenumber' name='user_phone' placeholder='Phone number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-nonew-full' />
  
        </div>

        <div>
            {/* <select id='select' className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
                <option value="" disabled selected>select an option</option>
                <option value="frontend">Frontend Development</option>
                <option value="frontend">Backend Development</option>
                <option value="frontend">Fullstack Development</option>
            </select> */}

        </div>
        <textarea id='message' name='message'
        className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
         rows={7} placeholder='Message'></textarea>

         <div className='mt-4'>
<button type='submit' className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Messae</button>
         </div>
</form>
{status === 'SUCCESS' && <p className="text-green-500 mt-4 font-bold text-2xl">Message sent successfully!</p>}
          {status === 'FAILED' && <p className="text-red-500 mt-4">Message failed to send. Please try again.</p>}
    </div>
  )
}

export default ContactForm