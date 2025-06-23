import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensiones = ['.com', '.net', '.us', '.io'];


for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let b = 0; b < noun.length; b++) {
      console.log(pronoun[i] + adj[a] + noun[b]);

    }

  };

}



//Agrega varios tipos de extensiones, por ejemplo: .com, .net, .us, .io, etc.

pronoun.map((pronoun) => {
  adj.map((adj) => {
    noun.map((noun) => {
      extensiones.map((extensiones) => {
        console.log(pronoun + adj + noun + extensiones);

      });
    });
  });
});

};
