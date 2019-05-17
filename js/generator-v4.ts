var groupeMots = null; 

var form: HTMLFormElement = document.querySelector("form");

function generateCitation(part1: string[], part2: string[], part3: string[])
{
    let indicePart1: number = Math.round((part1.length-1)*Math.random());
    let indicePart2: number = Math.round((part2.length-1)*Math.random());
    let indicePart3: number = Math.round((part3.length-1)*Math.random());
    let citationElt: HTMLParagraphElement = document.createElement("p"); // Création d'un élément li
    citationElt.textContent = part1[indicePart1] +" "+ part2[indicePart2] +" "+ part3[indicePart3];
    document.getElementById("citation").appendChild(citationElt);
}

function getData(){

    ajaxGet("http://localhost/generator/data/generator-v4.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    groupeMots = JSON.parse(reponse);
    
document.getElementById("citation").innerHTML = "";

var nbrCitation = form.elements.nbrCitation.value;
var choixGroup = form.elements.groupe.value;
    
switch (choixGroup) {
    case "groupe1":
        for (let i = 0; i < nbrCitation; i++) {
            generateCitation(groupeMots[0].firstPart, groupeMots[0].secondPart, groupeMots[0].thirdPart);
            }
        break;
    case "groupe2":
        for (let i = 0; i < nbrCitation; i++) {
            generateCitation(groupeMots[1].firstPart, groupeMots[1].secondPart, groupeMots[1].thirdPart);
            }
        break;
    default:
        var citationElt = document.createElement("p"); // Création d'un élément li
        citationElt.textContent = "Veuillez choisir vos paramètres."
        document.getElementById("citation").appendChild(citationElt);
}

})

}

document.getElementById("generate").addEventListener("click", getData);

    
 