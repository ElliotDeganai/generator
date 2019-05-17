var Citation = /** @class */ (function () {
    function Citation(part1, part2, part3) {
        this.sentence = part1[Math.round((part1.length - 1) * Math.random())] + " " + part2[Math.round((part2.length - 1) * Math.random())] + " " + part3[Math.round((part3.length - 1) * Math.random())];
    }
    return Citation;
}());
var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.generateListeOfCitation = function (nbrCitation, part1, part2, part3) {
        var listeCitation = [];
        for (var i = 0; i < nbrCitation; i++) {
            var citation = new Citation(part1, part2, part3);
            listeCitation[i] = citation;
        }
        return listeCitation;
    };
    return Generator;
}());
var Painter = /** @class */ (function () {
    function Painter() {
    }
    Painter.prototype.paint = function (elementARemplir, listeCitation) {
        var nbrAjout = listeCitation.length;
        for (var _i = 0, listeCitation_1 = listeCitation; _i < listeCitation_1.length; _i++) {
            var citation = listeCitation_1[_i];
            var elementAAjouter = document.createElement("p");
            elementAAjouter.textContent = citation.sentence;
            elementARemplir.appendChild(elementAAjouter);
        }
    };
    return Painter;
}());
var groupeMots = null;
var form = document.querySelector("form");
function getData() {
    ajaxGet("http://localhost/generator/data/generator-v4.json", function (reponse) {
        // Transforme la réponse en tableau d'objets JavaScript
        groupeMots = JSON.parse(reponse);
        document.getElementById("citation").innerHTML = "";
        var nbrCitation = form.elements.nbrCitation.value;
        var choixGroup = form.elements.groupe.value;
        var generator = new Generator();
        var painter = new Painter();
        var listeCitation = generator.generateListeOfCitation(nbrCitation, groupeMots[choixGroup].firstPart, groupeMots[choixGroup].secondPart, groupeMots[choixGroup].thirdPart);
        painter.paint(document.getElementById("citation"), listeCitation);
    });
}
document.getElementById("generate").addEventListener("click", getData);
