    export const criminalHTML = (criminalObject) => {
        console.log("starting html run", criminalObject.name)
        return `
        <div class = "individual-criminal-card">
            <h2>${criminalObject.name}</h2>
            <ul>
                <li>Age:${criminalObject.age}</li>
                <li>Crime: ${criminalObject.conviction}</li>
                <li>Incarceration Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
                <li>Incarceration End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul> 
        </div>` 

    }