import { returnedCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".bigBoyEvent")


eventHub.addEventListener("associatesClicked", event => {
    //display all associates for criminal
    debugger
    const criminalArray = returnedCriminals()
    const targetCriminal = criminalArray.find(criminal => {
        return criminal.id === parseInt(event.detail.ChosenEvent)
    })
    console.log(targetCriminal)

    let alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`)
    const hTarget = document.querySelector("h4")
    if (alibiTarget.contains(hTarget)) {
        alibiTarget.innerHTML = ""
    } else {
        alibiTarget.innerHTML = `${
            targetCriminal.known_associates.map(associate => {
                return `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
            `
            }).join("")
            }`
    }
})

export const AlibiDialog = (id) => {
    return `
    <span class="alibiDialog--${id}"></span>`
}