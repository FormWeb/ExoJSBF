const tab = [4, 5, 8, 1, 6]
let passage = 0

let permutation
do {
    permutation = false
    for (let i = 0; i < tab.length - 1 - passage; i++) {
        if (tab[i] > tab[i+1]) {
            permutation = true
            let temp = tab[i]
            tab[i] = tab[i+1]
            tab[i+1] = temp
        }
    }
    passage++
} while(permutation)

console.log(tab)