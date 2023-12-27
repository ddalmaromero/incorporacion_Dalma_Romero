console.log("conditional exercises")

//Difficulty Level: Low

let num1 = 4
let num2 = 5

console.log(num2)

if (num2 > num1) {
    console.log(`${num2} is greater`)
} else if (nam1 == num2) {
    console.log(`${num1} y ${num2} the numbers are equal`)
} else {
    console.log(`${num1} is greater`)
}

if (num1 != num2)
    console.log(`The numbers are different`)
else {
    console.log(`The numbers are equal`)
}

let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date2 > date1) {
    console.log(`${date2} is greater than the date ${date1}`)
} else if (date1 == date2) {
    console.log(`${date1} y ${date2} the date are the same`)
} else {
    console.log(`${date1} is greater than the date ${date2}`)
}

let date3 = "2018-10-20"
let date4 = "2010-10-25"

if (date3 < date4) {
    console.log(`${date4} is greater than the date ${date3}`)
} else if (date1 == date2) {
    console.log(`${date3} y ${date4} the date are the same`)
} else {
    console.log(`${date3} is greater than the date ${date4}`)
}

let number1 = 5
let number2 = 7
let number3 = 9

if (number3 > number1 && number3 > number2) {
    console.log(`The numeber ${number3} is the largest`)
} else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest`)
} else if (nam1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`)
} else {
    console.log(`The numbers are equal`)
}

//Difficulty Level: Medium
const color = prompt("enter color names on the screen")

switch (color) {
    case "red":
        console.log("The color of passion")
        break;
    case "blue":
        console.log("The color of the sea.")
        break;
    case "green":
        console.log("The color of nature")
        break;

    default:
        console.log("the color entered is incorrect")
        break;
}

const operation = prompt("Enter an operation: addition, subtraction, multiplication, division")
const numOne = Number(prompt("enter the first number"))
const numTwo = Number(prompt("enter the second number"))

switch (operation) {
    case "addition":
        console.log(`The sum of ${numOne} and ${numTwo} is: ${numOne + numTwo}`)
        break;
    case "subtraction":
        console.log(`The remainder of ${numOne} and ${numTwo} is: ${numOne - numTwo}`)
        break;
    case "multiplication":
        console.log(`The multiplication of ${numOne} and ${numTwo} is: ${numOne * numTwo}`)
        break;
    case "division":
        console.log(`The division of ${numOne} and ${numTwo}  is: ${numOne / numTwo}`)
        break;

    default:
        console.log("Invalid operation")
        break;
}

let person = [
    {
        name: "Juan",
        age: 39,
        height: 1.69,
    },
    {
        name: "Julia",
        age: 28,
        height: 1.53,
    }
]

console.log(person)

if (person[0].age > person[1].age && person[0].height > person[1].height) {
    console.log(`${person[0].name} is taller and olde than ${person[1].name}`)
} else if (person[0].age == person[1].age && person[0].height > person[1].height) {
    console.log(`${person[0].name} and ${person[1].name} are the same height and olde`)
} else {
    console.log(`${person[1].name} is taller and olde than ${person[0].name}`)
}

const fullName = prompt("Write your Full Name")
const age = Number(prompt("Aghow old are you?"))
const height = Number(prompt("how tall are you?"))
const vision = Number(prompt("vision"))

if (age >= 18 && height > 110 && vision >= 8) {
    console.log("You are qualified to drive")
} else {
    console.log("you do not meet the requirement to drive")
}

const myAge = prompt("how old are you?")
if (myAge > 0 && myAge <= 12) {
    console.log("infant (0 to 12 years)")
} else if (myAge >= 13 && myAge <= 18) {
    console.log("adolescent (13 to 18 years old)")
} else if (myAge >= 19 && myAge <= 45) {
    console.log("older young(19 to 45 years)")
} else if (myAge >= 45 && myAge <= 100) {
    console.log("elderly (over 45 years)")
} else if (myAge >= 100) {
    console.log("Is he really that old? (more than 100 show)")
} else {
    console.log("Error")
}

const dateNum = prompt("enter a number from 1 to 3")
if (dateNum >= 1 && dateNum <= 3) {
    console.log(`The number entered is ${dateNum}`)
    console.log(`Twice the number entered i ${dateNum * 2}`)
    console.log(`Three times the number entered is ${dateNum * 3}`)
} else {
    console.log("That value is not allowed")
}

//Difficulty Level: High

let customerName = prompt('Enter your name:')
let customerPass = prompt('Is he on the VIP list? / VIP or normal')
let customerEntrance = prompt('Do you have an entrance? yes or no')


if (customerName == 'Dalma' || customerPass == 'VIP') {
    alert('Wellcome!')
} else if (customerEntrance == 'yes') {
    alert('Wellcome!')
} else {
    let decision = prompt('Do you want to buy a ticket?')
    if (decision == 'yes') {
        let money = prompt('How much money do you have?')
        if (money > 1000) {
            alert('Wellcome !')
        } else {
            alert("Can't buy the ticket")
        }
    } else {
        alert('Good luck, bye!')
    }
}


