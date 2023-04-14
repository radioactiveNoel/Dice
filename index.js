function roll() {
    let number = document.getElementById("number-el")
    let randomnumber = Math.random()*6
    let rollednumber = Math.floor(randomnumber)
    number.textContent = "You've got a " + rollednumber
    let icon = document.getElementById("roll-btn")

}
console.log("let's play")