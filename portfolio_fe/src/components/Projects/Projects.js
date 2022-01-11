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
      description: "Website for the simulation racing club I am a part of.",
      realLink: "https://puertoricoeracing.com/home",
      githubLink: "https://github.com/AbnerP/PReC-website",
      stack: ["MongoDB", "Express.js", "Angular", "Node.js", "ASP.NET Core"],
      imageURL: "prec_website_ss.png",
      features: ["User Authentication", "User Authorization"],
    },
    {
      title: "Live Lyrics",
      description:
        "Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. Website for the simulation racing club I am a part of. ",
      realLink: "",
      githubLink: "https://github.com/AbnerP/PReC-website",
      stack: ["Express.js", "Angular", "Node.js"],
      imageURL: "prec_website_ss.png",
      features: ["OAuth2","Web APIs", ],
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
