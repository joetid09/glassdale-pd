import { useOfficers, getOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".helloOfficer")
const eventHub = document.querySelector(".bigBoyEvent")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        // const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficer: changeEvent.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
    }
})

const render = officerCollection => {
    const listItems = useOfficers()
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Choose the arresting officer</option>
        ${
        listItems.map(officerObject => {
            const officerName = officerObject.name
            return `<option value="${officerName}">${officerName}</option>`
        })
        }
    </select>
`
}

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        }
        )

}
