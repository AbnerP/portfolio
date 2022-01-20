import { Button } from "@material-ui/core";
import { Web, Code } from "@material-ui/icons";
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
      <Button href={realLink} target="_blank" rel="noreferrer" variant="outlined" color="primary" type="submit" endIcon={<Web />} disableElevation >
          Website  
      </Button>
    );
  };
  const linkRealSite = () => {
    if (realLink === "") {
      return <h2 className="projectCard__information--title">{title}</h2>;
    }
    return (
      <>
        <a href={realLink} target="_blank" rel="noreferrer">
          <h2 className="projectCard__information--title projectCard__information--title--link">{title}</h2>
        </a>
      </>
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
            {linkRealSite()}
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
          <Button href={githubLink} target="_blank" rel="noreferrer" variant="outlined" color="primary" type="submit" endIcon={<Code />} disableElevation >
          Code 
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
