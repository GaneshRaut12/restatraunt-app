import bbqStock from './images/bbq-stock.jpg';

export const About = () => {
  //parent about section
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");

  //bbq image
  const bbqImg = document.createElement("img");
  bbqImg.classList.add("img", "img__bbq");
  bbqImg.alt = "BBQ picture";
  bbqImg.src = bbqStock;
  aboutSection.appendChild(bbqImg);

  //about content container
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about__content");
  aboutSection.appendChild(aboutContent);

  //about header
  const aboutHeader = document.createElement("h2");
  aboutHeader.classList.add("about__header");
  aboutHeader.textContent = "Webpack Restraunt";
  aboutContent.appendChild(aboutHeader);

  //about details
  const aboutDetails = document.createElement("p");
  aboutDetails.classList.add("about__details");
  aboutDetails.textContent =
    "Delicuose Food";
  aboutContent.appendChild(aboutDetails);

  return aboutSection;
};


