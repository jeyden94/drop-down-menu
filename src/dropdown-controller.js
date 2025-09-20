import { clickButton } from "./dropdown-function-controller";

export function createDropdown(dropdownParent, buttonArray) {
  const buttonDivs = createButtonDivs(buttonArray);
  const dropdownButton = createDropdownButton(dropdownParent);
  const dropdownOptionsParent = createDropdownOptionsParent(dropdownParent);

  dropdownButton.addEventListener("click", () => clickOpen());

  function clickOpen() {
    showDropdown(buttonDivs, dropdownOptionsParent);
    dropdownButton.removeEventListener("click", () => clickOpen());
    dropdownButton.addEventListener("click", () => clickClose());
  }

  function clickClose() {
    hideDropdown(dropdownOptionsParent);
    dropdownButton.removeEventListener("click", () => clickClose());
    dropdownButton.addEventListener("click", () => clickOpen());
  }
}

function createDropdownButton(dropdownParent) {
  const dropDownButton = document.createElement("button");
  dropDownButton.classList.add("dropdown-button");
  dropdownParent.appendChild(dropDownButton);

  for (let i = 0; i < 3; i++) {
    const horizontalLine = document.createElement("div");
    horizontalLine.classList.add("horizontal-line");
    dropDownButton.appendChild(horizontalLine);
  }

  return dropDownButton;
}

function createDropdownOptionsParent(dropdownParent) {
  const dropdownOptionsParent = document.createElement("div");
  dropdownOptionsParent.classList.add("dropdown-options");
  dropdownParent.appendChild(dropdownOptionsParent);
  return dropdownOptionsParent;
}

function createButtonDivs(buttons) {
  let buttonDivs = [];

  for (let i in buttons) {
    const newButtonDiv = document.createElement("button");
    newButtonDiv.classList.add(`${buttons[i].buttonName}`);
    newButtonDiv.textContent = `${buttons[i].buttonName}`;
    newButtonDiv.addEventListener("click", () => clickButton(buttons[i]));
    buttonDivs.push(newButtonDiv);
  }

  return buttonDivs;
}

function showDropdown(buttonDivs, dropdownOptionsParent) {
  for (let i in buttonDivs) {
    dropdownOptionsParent.appendChild(buttonDivs[i]);
  }
}

function hideDropdown(dropdownOptionsParent) {
  dropdownOptionsParent.innerHTML = "";
}
