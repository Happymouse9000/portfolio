import React from "react";
import picture from "../../assets/img/picture.jpg";
import "./about-section.styles.scss";

const AboutSection = () => {
  return (
    <>
      <div className="about-section" id="about">
        <div className="row">
          <div className="col-md-4 col-10 shadow py-3 mx-auto">
            <img
              className="img-fluid img-responsive"
              src={picture}
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="about-right">
              <h2 className="my-4">About</h2>
              <p>
                I am Paul Martin Lorenzo. A Registered
                Electrical Engineer that has found a passion for Computer
                Science. Versatile self-motivated learner with an ongoing
                commitment on learning new skills and technologies. Excited to
                be at the deployment phase of my new career as software
                engineer.
              </p>

              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <h6 className="title">Name</h6>
                  <p className="value">Paul Martin Lorenzo</p>
                  <h6 className="title">Age</h6>
                  <p className="value">25 Years</p>
                  <h6 className="title">Email</h6>
                  <p className="value">lorenzo.paulmartin@gmail.com</p>
                </div>
                <div className="col-12 col-md-6">
                  <h6 className="title">Phone</h6>
                  <p className="value">+63 926 014 8726</p>
                  <h6 className="title">Address</h6>
                  <p className="value">Blk 6 Lt 1, Villa Sta. Catalina, Gen. T. De Leon, Valenzuela City</p>
                  <h6 className="title">Hobby</h6>
                  <p className="value">Coding, Guitar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
