import React from "react";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  realLink,
  githubLink,
  imageURL,
  stack,
  features,
}) {
  const viewSite = () => {
    if (realLink === "") {
      return null;
    }
    return (
      <a
        className="externalLink externalLink--site"
        href={realLink}
        target="_blank"
        rel="noreferrer"
      >
        View Site
      </a>
    );
  };

  return (
    <div className="projectCard">
      <div className="projectCard__image--container">
        <img
          className="projectCard__image"
          src={require(`../../assets/${imageURL}`)}
          alt={title}
        />
      </div>
      <div className="projectCard__information">
        <div className="projectCard__information--header">
          <div className="projetCard__information__titleContainer">
            <a
              href={realLink}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="projectCard__information--title">{title}</h2>
            </a>
          </div>
          <p className="projectCard__information--description">{description}</p>
          <div className="stackFeatures__container">
            <div className="stackFeatures__element">
              <h3 className="stackFeatures__Title">Tech Stack</h3>
              {stack.map((tech) => {
                return (
                  <>
                    <span className="stackFeatures__bullet"> {">"} </span>
                    <h4 className="stackFeatures__item "> {tech}</h4>
                    <br />
                  </>
                );
              })}
            </div>
            <div className="stackFeatures__element">
              <h3 className="stackFeatures__Title">Features</h3>
              {features.map((feature) => {
                return (
                  <>
                    <span className="stackFeatures__bullet"> {">"} </span>
                    <h4 className="stackFeatures__item "> {feature}</h4>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="projectCard__techStack"></div>
        <div className="projectCard__externalLinks">
          {viewSite()}
          <a
            className="externalLink"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
