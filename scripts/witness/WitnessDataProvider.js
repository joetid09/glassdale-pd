let witness = []

export const useWitness = () => {
    return witness.slice()
}

export const getWitness = () => {
    fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedResponse => {
            witness = parsedResponse;
        })
}