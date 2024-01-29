"use client"

import ProjectCard from '../components/ProjectCard'
import { Projects } from '../constants'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/main2.png)"}}
    
     className='w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover'>

<h1 className="font-semibold text-white text-[50px]">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              {" "}
              Projects{" "}
            </span>
          </h1>

      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            link =  {project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Page