const noel = ["Jean", "Jacques", "Jules", "Paul"]

for (let i = 0; i < noel.length - 1; i++) { // 0 -> 1 -> 2
    const randomIndex = Math.floor(Math.random() * (noel.length - i)) + i // 0-3 + 0 -> 1-3 -> 2-3

    const temp = noel[i]
    noel[i] = noel[randomIndex]
    noel[randomIndex] = temp
}

console.log(noel)

for (let i = 0; i < noel.length; i++) {
    if (i !== noel.length - 1) {
        console.log(`${noel[i]} donne à ${noel[i+1]}`)
    }
    else {
        console.log(`${noel[i]} donne à ${noel[0]}`)
    }
}

