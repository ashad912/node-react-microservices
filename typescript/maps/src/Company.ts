
// export class Company {
//     companyName: string;
//     catchPhrase: string;
//     location: {
//         lat: number;
//         lng: number;
//     }

//     constructor({ faker }: { faker: FakeLibrary }) {
//         this.companyName = faker.company.companyName()
//         this.catchPhrase = faker.company.catchPhrase()
//         this.location = {
//             lat: parseFloat(faker.address.latitude()),
//             lng: parseFloat(faker.address.longitude())
//         }
//     }
// }



export default function createCompany({ faker }: { faker: FakeLibrary }): Readonly<ICompany> {

    validateDeps()

    const name = faker.company.companyName()

    const catchPhrase = faker.company.catchPhrase()

    return Object.freeze({
        companyName: name,
        catchPhrase,
        location: {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        },
        getName() {
            return name
        },
        markerContent() {
            return `
                <div>
                    <h1>Company name: ${name}</h1>
                    <h3>Catchphrase: ${catchPhrase}</h3>
                </div>
            `
        }
    })

    function validateDeps(): void {
        if (typeof faker !== 'object') {
            throw new TypeError('"Faker" dependency is not an object type')
        }
    }


}

export interface ICompany {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    getName(): string;
    markerContent(): string;
}

interface FakeLibrary {
    company: {
        companyName(): string;
        catchPhrase(): string;
    }
    address: {
        latitude(): string;
        longitude(): string;
    }
}

