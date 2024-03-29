/*  You have an array of users represented in objects, each one has a car, 
reduce the value of the vehicle to 80% of its original price if it is a model older than 5 years */
const log = [
    {
        name: "Tomas",
        car: {
            price: 150000000, //$150´000.000
            model: 2020
        }
    },
    {
        name: "Johan",
        car: {
            price: 60000000, //$60´000.000
            model: 2002
        }
    },
    {
        name: "Alejo",
        car: {
            price: 120000000, //$120´000.000
            model: 2021
        }
    },
    {
        name: "Viviana",
        car: {
            price: 100000000, //$100´000.000
            model: 2018
        }
    }
];

const currentYear = 2024;

const priceChange = (usersLog) => {
    const newPrice = usersLog.map((user) => {
        if(currentYear - user.car.model > 5){
            user.car.price = user.car.price * 0.8;
            return user;
        }else{
            return user;
        };
    })
    return newPrice
};

console.log(priceChange(log))