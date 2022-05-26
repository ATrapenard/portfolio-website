import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    title: "This Website",
    github: "https://github.com/ATrapenard/portfolio-website",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <h3>{title}</h3>
              <h5>
                Check out the Github site for more information on the process
              </h5>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
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
