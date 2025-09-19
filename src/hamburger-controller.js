import { buttonDivs } from "./button-controller.js"
import { showDropdown, hideDropdown } from "./screen-controller.js"

export const hamburger = document.querySelector(".hamburger")


hamburger.addEventListener("click", () => clickHamburgerOpen())

function clickHamburgerOpen() {
    showDropdown(buttonDivs)
    hamburger.removeEventListener("click", () => clickHamburgerOpen())
    hamburger.addEventListener("click", () => clickHamburgerClose())
}

function clickHamburgerClose() {
    hideDropdown()
    hamburger.removeEventListener("click", () => clickHamburgerClose())
    hamburger.addEventListener("click", () => clickHamburgerOpen())
}