/*=== App overview ===
Restaurant page that displays tabbed navigation and injects
DOM elements via javascript. Each of the tabbed elements
are split into their own files and loaded here.
=============================================================================*/

/*=== Imports ===
- home, menu, contact API: page(container, debug = false)
=============================================================================*/
import '../css/main.scss';
import home from "./home";
import menu from "./menu";
import contact from "./contact";

let debug = false;

/*=== DOM ===
=============================================================================*/
const content = document.querySelector("#content");
const header = document.querySelector(".head");

/*=== Events ===
=============================================================================*/
header.addEventListener("click", event => {
    switch (event.target.textContent) {
        case "The Canteen":
        case "Home":
            home(content, debug);
            break;
        case "Menu":
            menu(content, debug);
            break;
        case "Contact":
            contact(content, debug);
            break;
        default:
            break;
    }
});

/*=== Init ===
=============================================================================*/
home(content, debug);