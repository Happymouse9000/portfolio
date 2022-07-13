import React from "react";

import "./project-card.styles.scss";

const ProjectCard = ({
  liveURL,
  title,
  subtitle,
  description,
  projectImage,
  techUsed,
  children,
  codeURL,
}) => {
  return (
    <>
      <div className="project-card col-12 col-md-4">
        <div className="box shadow m-2">
          <div className="work-box ">
            <div className="image-box">
              <img
                className="project-img img-fluid"
                src={projectImage}
                alt="Project"
              />
            </div>

            <div className="work-content text-center">
              <p className="work-title mb-1">{title}</p>
              <p className="work-description mb-2">{subtitle}</p>
              <div>
                <div className="tech-used-container">
                  {techUsed.map((tech) => (
                    <span className="tech-used" key={tech.id}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="layer"></div>
          <div className="content-box text-center">
            <div>
              <h2>{title}</h2>
              <p className="my-4">{description}</p>
              {children}
              <a href={liveURL} className="view-btn mt-4 mb-2">
                View Live Version
              </a>
              <a href={codeURL} className="view-btn my-2">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
