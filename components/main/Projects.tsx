import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400 py-5">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-20">
        <ProjectCard
          src="/IBENTEU.png"
          title="Ibenteu"
          description="Web platform to search event venues from Chihuahua, where you
          can check if it’s available or not, check the pictures or reviews and publish
          your own event venues. It was developed in PHP, JavaScript, Html and CSS"
        />
        <ProjectCard
          src="/ENLINE.png"
          title="€NLINE"
          description="Currency converter using Fixer API. It was developed using
          PHP and React, allows you to calculate exchange rates instantly,
          facilitating your international transactions. "
        />
        <ProjectCard
          src="/Portfolio.png"
          title="Maikī's portfolio"
          description="Personal portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
