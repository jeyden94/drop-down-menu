const buttons = ["Update", "Delete", "Complete", "Shimo"]

export const buttonDivs = createButtonDivs(buttons)

function createButtonDivs(buttons) {
    
    let buttonDivs = []

    for (let i in buttons) { 
        const newButtonDiv = document.createElement("button")

        newButtonDiv.classList.add(`${buttons[i]}`)
        newButtonDiv.textContent = `${buttons[i]}`
        newButtonDiv.addEventListener("click", () => clickButton(buttons[i]))
        buttonDivs.push(newButtonDiv)
    }

    return buttonDivs
}

function clickButton(buttonName) {
    console.log(buttonName)
}

