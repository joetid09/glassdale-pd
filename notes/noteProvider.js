/*
Hold array of notes
useNotes - make copy of array notes and returns
get all notes from DB
*/

let notes = [];

const eventHub = document.querySelector(".bigBoyEvent")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/posts')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
    return notes.slice();
}

export const saveNote = noteObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
        .then(() => {
            return getNotes()
        })
        .then(dispatchStateChangeEvent)
}