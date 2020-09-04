/*
Hold array of notes
useNotes - make copy of array notes and returns
get all notes from DB
*/

export const saveNote = noteOBJ => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteOBJ)
    })
        .then((result) => {
            console.log("Celebrate right now");
        })
}
