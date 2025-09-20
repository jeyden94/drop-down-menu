import "./styles.css";

import { createDropdown } from "./dropdown-controller.js";

const dropdownParentOne = document.querySelector(".test-div")

const buttonArrayObjects = [
    {
        name: "Update"
    }, 
    {
        name: "Delete"
    },
    {
        name: "Complete"
    }
];

createDropdown(dropdownParentOne, buttonArrayObjects)