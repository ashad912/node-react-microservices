let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, false]

class Sth {

}

let sth: Sth = new Sth()


let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

function log(i: number): void {
    console.log(i)
}


// 1. "Any" type
const json = '{"x":10, "y":20}'
const coords: { x: number; y: number } = JSON.parse(json)

console.log(coords.y)

// 2. Later init 
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}
// 3. Cannot be inferred correctly

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0)
        numberAboveZero = numbers[i]
}