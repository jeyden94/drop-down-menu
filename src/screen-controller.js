const buttonParent = document.querySelector(".dropdown-buttons")

export function showDropdown(buttonDivs) {
    for (let i in buttonDivs) {
        buttonParent.appendChild(buttonDivs[i])
    }
}

export function hideDropdown() {
    buttonParent.innerHTML = ''
}