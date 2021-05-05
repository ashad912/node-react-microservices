class Vehicle {


    constructor(public color: string) { }
    // color: string;

    // constructor(color: string){
    //     this.color = color
    // }

    // static lol = 'lol'

    // public drive(): void {
    //     console.log('chugga chugga')
    // }

    protected honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color);
    }
    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const vehicle = new Vehicle("orange")
//vehicle.drive()
//vehicle.honk()
//console.log(Vehicle.lol)

const car = new Car("red", 4)
car.startDrivingProcess()
//car.honk()