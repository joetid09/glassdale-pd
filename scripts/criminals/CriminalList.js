import { getCriminals, returnedCriminals } from "./CriminalProvider.js"
import {criminalHTML} from "./Criminal.js"

const criminalCards = document.querySelector(".criminal-cards")



export const criminalsList =() => {
    getCriminals()
    .then(() => {
        const theCriminal = returnedCriminals()
        console.log("theCriminal", theCriminal)
        addCriminalsToDom(theCriminal);
    }

    )
}

const addCriminalsToDom = (aCriminalArray) => {
    const criminalCards = document.querySelector(".criminal-cards")

    let HTMLArray = aCriminalArray.map(singleCriminal => {
        return criminalHTML(singleCriminal)
    })
    console.log("HTMLArray", HTMLArray)

    criminalCards.innerHTML = HTMLArray.join("");
}
