/*=== Overview ===
Creates the Home view and adds it to the #content container.
=============================================================================*/

/*=== DOM ===
=============================================================================*/
const navButtons = document.querySelectorAll(".head__nav li");
const menuButton = document.querySelector(".head__menu-button");

/*=== Content ===
=============================================================================*/
import chef from "../assets/imgs/chef.jpg";
import meat from "../assets/imgs/meat.jpg";
import fish from "../assets/imgs/fish.jpg";
import veggie from "../assets/imgs/veggie.jpg";

const dishes = [
    {
        image: chef,
        title: `Chef's Special`,
        desc: `Chef's daily special with the freshest ingredients from every category to restore your health and stamina. Your go to meal for casual hunting when you just don't quite know what to eat. When in doubt, go for the fresh healthy mix everything!`
    },
    {
        image: meat,
        title: `Meat Platter`,
        desc: `The legendary meal for aggressive hunting at the cost of healthy eating habits. Incredible for strength training and maximum offensive performance. You'll become so aggressive even the fiercest monsters will be running away from you!`
    },
    {
        image: fish,
        title: `Fish Platter`,
        desc: `Almost nobody prefers seafood in the new world, but it's an option nonetheless. Hearty and fishy meal that is sure to boost your eye-sight and defensive capabilities should you need them on your hunts.`
    },
    {
        image: veggie,
        title: `Veggie Platter`,
        desc: `Sometimes you need something to boost your immune system and provide resistance against the elements. If you find yourself traveling in the harshest conditions of the new world, be sure to prepare for the extreme weather and the unexpected elements of the nature with this tasty meal.`
    },
]

/*=== Create View ===
=============================================================================*/
const menu = (container, debug = false) => {
    // Highlight Navigation
    navButtons.forEach(button => button.classList.remove("active"));
    menuButton.classList.add("active");

    // Clear Content Container
    container.innerHTML = "";

    // Menu Container
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");
    container.appendChild(menuElement);

    for (let i = 0; i < dishes.length; i++){
        // Item Container
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu__item");
        menuElement.appendChild(menuItem);

        // Image Frame
        const frame = document.createElement("div");
        frame.classList.add("menu__frame");
        menuItem.appendChild(frame);

        // Image
        const image = document.createElement("img");
        image.classList.add("menu__img");
        image.setAttribute("src", dishes[i].image);
        frame.appendChild(image);

        // Text Container
        const menuText = document.createElement("div");
        menuText.classList.add("menu__text");
        menuItem.appendChild(menuText);

        // Title
        const dishTitle = document.createElement("h2");
        dishTitle.innerText = dishes[i].title;
        menuText.appendChild(dishTitle);

        // Description
        const dishDesc = document.createElement("p");
        dishDesc.innerText = dishes[i].desc;
        menuText.appendChild(dishDesc);
    }

    if (debug) console.log(`Menu tab loaded.`);
}

/*=== Exports ===
=============================================================================*/
export default menu;