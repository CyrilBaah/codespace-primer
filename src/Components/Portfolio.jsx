/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "DevSecOps CI/CD pipeline",
    description:
      "DevSecOps practices to ensure security throughout the development lifecycle.",
    url: "https://github.com/CyrilBaah/bookstore",
  },
  {
    title: "CRM Genie",
    description:
      " customer relationship management platform that helps businesses manage and track their interactions with customers",
    url: "https://devpost.com/software/crm-genie",
  },
  {
    title: "Contribute to Open Source",
    description:
      "A description of open source pull request that was successfully merged into the project.",
    url: "https://github.com/ninadingole/docker-compose-stacks/commit/7c58968973628dc9cf9a0e4a8acb4c70b5224164",
  },
  {
    title: "Beautiful Reminders",
    description:
      "Keeping the environment clean is very key to our health",
    url: "https://proj3-clean-by-nature.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
