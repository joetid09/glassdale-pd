import { getWitness, useWitness } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

export const witnessList = () => {
    debugger;
    getWitness()
        .then(() => {
            const witnessArray = useWitness();
            addWitnessToDom(witnessArray);
        })
}

const addWitnessToDom = (witnessCollection) => {
    const domElement = document.querySelector("#witnessContainer")

    let HTMLArray = witnessCollection.map(singleWitness => {
        return Witness(singleWitness)
    }).join("")
    domElement.innerHTML += HTMLArray
}