var groupeMots = null;

var form: HTMLFormElement = document.querySelector("form");

function generateCitation(part1: string[], part2: string[], part3: string[]) {
    let indicePart1: number = Math.round((part1.length - 1) * Math.random());
    let indicePart2: number = Math.round((part2.length - 1) * Math.random());
    let indicePart3: number = Math.round((part3.length - 1) * Math.random());
    let citationElt: HTMLParagraphElement = document.createElement("p"); // Création d'un élément li
    citationElt.textContent = part1[indicePart1] + " " + part2[indicePart2] + " " + part3[indicePart3];
    document.getElementById("citation").appendChild(citationElt);
}

function getData() {

    ajaxGet("http://localhost/generator/data/generator-v4.json", function (reponse) {
        // Transforme la réponse en tableau d'objets JavaScript
        groupeMots = JSON.parse(reponse);

        document.getElementById("citation").innerHTML = "";

        var nbrCitation = form.elements.nbrCitation.value;
        var choixGroup = form.elements.groupe.value;

                for (let i = 0; i < nbrCitation; i++) {
                    generateCitation(groupeMots[choixGroup].firstPart, groupeMots[choixGroup].secondPart, groupeMots[choixGroup].thirdPart);
                }

})}

document.getElementById("generate").addEventListener("click", getData);
