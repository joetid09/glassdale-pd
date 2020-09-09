import { getNotes, useNotes } from "./noteProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { returnedCriminals } from "../scripts/criminals/CriminalProvider.js";

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".bigBoyEvent")

const render = (notes) => {
    const criminals = returnedCriminals()
    contentTarget.innerHTML = notes.map((noteObject) => {
        return NoteHTMLConverter(noteObject)
    }).join("");
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}


eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})