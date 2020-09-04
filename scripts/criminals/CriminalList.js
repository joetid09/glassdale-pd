import { getCriminals, returnedCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./Criminal.js"



const eventHub = document.querySelector(".bigBoyEvent")
const contentTarget = document.querySelector(".criminal-cards")

eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = returnedCriminals().filter(chargedFor => {
            return chargedFor.conviction === event.detail.crimeThatWasChosen
        })
        addCriminalsToDom(matchingCriminals)
    }
})

eventHub.addEventListener("officerSelected", event => {
    debugger;
    if (event.detail.selectedOfficer !== "0") {
        const matchingOfficers = returnedCriminals().filter(arrestedBy => {
            return arrestedBy.arrestingOfficer === event.detail.selectedOfficer
        })
        addCriminalsToDom(matchingOfficers)
    }
})

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = returnedCriminals()
            addCriminalsToDom(appStateCriminals)
        })
}

const addCriminalsToDom = (aCriminalArray) => {
    const criminalCards = document.querySelector(".criminal-cards")

    let HTMLArray = aCriminalArray.map(singleCriminal => {
        return criminalHTML(singleCriminal)
    })

    criminalCards.innerHTML = HTMLArray.join("");
}

