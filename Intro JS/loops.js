console.log("Loops Exercises")

//Difficulty Level: Low
let number = Number(prompt("Enter your value: "))

for (let i = 1; i <= number; i++) {
    console.log(i)
}


let number1 = Number(prompt("Enter your multiplier value:"))
for (let i = 1; i <= 10; i++) {
    console.log(`${i}x${number1} = ${i * number1}`)
}

let sum = 0
let rulo = true


while (rulo) {
    let num1 = Number(prompt("Enter your value to add:"))

    if (num1 != 0) {
        sum += num1
    } else {
        rulo = false
    }

}

console.log(sum)

let suma = 0
let d = true
let num2

do {
    num2 = Number(prompt("Enter a value to add, to finish press 0"))
    if (num2 != 0) {
        suma += num2
    } else {
        d = false
    }
} while (d)

console.log(suma)

const person = {
    name: "Dalma",
    lastName: "Romero",
    age: 30,
    origin: "Resistencia",
    studies: 'JavaScript'
}

for (const keys in person) {
    console.log(keys)
}

for (let keys in person) {
    console.log(person[keys])
}
//Difficulty Level: Medium

let secret = sum
let ingreso
let cont = 0

do {
    entry = Number(prompt("Enter secret password: "))
    if (entry > secret) {
        cont += 1
        alert("The number is greater than the password")
    } else if (entry < secret) {
        cont += 1
        alert("The number is less than the password")
    } else {
        alert(`You did it! The secret number was ${secret} and you have tried ${cont} times`)

    }

} while (entry != secret)


let toDivide = Number(prompt("Enter the number to determine divisors: "))

for (let i = 1; i <= toDivide; i++) {
    if (toDivide % i == 0) {
        console.log(i)
    }
}

function ringBell(times) {
    for (let i = 1; i <= times; i++) {
        console.log("Ding Dong")
    }
}

ringBell(5)


const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for (date of dates) {
    if (date > dateLimit) {
        console.log(`greater ${date}`)
    } else if (date == dateLimit) {
        console.log(`equal ${date}`)
    }
}


const colors = ["red", "green", "blue", "violet", "brown", "black"]

function colorList(list) {
    for (let color of list) {
        console.log(`° ${color}\n`)
    }
}

colorList(colors)


const numbers = [1, 2, 3, 4, 5]

for (let number of numbers) {
    console.log(`The number is ${number} and its double is ${number * 2}\n`)
}

const persFamily = [
    {
        name: "Mateo",
        lastName: "Juarez",
        age: 5,
        relationship: "son"
    },
    {
        name: "Gabriel",
        lastName: "Juarez",
        age: 29,
        relationship: "husband"
    },
    {
        name: "Angel",
        lastName: "Romero",
        age: 56,
        relationship: "father"
    },
    {
        name: "Susana",
        lastName: "Valenzuela",
        age: 59,
        relationship: "mother"
    }
]

for (const person of persFamily) {
    console.log(`Hello, I am ${person.name} ${person.lastName} (${person.relationship}) and I am ${person.age} years old.\n`)
}
//Difficulty Level: High