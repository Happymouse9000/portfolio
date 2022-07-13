import React, { useState } from "react";
import Swal from "sweetalert2";
import "./contact-section.styles.scss";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    handleInputValidation();
    if (name !== "" && email.includes("@") && message !== "") {
      fetch("https://sheltered-mesa-40775.herokuapp.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === true) {
            Swal.fire({
              icon: "success",
              title: "Message sent",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Unable to send message",
            });
          }
        });
    }
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleInputValidation = () => {
    let alertMessageTemp = [...alertMessage];
    if (name === "") {
      alertMessageTemp.push({ id: 1, type: "empty-name" });
    }
    if (!email.includes("@")) {
      alertMessageTemp.push({ id: 2, type: "invalid-email" });
    }
    if (message === "") {
      alertMessageTemp.push({ id: 3, type: "empty-message" });
    }
    setAlertMessage(alertMessageTemp);
  };

  return (
    <>
      <div className="contact-section" id="contact">
        <div className="container">
          <h2 className="mb-4 text-white">Contact</h2>
          <div className="card">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group col-md-12">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className={`form-control ${
                            alertMessage.find((item) => item.id === 1)
                              ? "is-invalid"
                              : null
                          }`}
                          placeholder="Enter your name *"
                          onChange={(e) => setName(e.target.value)}
                          onClick={() => setAlertMessage([])}
                        />
                        <div className="invalid-feedback">
                          Please enter your name.
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className={`form-control ${
                            alertMessage.find((item) => item.id === 2)
                              ? "is-invalid"
                              : null
                          }`}
                          placeholder="Enter your email *"
                          onChange={(e) => setEmail(e.target.value)}
                          onClick={() => setAlertMessage([])}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email adress.
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-2">
                      <textarea
                        id="comment"
                        cols="30"
                        rows="6"
                        className={`form-control ${
                          alertMessage.find((item) => item.id === 3)
                            ? "is-invalid"
                            : null
                        }`}
                        placeholder="Your Message *"
                        onChange={(e) => setMessage(e.target.value)}
                        onClick={() => setAlertMessage([])}
                      />
                      <div className="invalid-feedback">
                        Please enter your message.
                      </div>
                    </div>
                    <button
                      className="submit-btn text-center mt-2"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-12">
                    <h6>
                      <i className="fa fa-map-marker"></i> Address / Street
                    </h6>
                    <p>Blk 6, Lt 1, Villa Sta. Catalina, Gen T. De Leon, Valenzuela City</p>
                    <h6>
                      <i className="fa fa-phone"></i> Contact Number
                    </h6>
                    <p>+63 926 014 8726</p>
                    <h6>
                      <i className="fa fa-globe"></i> Website Address
                    </h6>
                    <p>kronliu.gitlab.io/allen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
