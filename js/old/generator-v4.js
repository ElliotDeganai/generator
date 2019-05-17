var groupeMots = null;
ajaxGet("http://localhost/generator/data/generator-v4.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    groupeMots = JSON.parse(reponse);
    function generateCitation(part1, part2, part3) {
        var indicePart1 = Math.round((part1.length - 1) * Math.random());
        var indicePart2 = Math.round((part2.length - 1) * Math.random());
        var indicePart3 = Math.round((part3.length - 1) * Math.random());
        var citationElt = document.createElement("p"); // Création d'un élément li
        citationElt.textContent = part1[indicePart1] + " " + part2[indicePart2] + " " + part3[indicePart3];
        document.getElementById("citation").appendChild(citationElt);
    }
    var form = document.querySelector("form");
    document.getElementById("generate").addEventListener("click", function (e) {
        document.getElementById("citation").innerHTML = "";
        var nbrCitation = form.elements.nbrCitation.value;
        var choixGroup = form.elements.groupe.value;
        switch (choixGroup) {
            case "groupe1":
                for (var i = 0; i < nbrCitation; i++) {
                    generateCitation(groupeMots[0].firstPart, groupeMots[0].secondPart, groupeMots[0].thirdPart);
                }
                break;
            case "groupe2":
                for (var i = 0; i < nbrCitation; i++) {
                    generateCitation(groupeMots[1].firstPart, groupeMots[1].secondPart, groupeMots[1].thirdPart);
                }
                break;
            default:
                var citationElt = document.createElement("p"); // Création d'un élément li
                citationElt.textContent = "Veuillez choisir vos paramètres.";
                document.getElementById("citation").appendChild(citationElt);
        }
    });
});
