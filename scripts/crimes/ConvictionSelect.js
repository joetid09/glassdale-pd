import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".bigBoyEvent")
const contentTarget = document.querySelector(".hello")

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = convictionsCollection => {
    const listItems = useConvictions()
    contentTarget.innerHTML =
        `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${listItems.map(convictionObject => {
            const convictionName = convictionObject.name
            return `<option value =${convictionName}>${convictionName}</option>`
        })
        }
    </select>
`
}

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        }
        )

}
