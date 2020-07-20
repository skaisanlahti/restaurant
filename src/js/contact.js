/*=== Overview ===
Creates the Contact view and adds it to the #content container.
=============================================================================*/

/*=== DOM ===
=============================================================================*/
const navButtons = document.querySelectorAll(".head__nav li");
const contactButton = document.querySelector(".head__contact-button");

/*=== Content ===
=============================================================================*/
const addressLabel = `Address:`;
const address = `Astera 3rd Floor`;
const emailLabel = `Email:`;
const email = `canteen@newworld.com`;

/*=== Create View ===
=============================================================================*/
const contact = (container, debug = false) => {
    // Highlight Navigation
    navButtons.forEach(button => button.classList.remove("active"));
    contactButton.classList.add("active");

    // Clear Content Container
    container.innerHTML = "";

    // Container
    const contactElement = document.createElement("div");
    contactElement.classList.add("contact");
    container.appendChild(contactElement);

    // Address Label
    const addressHead = document.createElement("h2");
    addressHead.innerText = addressLabel;
    contactElement.appendChild(addressHead);

    // Address
    const addressText = document.createElement("p");
    addressText.innerText = address;
    contactElement.appendChild(addressText);

    // Email Label
    const emailHead = document.createElement("h2");
    emailHead.innerText = emailLabel;
    contactElement.appendChild(emailHead);

    // Email
    const emailText = document.createElement("p");
    emailText.innerText = email;
    contactElement.appendChild(emailText);

    if (debug) console.log(`Contact tab loaded.`);
}

/*=== Exports ===
=============================================================================*/
export default contact;
