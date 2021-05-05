const drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number]
const pepsi: Drink = ["brown", true, 40]
//const pepsi: [string, boolean, number] = ["brown", true, 40]
const tea: Drink = ["brown", false, 0]


//const carSpecs: [number, number] = [400, 3354];

const carStats/*: {horsepower: number, weight: number}*/ = {
    horsepower: 400,
    weight: 3354
}