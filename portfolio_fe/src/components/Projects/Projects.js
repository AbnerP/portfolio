import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectDivider = (i) => {
    if (i >= 1) {
      return <div className="projects_divider"></div>;
    }
    return null;
  };
  const projects = [
    {
      title: "Puerto Rico eRacing Club",
      description:
        "Roster and event management website for Puerto Rico eRacing Club's website. Features the Race Tyre Strategy Calculator for all users.",
      realLink: "https://puertoricoeracing.com/home",
      githubLink: "https://github.com/AbnerP/PReC-website",
      stack: ["MongoDB", "Express.js", "Angular", "Node.js", "ASP.NET Core"],
      imageURL: "prec_website_ss.png",
      features: [
        "User Authentication",
        "User Authorization",
        "Event Registration",
        "Administrator Privileges"
      ],
    },
    {
      title: "Race Strategy Calculator",
      description:
        "Given the length, time lost when entering the pits and telemetry data for each available tire, the calculator will return the most optimal tire strategy for the race independent of the racing simulator.",
      realLink: "https://puertoricoeracing.com/calculator",
      githubLink: "https://github.com/AbnerP/PReC-website/tree/main/Calculator-API",
      stack: ["ASP.NET Core"],
      imageURL: "prec_website__calculator_ss.png",
      features: [
        "Tree Search Pruning",
      ],
    },
    
    {
      title: "Live Lyrics",
      description:
        "Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. ",
      realLink: "",
      githubLink: "https://github.com/AbnerP/PReC-website",
      stack: ["Express.js", "Angular", "Node.js"],
      imageURL: "prec_website_ss.png",
      features: ["OAuth2", "Web APIs"],
    },

    // {
    //   title: "Live Lyrics",
    //   description: "",
    //   realLink: "",
    //   githubLink: "",
    //   stack: ["MongoDB", "Express.js", "Angular", "Node.js", ".NET Core"],
    //   imageURL: "prec.png",
    // },
    // {
    //   title: "Portfolio Website",
    //   description: "",
    //   realLink: "",
    //   githubLink: "",
    //   stack: ["MongoDB", "Express.js", "Angular", "Node.js", ".NET Core"],
    //   imageURL: "prec.png",
    // },
  ];
  return (
    <div className="projects">
      {projects.map((project, i) => {
        return (
          <>
            {projectDivider(i)}
            <ProjectCard
              title={project.title}
              description={project.description}
              realLink={project.realLink}
              githubLink={project.githubLink}
              imageURL={project.imageURL}
              stack={project.stack}
              features={project.features}
            />
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Projects;
