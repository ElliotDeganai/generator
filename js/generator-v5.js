var groupeMots = null;
var form = document.querySelector("form");
function generateCitation(part1, part2, part3) {
    var indicePart1 = Math.round((part1.length - 1) * Math.random());
    var indicePart2 = Math.round((part2.length - 1) * Math.random());
    var indicePart3 = Math.round((part3.length - 1) * Math.random());
    var citationElt = document.createElement("p"); // Création d'un élément li
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
        for (var i = 0; i < nbrCitation; i++) {
            generateCitation(groupeMots[choixGroup].firstPart, groupeMots[choixGroup].secondPart, groupeMots[choixGroup].thirdPart);
        }
    });
}
document.getElementById("generate").addEventListener("click", getData);
