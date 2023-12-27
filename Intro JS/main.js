console.log("JS Basic Exercises");

//Difficulty Level: Low

const myName = "Dalma Denise"
console.log(myName)
const myLastName = "Romero"
console.log(myLastName)
let myAge = 30
console.log(myAge)
let myPet = "Mango y Mora"
console.log(myPet)
let petAge = 2
let fullName = myName + " " + myLastName
console.log(fullName)
let Presentationtext = myName + " " + myLastName + " " + myAge + " " + myPet + " " + petAge
console.log(Presentationtext)

//Difficulty Level: Medium

let sumAges = myAge + petAge
console.log(sumAges)
let restAges = myAge - petAge
console.log(restAges)
let productAges = myAge * petAge
console.log(productAges)
let divisionAges = myAge / petAge
console.log(divisionAges)

const student = {
    name: "Luz",
    lastName: "Mieres",
    age: 26,
    job: "repositora",
    adress: "Jujuy 1234"
}
console.table(student)
console.log(student.name)
console.log(student.lastName)
console.log(student.age)
console.log(student.job)
console.log(student.adress)

const pet = {
    name: "Mango",
    age: 2,
    vacunas: "completas",
    raza: "mestizo",
    pesoKg: 33,
}
console.table(pet)
console.log(pet.name)
console.log(pet.age)
console.log(pet.vacunas)
console.log(pet.raza)
console.log(pet.pesoKg)

let fruits = ["banana", "strawberry", "orange", "pear", "apple"]
console.log(fruits [0]);
console.log(fruits [1]);
console.log(fruits [2]);
console.log(fruits [3]);
console.log(fruits [4]);

//Difficulty Level: High
let inputAge = Number (prompt("Enter your age"))
if (inputAge>=18){
    console.log("I am an adult")
}


let numbers = [25, 20, 18, 10, 5]
console.log(numbers [0]);
console.log(numbers [1]);
console.log(numbers [2]);
console.log(numbers [3]);
console.log(numbers [4]);

let family = [
    {
        name: "Mateo Juarez",
        age: 5,
        relationship: "hijo"
    },
    {
        name: "Dalma Romero",
        age: 30,
        relationship: "madre"
    },
    {
        name: "Ganriel Juarez",
        age: 29,
        relationship: "padre"
    },
    {
        name: "Angel Romero",
        age: 55,
        relationship: "abuelo"
    },
    {
        name: "Susana Valenzuela",
        age: 59,
        relationship: "abuela"
    },
]
console.log(family)

let randomText = `${frut[1]} ${numbers[3]} ${family[4].name}`
console.log(randomText)


