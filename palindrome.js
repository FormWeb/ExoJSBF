const mot = prompt("Entrez un mot : ") // Banane

// V1

let j = mot.length - 1
let palindrome = true;

for (let i = 0; i <= j/2; i++) {
    if (mot[i] !== mot[j]) {
        palindrome = false
    }
    j--
}

console.log(palindrome)

// V2

// let motInverse = ""
// let palindromeV2 = false

// for (let i = mot.length - 1; i >= 0; i--) { // 5 -> 4 -> ... -> 0
//     motInverse = motInverse + mot[i] // "" -> "e" -> "en" -> ... -> "enanaB"
// }

// if (motInverse === mot) { // "Banane" === "enanaB" -> false
//     palindromeV2 = true
// }

if (palindrome) {
    console.log("Ceci est un palindrome")
}
else {
    console.log("Ceci n'est pas un palindrome")
}