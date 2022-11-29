let nb1 = parseInt(prompt("Entrez le nombre 1 : ")) // 2
let nb2 = parseInt(prompt("Entrez le nombre 2 : ")) // 5

let min
let max

if (nb1 > nb2) {
    min = nb2
    max = nb1
}
else {
    min = nb1
    max = nb2
}

while (min <= max) { // 2 <= 5 -> 3 <= 5 -> 4 <= 5 
    if (min % 2 === 0) { // 2 % 2 === 0 true -> 3 % 2 === 0 -> 4 % 2 === 0
        console.log(min)
    }

    min++
}

// Avec for
// for (let i = min; i <= max; i++){
//     if (min % 2 === 0) { // 2 % 2 === 0 true -> 3 % 2 === 0 -> 4 % 2 === 0
//         console.log(min)
//     }
// }