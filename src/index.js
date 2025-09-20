import "./styles.css";

import { createDropdown } from "./dropdown-controller.js";

const dropdownParentOne = document.querySelector(".test-div");

const buttonArrayObjects = [
  {
    buttonName: "Update",
  },
  {
    buttonName: "Delete",
  },
  {
    buttonName: "Complete",
  },
];

createDropdown(dropdownParentOne, buttonArrayObjects);
