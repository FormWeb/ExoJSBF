const nb1 = parseInt(prompt("Entrez le nombre 1 : "))
const operateur = prompt("Entrez un opérateur (+, /, -, *)")
const nb2 = parseInt(prompt("Entrez le nombre 2"))

let resultat

switch (operateur) {
    case "+":
        resultat = nb1 + nb2
        break
    case "-":
        resultat = nb1 - nb2
        break
    case "/":
        resultat = nb1 / nb2
        break
    case "*":
        resultat = nb1 * nb2
        break
    default:
        resultat = null
        break
}

if (resultat) {
    console.log("Le résultat est " + resultat)
}
else {
    console.log("L'opérateur n'est pas bon")
}

// Solution avec ternaire
// resultat ? console.log("Le résultat est " + resultat) : console.log("L'opérateur n'est pas bon")