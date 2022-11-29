const indiceUser = parseInt(prompt("Entrez l'indice dans la suite de Fibonnacci : "))

let resultat = 0
let indicePrécédent = 1
let temp

for (let i = 0; i <= indiceUser; i++) {
    if (i > 0) {
        temp = resultat
        resultat += indicePrécédent
        indicePrécédent = temp
    }
}

console.log(resultat)