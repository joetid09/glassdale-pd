import { getCriminals, returnedCriminals } from "../scripts/criminals/CriminalProvider.js"
import { saveNote } from "./noteProvider.js";
/*
    A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".bigBoyEvent");
const contentTarget = document.querySelector("#noteFormContainer");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContent = document.querySelector("#noteForm--text")
        const suspectId = document.querySelector("#noteForm--criminal")

        if (suspectId.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspectID: parseInt(suspectId.value),
                date: Date.now()
            }

            saveNote(newNote);

        } else {
            window.alert("Choose a Suspect");
        }



    }
})

const render = (criminalArray) => {
    contentTarget.innerHTML = `
       <h3>New Note Details</h3>
		<textarea id="noteForm--text" placeholder="Put a note here"></textarea>
		<select class="dropdown" id="noteForm--criminal">
			<option value="0">Please select a criminal...</option>
			${criminalArray.map(criminalObject => {
        return `<option value=${criminalObject.id}">${criminalObject.name}</option>`
    }).join("")
        }
		</select>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(returnedCriminals());
        })

}