console.log('Задание №1')

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name,
            this.surname = surname,
            this.rate = rate,
            this.days = days
    }

    getSalary() {
        return this.rate * this.days;
    }

    setNewRate(newRate) {
        this.rate = newRate
    }

    setNewDays(newDays) {
        this.days = newDays
    }

}

const worker = new Worker("Вася", "Пупкин", 20, 30)


console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

console.log('Задание №2')


const data = [{
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, brand, price) {
        this.type = type,
            this.brand = brand,
            this.price = price
    }

    getInfo() {

        return `Тип: ${this.type}, бренд: ${this.brand}`

    }

    getPrice() {
        return `Цена: ${this.price}`

    }

}

class Car extends Transport {
    constructor(type, brand, doors, price) {
        super(type, brand, price),
            this.doors = doors
    }

    getDoors() {
        return `, количество дверей: ${this.doors}`
    }

    getInfo() {
        return super.getInfo() + this.getDoors();
    }
}

class Bike extends Transport {
    constructor(type, brand, maxSpeed, price) {
        super(type, brand, price),
            this.maxSpeed = maxSpeed
    }

    getMaxSpeed() {
        return `, максимальная скорость: ${this.maxSpeed}`
    }

    getInfo() {
        return super.getInfo() + this.getMaxSpeed() + " км/ч";
    }
}
const audi = new Car(data[0].type, data[0].brand, data[0].doors, data[0].price)
const mercedes = new Car(data[1].type, data[1].brand, data[1].doors, data[1].price)
const harley = new Bike(data[2].type, data[2].brand, data[2].maxSpeed, data[2].price)
const harley2 = new Bike(data[3].type, data[3].brand, data[3].maxSpeed, data[3].price)

let transports = [audi, mercedes, harley, harley2]

for (let item of transports) {
    console.log(item.getInfo());
    console.log(item.getPrice())
}