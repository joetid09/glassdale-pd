import { getNotes, useNotes, deleteNote } from "./noteProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { returnedCriminals } from "../scripts/criminals/CriminalProvider.js";

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".bigBoyEvent")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteNote(id)
            .then(() => {
                const notes = useNotes()
                const suspects = returnedCriminals()
                render(notes, suspects)
            })

    }
})

const render = (notes, suspects) => {
    const criminals = returnedCriminals()
    contentTarget.innerHTML = notes.map((noteObject) => {
        noteObject.suspectObject = suspects.find(suspect => {
            return suspect.id === parseInt(noteObject.suspectID)
        })
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
    render(newNotes, returnedCriminals())
})