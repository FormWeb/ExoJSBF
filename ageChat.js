const ageChat = parseInt(prompt("Entrez l'âge du chat : "))
let ageHumain

if (ageChat === 1) {
    ageHumain = 15
}
else if (ageChat === 2) {
    ageHumain = 24
}
else {
    ageHumain = 24 + ((ageChat - 2) * 4)
}

console.log("L'age humain du chat : " + ageHumain)
