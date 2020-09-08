import { AlibiDialog } from "./alibiDialog.js"

const eventHub = document.querySelector(".bigBoyEvent")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")
        //split is making an array with two items of prefix of ciminal object and the criminal id based on criminalHTML 

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                ChosenEvent: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent)
    }
})

export const criminalHTML = (criminalObject) => {
    return `
        <div class="individual-criminal-card">
            <h2>${criminalObject.name}</h2>
            <ul>
                <li>Age:${criminalObject.age}</li>
                <li>Crime: ${criminalObject.conviction}</li>
                <li>Incarceration Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
                <li>Incarceration End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
                <button id="associates--${criminalObject.id}">Alibis</button>
                ${AlibiDialog(criminalObject.id)}
                </ul> 
        </div>`

}