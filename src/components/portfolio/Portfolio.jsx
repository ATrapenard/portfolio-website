import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    title: "This Website",
    description:
      "Responsive website designed to be a display of my personal portfolio.  Also serves as a platform to visualize the results of my programming experience.",
    github: "https://github.com/ATrapenard/portfolio-website",
  },
  {
    id: 2,
    title: "Fitness/Lifestyle Assistance Web/Mobile Application",
    description:
      "A Fitness/Lifestyle Web and Mobile Application designed to enhance user life experience by providing assistance with whatever lifestyle/fitness goals the user intends on accomplishing",
    github: "https://github.com/ATrapenard/fitness-lifestyle-app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, description, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Check out the GitHub page.
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
