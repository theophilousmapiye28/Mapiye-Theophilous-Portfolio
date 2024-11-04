"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const projectsData = [
  {
    id: 1,
    title: "Next js Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://leroy-portfolio-seven.vercel.app",
  },
  {
    id: 2,
    title: "Next js Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/34.png" ,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://prisca-t43d.vercel.app",
  },
  {
    id: 3,
    title: "Web Application",
    description: "Project 3 description",
    image: "/images/Vanlife.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://van-life-complete.vercel.app/",
  },
  {
    id: 4,
    title: "Mobile bank  Application",
    description: "Project 4 description",
    image: "/images/projects/42.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/jvcjzjCKw9YlhCNOIY1GPY/Horizon-Banking-App?node-id=8-4038&node-type=frame&t=A3HRp3xm4Az3A5ZL-0",
  },
  {
    id: 5,
    title: "Movie Rest APIs",
    description: "Authentication and CRUD operations",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://apis-pi-ten.vercel.app",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" >
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <h2 className="text-center text-4xl font-bold text-white mt-[15vh] mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center  gap-2 py-6">
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </div>
      <Footer/>
    </section>
  );
};

export default ProjectsSection;
