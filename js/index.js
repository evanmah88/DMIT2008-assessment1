getChampionData('/db/champions.json')


import { championTemplate } from "./template"

console.log(championTemplate)

let championStore = []

async function getChampionData(url) {
    const response = await fetch(url) 
    championStore = [ ... await response.json()] // parsing data in
       renderChampion(championStore)
    
}

function renderChampion (champions){
    //container is in memoery
    // return elm is in memory
    const container = document.createElement('div')
    
    champions.forEach((champion) => {
        // Create an element for each champion and append it to the container
        const championElement = document.createElement("div");
        championElement.innerHTML = championTemplate(champion);
        container.appendChild(championElement);
      });

    const cardsContainer = document.querySelector("#cards");
    cardsContainer.appendChild(container);

    
 
}

