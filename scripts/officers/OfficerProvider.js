console.log("test 1, 2, test test")

let officers = []

export const returnedOfficers = () => {
    return officers.slice()
}


export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then((response) => response.json())
        .then(
            parsedOfficers => {
                // console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}
