import React from "react";
import "./portfolio-section.styles.scss";
import ProjectCard from "../ProjectCard/project-card.component";
import capstone1Img from "../../assets/img/capstone1.png";
import capstone2Img from "../../assets/img/capstone2.png";
import capstone3Img from "../../assets/img/capstone3.png";

const PortfolioSection = () => {
  return (
    <>
      <div className="portfolio-section" id="portfolio">
        <h2 className="mb-4">My Projects</h2>
        <div className="row" id="projects">
          <ProjectCard
            liveURL={"https://portfolio-kappa-rosy.vercel.app/"}
            codeURL={"https://github.com/Happymouse9000/portfolio"}
            title={"Paul"}
            subtitle={"Porfolio Website"}
            projectImage={capstone1Img}
            techUsed={[
              { name: "HTML", id: "1" },
              { name: "SASS", id: "2" },
              { name: "JavaScript", id: "3" },
              { name: "React", id: "4" },
              { name: "Node.js", id: "5" },
              { name: "Nodemailer", id: "6" },
            ]}
          >
            <p>
              A responsive website created using MERN stack which contains all
              of my projects
            </p>
          </ProjectCard>
          <ProjectCard
            liveURL={"https://thinkbooker-jet.vercel.app/"}
            codeURL={"https://github.com/Happymouse9000/think-booker"}
            title={"Think Booker"}
            subtitle={"Course Booking Application"}
            projectImage={capstone2Img}
            techUsed={[
              { name: "HTML", id: "1" },
              { name: "SASS", id: "2" },
              { name: "JavaScript", id: "3" },
              { name: "MongoDB", id: "4" },
              { name: "Express.js", id: "5" },
              { name: "React", id: "6" },
              { name: "Node.js", id: "7" },
              { name: "Context API", id: "8" },
            ]}
          >
            <p>
              A Course Boooking Application created using MERN stack with the
              following functionalities:
            </p>
            <p>a. User registration and authentication</p>
            <p>b. Admin Authorization</p>
            <p>c. Course booking system</p>
          </ProjectCard>
          <ProjectCard
            liveURL={"https://bookie-lilac.vercel.app/"}
            codeURL={"https://github.com/Happymouse9000/bookie"}
            title={"Bookie"}
            subtitle={"Budget Tracking Application"}
            projectImage={capstone3Img}
            techUsed={[
              { name: "HTML", id: "1" },
              { name: "SASS", id: "2" },
              { name: "JavaScript", id: "3" },
              { name: "MongoDB", id: "4" },
              { name: "Express.js", id: "5" },
              { name: "React", id: "6" },
              { name: "Node.js", id: "7" },
              { name: "OAuth", id: "8" },
              { name: "Context API", id: "9" },
              { name: "Chart.js", id: "10" },
            ]}
          >
            <p>
              A budget Tracking Application created using MERN stack with the
              following functionalities:
            </p>
            <p>a. User registration and authentication with Google Login</p>
            <p>b. Budget tracking system</p>
            <p>c. Data Visualization Dashboard</p>
          </ProjectCard>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
