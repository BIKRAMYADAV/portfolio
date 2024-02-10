import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
           <div className='relative'>
            <Image 
            src="/dragon-head.png"
            alt='logo'
            width={40}
            height={40}
            className='w-full h-full object-contain rounded-full'
            />
            </div>
                <h1 className='text-white text-[25px] font-semibold'>Bikram <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
             {" "}
             Yadav
              {" "}
            </span></h1>
         
        </div>
        
        <div className="navigation flex gap-16">
         
         <div className="home transition-all "> 
           <a className = "text-white  text-lg hover:text-gradient-to-r from-blue-500 to-red-500" href="/">HOME</a>
          </div>
        
          <div className="projects transition-all hover:underline ">
          <a className = "text-white  text-lg" href="/my-projects">PROJECTS</a>
          </div>
          <div className="skills transition-all  hover:underline">
          <a className = "text-white text-lg" href="/my-skills">SKILLS</a>
          </div>
          <div className="contact transition-all hover:underline ">
          <a className = "text-white  text-lg " href="/contact-me">CONTACT</a>
          </div>
        </div>

        <div className='flex flex-row gap-5 mb-2'>
        <div className="github">
            <Link href={'https://github.com/BIKRAMYADAV'}>
  <Image src={"/github-logo.png"} alt="Github" width={40} height={40} />
</Link>
           </div>
           <div className="linked-in">
            <Link href={'https://www.linkedin.com/in/bikram-deep-yadav-530955270/'}>
  <Image src={"/linkedin-logo.png"} alt="My linked-in" width={40} height={40} />
</Link>
           </div>
           <div className="instagram">
            <Link href={'https://www.instagram.com/'}>
  <Image src={"instagram.svg"} alt="My Insta" width={40} height={40} />
</Link>
           </div>
       
        </div>
    </div>
  )
}

export default Navbar