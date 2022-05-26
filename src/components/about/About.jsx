import React from "react";
import "./about.css";
import COGS from "../../assets/ucsdcogsci2.jpg";
import { RiAwardFill } from "react-icons/ri";
import { AiFillFolder } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={COGS} alt="education" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5>-Education-</h5>
              <h4>University of California, San Diego</h4>
              <h4>Class of 2023</h4>
              <small>
                Bachelor's Degree in Cognitive Science with a spacialization in
                Machine Learning and Neural Computation
              </small>
            </article>
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>-Experience-</h5>
              <small>2+ Years Learning/Creating</small>
              <div className="about__experience-list">
                <p>Small to Medium JS/React Applications</p>
                <p>Data Visualization/Manipulation in Python</p>
              </div>
            </article>
            <article className="about__card">
              <FaPeopleCarry className="about__icon" />
              <h5>-Clients-</h5>
              <small>Must Always Start Somewhere</small>
            </article>
            <article className="about__card">
              <AiFillFolder className="about__icon" />
              <h5>-Projects-</h5>
              <small>
                <a href="https://github.com/ATrapenard">
                  Check Out My Github For a List of All My Projects
                </a>
              </small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
