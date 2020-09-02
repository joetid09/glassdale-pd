import { getCriminals, returnedCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./Criminal.js"



const eventHub = document.querySelector(".bigBoyEvent")
const contentTarget = document.querySelector(".criminal-cards")

eventHub.addEventListener("crimeChosen", event => {
    debugger;
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = returnedCriminals().filter(chargedFor => {
            return chargedFor.conviction === event.detail.crimeThatWasChosen
        })
        addCriminalsToDom(matchingCriminals)
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
