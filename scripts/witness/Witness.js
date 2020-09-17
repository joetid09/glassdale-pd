export const Witness = (witnessObject) => {
    return `
    <section id="witness-${witnessObject.id}" class="card-criminal">
    <h4><strong>Name:</strong> ${withnessObject.name}</h4>
    <p>Statement: ${withnessObject.statement}</p>
    </section>`
}