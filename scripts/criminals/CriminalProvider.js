
console.log("test 1, 2, test test")

let criminals = []

export const returnedCriminals = () => {
    return criminals.slice()
}


export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}
