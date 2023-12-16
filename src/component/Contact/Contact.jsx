import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact" id="contact">
      <div className="left-c">
        <hr />
        <div>
          <span className="stroke-text">Interested to</span>
        </div>
        <div>
          <span>talk to us?</span>
        </div>
      </div>

      <div className="right-c">
        <div className="email">
          <form ref={form} className="email-container" onSubmit={{ sendEmail }}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />
            <button className="btn btn-c">Contact Us Now</button>
          </form>
        </div>
        <div className="contact-details">
          <span>299/A, Thaikka Road, Kalmunai - 07 </span>
          <span>Sri Lanka</span>
          <span>+94 759 090 225</span>
          <span>maaya.eng@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
