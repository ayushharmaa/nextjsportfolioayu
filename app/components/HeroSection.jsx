"use client";
import React from 'react'
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';
  
const HeroSection = () => {
  return (
    <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
    <div className="col-spand-7 place-self-center text-center sm:text-left">
    
    <h1 className=" text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hey, I'm {" "} </span>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'AYUSH SHARMA',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' FullStack-Developer',
        1000,
        'Student from JIIT',
        1000,
        
      ]}
      wrapper="span"
      speed={250}
      
      repeat={Infinity}
    />
  </h1>
    <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl"> Bringing ideas to life, one line of code at a time.</p>
    <div>
    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white">Hire Me</button>
    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600  hover:bg-slate-800 text-white  mt-3" > 
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV </span>
    </button>

    </div>

    </div>
    
    <div className="col-span-5 place-self-center mt-5 lg:mt-0">
    <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative ">
        <Image 
         src="/images/Avatar+white.png"
         alt="hero image"
         className="absolute transform -translate-x -translate-y-1/2 top-1/2 left-1/2"
         width={350}
         height={350}

        />
    </div>    
    </div>
    </div>
    </section>
  )
}

export default HeroSection
