// const buttonParent = document.querySelector(".dropdown-options")

export function showDropdown(buttonDivs, dropdownOptionsParent) {
    for (let i in buttonDivs) {
        dropdownOptionsParent.appendChild(buttonDivs[i])
    }
}

export function hideDropdown(dropdownOptionsParent) {
    dropdownOptionsParent.innerHTML = ''
}