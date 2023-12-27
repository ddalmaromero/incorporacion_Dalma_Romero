console.log("Functions Exercises")

//Difficulty Level: Low

const newFunction = function (num1, num2) {
    let resultAdd = num1 * num2
    console.log(resultAdd)
    return resultAdd
}
let num1 = 100
let num2 = 20

newFunction(num1, num2)

//Difficulty Level: Medium

const greetFunction = function (name) {
    console.log(`Bienvenida ${name} a nuestro hotel, que lo disfrutes`)
}
greetFunction("Yanina")


function area(base, height) {
    let triangArea = (base * height) / 2
    console.log(triangArea)
    return triangArea
}
area(10, 20)

function perimete(height, base, heightDos) {
    let perimete = height + base + heightDos
    console.log(perimete)
}
perimete(20, 15, 20)

function totalCompra(price, amount) {
    let total


    if (amount >= 10) {
        total = ((amount * price) - (amount * price) * (10 / 100))
        console.log(`discounted purchase is $${total}`);
        return `purchase with a 10% discount is ${total}`

    } else if (amount >= 20) {
        total = ((amount * price) - (amount * price) * (20 / 100))
        console.log(`discounted purchase is $ ${total}`);
        return `purchase with a 20% discount is $ ${total}`
    } else {
        total = amount * price
        console.log(`The purchase has a total of $ ${total}`);
        return `The purchase has a total of $ ${total}`
    }
}

totalCompra(5000, 30)

function isAnAdult(age) {
    if (age >= 18) {
        console.log("You are an adult");
        return "You are an adult"
    } else {
        console.log("You are not an adult")
        return "You are not an adult"
    }
}
isAnAdult(30)
isAnAdult(14)

//Difficulty Level: High

function taxes(aIncome) {
    let taxesPayment
    if (aIncome <= 10000) {
        taxesPayment = aIncome * 0.10
        console.log(taxesPayment);
        return taxesPayment
    } else if (aIncome <= 20000) {
        taxesPayment = aIncome * 0.15
        console.log(taxesPayment);
        return taxesPayment
    } else {
        taxesPayment = aIncome * 0.20
        console.log(taxesPayment);
        return taxesPayment
    }
}

taxes(8000)
taxes(14000)
taxes(30000)

function days(day) {
    if (day >= 1 && day < 6) {
        console.log("It's a business day");
        return "It's a business day"
    } else if (day >= 6 && day <= 7) {
        console.log("It's the weekend");
        return "It's the weekend"
    } else {
        console.log("The number of the day doest is not correct");
        return "The number of the day doest is not correct"
    }
}

days(4)
days(6)

function persInfo(name, lastName, age) {
    if (name != '' && lastName != '' && age > 0) {
        const person = {
            pName: name,
            pLastName: lastName,
            pAge: age
        }
        console.table(person);
    } else {
        console.log("Data can not be empty");
    }
}

let pname = prompt("Enter your name: ")
let lastName = prompt("Enter your last name: ")
let age = Number(prompt("Enter your age: "))

persInfo(pname, lastName, age)


function greet(name) {
    return `Hello, my name is ${name}`
}
function calculateAge(birthYear, presetent) {
    let age = presetent - birthYear
    return age
}

function present(fun, fun2) {
    let presentation = `${fun} and my age is ${fun2}, is a placeure to meet you`
    console.log(presentation);
    return presentation
}

present(greet('Dalma'), calculateAge(1993, 2023))
