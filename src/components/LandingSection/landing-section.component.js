import React from "react";
import picture from "../../assets/img/picture.jpg";
import "./landing-section.styles.scss";
import Headline from "../Headline/headline.component";

const LandingSection = () => {
  return (
    <>
      <div className="landing-section container" id="landing">
        <div className="row">
          <div className="picture-container col-6 col-md-4 col-lg-2 mx-auto">
            <img
              className="picture img-fluid img-responsive"
              src={picture}
              alt="Profile"
            />
          </div>
        </div>
        <div className="profile row">
          <div className="mx-auto text-center">
            <h1 className="headline">I'm Paul</h1>
            <Headline />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
