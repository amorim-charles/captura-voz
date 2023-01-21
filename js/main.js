const biggerValue = parseInt(Math.random() * (1000 - 0))
document.getElementById("bigger-value").textContent = biggerValue

const smallerValue = parseInt(Math.random() * (biggerValue - 1))
document.getElementById("smaller-value").textContent = smallerValue

const secretNumber = parseInt(Math.random() * (biggerValue - smallerValue) + smallerValue)
console.log(secretNumber, "dsd")