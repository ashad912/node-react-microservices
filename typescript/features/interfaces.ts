// interface Vehicle {
//     name: string;
//     year: Date;
//     isBroken: boolean;
//     summary(): string
// }

interface Reportable {
    summary(): string;
}

interface Multiinterfaceable {
    extra(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    isBroken: true,
    extra(): string {
        return 'extra'
    },
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}



printSummary(oldCivic)
printSummary(drink)

function printSummary(item: /*ReadonlyArray<*/Reportable /*| Multiinterfaceable>)*/): void {
    console.log(item.summary())
}

// function printVehicle(vehicle: { name: string; year: number; isBroken: boolean }): void {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken: ${vehicle.isBroken}`)
// }