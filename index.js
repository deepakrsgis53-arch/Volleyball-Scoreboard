let counta = 0
let countb = 0

let countA = document.getElementById("counta")
let countB = document.getElementById("countb")

function incrementa1() {
    counta += 1
    countA.textContent = counta
}

function incrementa3() {
    counta += 3
    countA.textContent = counta
}

function incrementa5() {
    counta += 5
    countA.textContent = counta
}

function incrementb1() {
    countb += 1
    countB.textContent = countb
}

function incrementb3() {
    countb += 3
    countB.textContent = countb
}

function incrementb5() {
    countb += 5
    countB.textContent = countb
}