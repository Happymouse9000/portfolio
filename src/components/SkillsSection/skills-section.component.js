import React from "react";
import picture from "../../assets/img/picture.jpg";
import "./skills-section.styles.scss";

const SkillsSection = () => {
  return (
    <>
      <div className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-12 col-md-6 m-0">
            <div className="skills">
              <span className="skill-name">React</span>
              <div className="percent">
                <div className="progress react"></div>
              </div>
              <span className="value">90%</span>
            </div>
            <div className="skills">
              <span className="skill-name">Node.js</span>
              <div className="percent">
                <div className="progress node"></div>
              </div>
              <span className="value">85%</span>
            </div>

            <div className="skills">
              <span className="skill-name">Bootstrap</span>
              <div className="percent">
                <div className="progress bootstrap"></div>
              </div>
              <span className="value">70%</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="skills">
              <span className="skill-name">JavaScript</span>
              <div className="percent">
                <div className="progress javascript"></div>
              </div>
              <span className="value">90%</span>
            </div>
            <div className="skills">
              <span className="skill-name">HTML</span>
              <div className="percent">
                <div className="progress html"></div>
              </div>
              <span className="value">80%</span>
            </div>

            <div className="skills">
              <span className="skill-name">CSS</span>
              <div className="percent">
                <div className="progress css"></div>
              </div>
              <span className="value">80%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
