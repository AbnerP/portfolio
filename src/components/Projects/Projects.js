import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const projectDivider = (i) => {
    if (i >= 1) {
      return <div key={i} className="projects_divider"></div>;
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
        "Administrator Privileges",
      ],
    },
    {
      title: "Race Strategy Calculator",
      description:
        "Given the length, time lost when entering the pits and telemetry data for each available tire, the calculator will return the most optimal tire strategy for the race independent of the racing simulator.",
      realLink: "https://puertoricoeracing.com/calculator",
      githubLink:
        "https://github.com/AbnerP/PReC-website/tree/main/Calculator-API",
      stack: ["ASP.NET Core"],
      imageURL: "prec_website__calculator_ss.png",
      features: ["Tree Search Pruning"],
    },
    {
      title: "Live Spotify Lyrics",
      description:
        "Log in using Spotify and this app will show you the lyrics to the song you are currently playing.",
      realLink: "",
      githubLink: "https://github.com/AbnerP/Live_Spotify_Lyrics",
      stack: ["React"],
      imageURL: "live_spotify_lyrics_ss.png",
      features: ["OAuth2", "Spotify API"],
    },
    {
      title: "This Website",
      description:
        "This is my first ever application using React. Before this, I would always use Angular for the Front End. I wanted to challenge myself and learn React as I am looking to use React Native for mobile development in the near future.",
      realLink: "",
      githubLink: "https://github.com/AbnerP/portfolio",
      stack: ["React","Material UI"],
      imageURL: "bitmoji_portrait.png",
      features: ["Emailing"],
    },
  ];
  return (
    <div className="projects">
      {projects.map((project, i) => {
        return (
          <>
            {projectDivider(i)}
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              realLink={project.realLink}
              githubLink={project.githubLink}
              imageURL={project.imageURL}
              stack={project.stack}
              features={project.features}
            />
          </>
        );
      })}
    </div>
  );
}

export default Projects;
