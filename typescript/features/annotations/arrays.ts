const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// const carsByMake = [
//     ['f150'],
//     ['corolla'],
//     ['camaro']
// ]

const carsByMake: string[][] = []

// Help with inference
const carMaker = carMakers[0]
const newCarMaker = carMakers.pop()

// Prevent imcompatible values
// carMakers.push(100) // error

// Help with array methods

carMakers.map((car: string): string => {
    return car.toUpperCase()
})

carMakers.map(myMapFunc)

function myMapFunc(car: string): string {
    return car.toUpperCase()
}


// Flexible types

const importantDates: (Date | string)[] = []
importantDates.push('2010-10-10')
importantDates.push(new Date())
//importantDates.push(10) // error


