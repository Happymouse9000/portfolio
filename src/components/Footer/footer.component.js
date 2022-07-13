import React from "react";
import picture from "../../assets/img/picture.jpg";
import "./footer.styles.scss";

const ContactSection = () => {
  return (
    <>
      <footer className="footer d-flex justify-content-center">
      
        <div className="pr-3">
          <a
            href="https://www.facebook.com/cocolangsapatna/"
            className="text-white"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <div className="pr-3">
          <a
            href="https://gitlab.com/Happymouse"
            className="text-white"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
