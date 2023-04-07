/**
 * Nesting components:
 * - Create a new cardlist component.
 * - Iterate through all available images in `data.js`.
 * - Output a card for each available image.
 */

import data from "./data.js";
import cardList from "./components/cardlist.js";

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = cardList(data);
