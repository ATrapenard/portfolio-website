import React from "react";
import "./contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oj4z6hu",
      "template_qibscmi",
      form.current,
      "3-VXDbWFuXgSHDHez"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alan.trapenard@gmail.com</h5>
            <a href="mailto:alan.trapenard@gmail.com">Send an Email</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Alan Trapenard</h5>
            <a href="https://m.me/100002867322247" target="_blank">
              Send Me a Message
            </a>
          </article>
          <article className="contact__option">
            <BsFillChatTextFill className="contact__option-icon" />
            <h4>Text</h4>
            <h5>Shoot Me a Text</h5>
            <small>(310)-408-5105</small>
          </article>
        </div>
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
