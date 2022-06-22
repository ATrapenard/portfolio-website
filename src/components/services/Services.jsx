import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Creating user friendly and accessible interface elements.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Skilled in providing design based on predicting user necessity
                for the anticipated product.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Skilled in creating responsive Frontend designs that correlate
                with UI/UX needs.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Studying the process of creating data management systems for
                Backend Design.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
