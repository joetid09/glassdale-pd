    export const criminalHTML = (criminalObject) => {
        console.log("starting html run", criminalObject.name)
        return `
        <div class = "criminal-listing-card">
            <h2>${criminalObject.name}</h2>
            <ul>
                <li>Age:${criminalObject.age}
                <li>Crime: ${criminalObject.conviction}

            </ul> 
        </div>` 

    }