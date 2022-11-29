const ADMIN = "admin"
const PASSWORD = "1234"

const username = prompt("Username : ")
const password = prompt("Password : ")

if (username === ADMIN && password === PASSWORD) {
    console.log("Passez une bonne journée !")
}
else {
    console.log("La combinaison est incorrecte !")
}