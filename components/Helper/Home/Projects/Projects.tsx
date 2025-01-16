import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'


const Projects = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
    <SectionHeading>My Projects</SectionHeading>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
{projectData.map((project)=>{
  return <div key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'>
    <Link href={project.url} target="_blank">
    <Image src={project.image} alt="Project1" width={300} height={200} className='w-full'/>
    </Link>

  </div>
})}
        </div>

    
    </div>
  )
}

export default Projects