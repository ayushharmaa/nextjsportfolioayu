"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "CSS Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/csscvdummy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayushharmaa/introducecv/deployments/github-pages",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tindog Website",
    description: "Project 2 description",
    image: "/images/projects/TindogAyu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayushharmaa/tindogsite",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Keeper Application Website",
    description: "Project 3 description",
    image: "/images/projects/KeeperfilesAyush.png",
    tag: ["All", "Web"],
    gitUrl: "https://codesandbox.io/p/sandbox/github/ayushharmaa/KeeperFiles/tree/main/?file=%2Fpublic%2Fstyles.css%3A7%2C41",
    previewUrl: "https://codesandbox.io/p/sandbox/github/ayushharmaa/KeeperFiles/tree/main/?file=%2Fpublic%2Fstyles.css%3A7%2C41",
  },
  {
    id: 4,
    title: "HTML Introies Site Basic",
    description: "Project 4 description",
    image: "/images/projects/htmlintroies.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayushharmaa/cvdummy",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "To-Do list Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/todolistayu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayushharmaa/todolist-v2-starting-files",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "SecretFiles Keeper",
    description: "Project 5 description",
    image: "/images/projects/SecretfilesAyu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayushharmaa/Secretsfiles",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Miniature Greenbus System",
    description: "Project 5 description",
    image: "/images/projects/Miniature_GreenbusSystemAyu.png",
    tag: ["All", "DS"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

 

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DS"
          isSelected={tag === " DS"}
        />
      </div>
      
    </section>
  );
};

export default ProjectsSection;
