import faker from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {

    // It is only type-pattern not init!

    name: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getName() {
        return this.name
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}