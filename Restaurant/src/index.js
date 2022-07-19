import {Nav} from './Nav';
import {About} from './About';
import {Menu} from './Menu';
import {Contact} from './Contact';

//load Nav and About section on page load
const content = document.getElementById("content");
content.appendChild(Nav());
content.appendChild(About());
document.getElementById("about").classList.add("active");

["about", "menu", "contact"].forEach((link) => {
    document.getElementById(link).addEventListener("click", (e) => {
        //clear #content of everything but nav
        while (content.lastElementChild.className !== "navbar") {
            content.removeChild(content.lastElementChild);
        }

        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        //append proper page to DOM
        if (e.target.id === "about") {
            content.appendChild(About());
        } else if (e.target.id === "menu") {
            content.appendChild(Menu());
        } else if (e.target.id === "contact") {
            content.appendChild(Contact());
        }
    })
})