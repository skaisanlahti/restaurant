/*=== Overview ===
Creates the Home view and adds it to the #content container.
=============================================================================*/

/*=== DOM ===
=============================================================================*/
const navButtons = document.querySelectorAll(".head__nav li");
const homeButton = document.querySelector(".head__home-button");

/*=== Content ===
=============================================================================*/
const copy = `Only the freshest ingredients for your adventures!`;
const quote = `"Never forget to eat for Attack Up Large!"`;
const author = `- Unknown Hunter`;

/*=== Create View ===
=============================================================================*/
const home = (container, debug = false) => {
    // Highlight Navigation
    navButtons.forEach(button => button.classList.remove("active"));
    homeButton.classList.add("active");

    // Clear Content Container
    container.innerHTML = "";

    // Container
    const homeElement = document.createElement("div");
    homeElement.classList.add("home");
    container.appendChild(homeElement);

    // Copy
    const copyElement = document.createElement("h1");
    copyElement.innerText = copy;
    homeElement.appendChild(copyElement);

    // Quote
    const quoteElement = document.createElement("p");
    quoteElement.innerText = quote;
    homeElement.appendChild(quoteElement);

    // Author
    const authorElement = document.createElement("p");
    authorElement.innerText = author;
    homeElement.appendChild(authorElement);

    if (debug) console.log(`Home tab loaded.`);
}

/*=== Exports ===
=============================================================================*/
export default home;
