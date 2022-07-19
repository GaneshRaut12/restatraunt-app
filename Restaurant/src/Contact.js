import FakeMap from './images/FakeMap.png';

export const Contact = () => {
    const contactContainer = document.createElement("section");
    contactContainer.className = "contact__container";

    const header = document.createElement("h2");
    header.classList.add("contactHeader");
    header.textContent = "Ganesh Baliram Raut";
    contactContainer.appendChild(header);

    const address = document.createElement("p");
    address.classList.add("address");
    address.innerHTML = "12345 Main St<br>Marseilles, IL";
    contactContainer.appendChild(address);

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = '(815)123-4567';
    contactContainer.appendChild(phone);

    
    return contactContainer;
}

