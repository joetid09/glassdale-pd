import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const runIt = getConvictions()
const contentTarget = document.querySelector(".hello")

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        render(convictions)
    }
    )

}

const render = convictionsCollection => {
    const listItems = useConvictions()
    contentTarget.innerHTML = 
    `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
            listItems.map(convictionObject => {
                const convictionName = convictionObject.name
                return `<option>${convictionName}</option>`
            })
        }
    </select>
`
}

