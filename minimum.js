const tab = [4, 5, 6]

let minimum = tab[0] // 4 -> 1

for (let i = 1; i < tab.length; i++) {
    if (tab[i] < minimum) {
        minimum = tab[i]
    }
}

// console.log(Math.min(...tab))

// for (const elem of tab) {
//     if (elem < minimum) {
//         minimum = tab[i]
//     }
// }