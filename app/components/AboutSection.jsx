"use client";
import React, {useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';



const TAB_DATA= [
    {title:"Skills",
    id:"skills",
   content: (
   <ul className="list-disc pl-2 " >
    <li>JavaScript</li>
    <li>CSS,HTML,Bootstrap</li>
    <li>MongoDB,Robo3T</li>
    <li>Express.js</li>
    <li>React</li>
    <li>Node.js</li>
   </ul> )
},
{
    title:"Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2 ">
            <li>
                JIIT NOIDA (Presently)
            </li>
            <li>
                Kendriya Vidyalaya,Ghaziabad
            </li>
            <li>
                Air Force School,Chandigarh
            </li>
        </ul>
    )
},
{
    title:"Certifications",
    id:"certifications",
    content: (
        <ul className="list-disc pl-2 ">
            <li>Data Science IBM course</li>
            <li>Full-Stack Web Development Bootcamp</li>
            <li>Data Structures & Algorithms[Java]</li>
        </ul>
    )
}
]




const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }


  return (
    <section className="text-white">
    <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
     <Image src="/images/AboutSec.png" width={500} height={500} />

     <div>
     <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

     </div>
    <h2 className="text-4xl font-bold text-white mb-5">About Me</h2>
    <p className=" text-base lg:text-lg">I'm a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, MongoDB & Git. Along with this I enjoying solving problems using Data Structures ; I'm excited to work with others to work on different technologies & create amazing applications . </p>


    <div className="flex flex-row justify-start mt-8 ">
    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
    {" "}
    Skills{" "}

    </TabButton>
    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
    {" "}
    Education{" "}

    </TabButton>
    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
    {" "}
    Certifications{" "}

    </TabButton>
    
   
    </div>
    <div className="mt-8">{TAB_DATA.find((t)=> t.id == tab).content}</div>
     </div>


    </div>
      
    </section>
  )
}

export default AboutSection;
