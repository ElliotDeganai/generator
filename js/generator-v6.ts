
class Citation {
    sentence: string;
    constructor(part1: string[], part2: string[], part3: string[]) {
      this.sentence = part1[Math.round((part1.length - 1) * Math.random())] + " " + part2[Math.round((part2.length - 1) * Math.random())] + " " + part3[Math.round((part3.length - 1) * Math.random())];
    }
  }

  class Generator {
    generateListeOfCitation(nbrCitation: number, part1: string[], part2: string[], part3: string[]): Array<Citation>{
        let listeCitation: Array<Citation> = [];
        for (let i = 0; i < nbrCitation; i++) {
          let citation = new Citation(part1, part2, part3);
          listeCitation[i] = citation;
        }
        return listeCitation;
    }
  }

  class Painter {
    paint(elementARemplir: HTMLElement,  listeCitation: Array<Citation>): void {
      let nbrAjout = listeCitation.length;
      for (let citation of listeCitation) {
        let elementAAjouter = document.createElement("p"); 
        elementAAjouter.textContent = citation.sentence;
        elementARemplir.appendChild(elementAAjouter);
      }
    }
  }

var groupeMots = null;
var form: HTMLFormElement = document.querySelector("form");

function getData() {
    ajaxGet("http://localhost/generator/data/generator-v4.json", function (reponse) {
        // Transforme la réponse en tableau d'objets JavaScript
        groupeMots = JSON.parse(reponse);
        document.getElementById("citation").innerHTML = "";
        var nbrCitation = form.elements.nbrCitation.value;
        var choixGroup = form.elements.groupe.value;
        let generator = new Generator();
        let painter = new Painter();
        let listeCitation = generator.generateListeOfCitation(nbrCitation, groupeMots[choixGroup].firstPart, groupeMots[choixGroup].secondPart, groupeMots[choixGroup].thirdPart);
        painter.paint(document.getElementById("citation"), listeCitation);
})}

document.getElementById("generate").addEventListener("click", getData);
