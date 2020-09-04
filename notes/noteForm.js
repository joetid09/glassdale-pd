
import { saveNote } from "./noteProvider.js"
import { getCriminals, returnedCriminals } from "../scripts/criminals/CriminalProvider.js"
const eventHub = document.querySelector(".bigBoyEvent")
const contentTarget = document.querySelector("#noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContent = document.querySelector("#noteForm--text")
        const NoteCriminal = document.querySelector("#noteform--criminal")
        if (NoteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspect: noteCriminal.value,
                date: Date
            }
            saveNote(newNote);

        } else {
            window.alert("Choose a suspect");
        }
    }
})

const render = (criminalArray) => {
    contentTarget.innerHTML = `<h3>New Note Details</h3>   
            <textarea id="noteForm--text" placeholder="Put your note here"></textarea>
            
    <select class="dropdown" id="noteForm--criminal">
        <option value="0">Please select a criminal...</option>
        ${
        criminalArray.map(criminalObject => {
            return `<option value =${criminalObject.ame}>${criminalObject.name}</option>`
        }).join("")
        }
    </select>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(returnedCriminals())
        })
}