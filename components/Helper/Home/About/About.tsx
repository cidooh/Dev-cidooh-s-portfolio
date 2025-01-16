import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { FaCheck } from "react-icons/fa";


const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>About me</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20' >
<div >
<h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200' > Crafting Web applications with passion & Precision</h1>
<p className='mt-6 text-base text-gray-500'>
                    Hi, I’m <span className="font-bold">Ouma Sidney</span>, a passionate developer with expertise in building dynamic, responsive, and user-friendly web applications. 
                    I specialize in <span className="font-bold">JavaScript, React, Python</span>, and I enjoy tackling challenging problems with clean, efficient code.</p>
    <div className='mt-8 '>
<div className='flex items-center space-x-2 mb-6'>
    <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
        <FaCheck className='text-white'/>
    </div>
    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300 '>Frontend Development</p>
</div>
    </div>

    <div className='flex items-center space-x-2 mb-6'>
    <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
        <FaCheck className='text-white'/>
    </div>
    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300 '>Backend Development (Halfway)</p>
</div>

<div className='flex items-center space-x-2 mb-6'>
    <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
        <FaCheck className='text-white'/>
    </div>
    <p className='text-sm sm:-text-base md:text-lg font-bold text-gray-300 '>Full Stack Development (*)</p>
</div>
</div>


<div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
{/* stats */}
</div>

        </div>
        </div>
  )
}

export default About