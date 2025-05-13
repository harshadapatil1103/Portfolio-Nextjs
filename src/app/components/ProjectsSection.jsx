"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/harshadapatil1103/Portfolio-Nextjs",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Comfort Vacanze",
    description: "Travel Tourism Website",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/harshadapatil1103",
    previewUrl: "https://www.comfortvacanze.com/",
  },
  {
    id: 3,
    title: "Truskill",
    description: "Edutect Platform",
    image: "/images/projects/3.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/harshadapatil1103",
    previewUrl: "https://truskill.in/",
  },
  {
    id: 4,
    title: "MiniSpotify",
    description: "Music Application",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/harshadapatil1103/spotify_clone",
    previewUrl: "https://spotify-clone-zeta-rust.vercel.app/",
  },
  {
    id: 5,
    title: "TechTales Blog",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/harshadapatil1103/Blog",
    previewUrl: "https://github.com/harshadapatil1103/Blog",
  },
  {
    id: 6,
    title: "Sorting Visualizer",
    description: "React js Application",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/harshadapatil1103/sorting--visualizer",
    previewUrl: "https://sorting-visualizer-nine-rouge.vercel.app/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 lg:mt-4 mb-10 lg:mb-12">
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
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
    </section>
  );
};

export default ProjectsSection;
