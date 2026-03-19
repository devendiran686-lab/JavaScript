
let electronics = ["TV", "Mobile", "Phone", "washingMachine", "ironbox", "Fridge"];

const addtocart = [{
    name: "vicky",
    age: 21,
    role: "devloper"
}, {
    name: "deva",
    age: 35,
    role: "Tester"
}, {
    name: "manick",
    age: 27,
    role: "devloper"
}]


let Product = [
    {
        productName: "Bath Soap",
        price: 25,
        category: "Personal Care"

    },
    {
        productName: "Detergent Powder",
        price: 80,
        category: "Home Care"
    },
    {
        productName: "Dish Wash Liquid",
        price: 55,
        category: "Kitchen"
    },
    {
        productName: "Shampoo",
        price: 120,
        category: "Personal Care"
    },
    {
        productName: "Floor Cleaner",
        price: 150,
        category: "Home Care"
    }
];





const cart = (dname) => {
    let update = addtocart.map((val, index) => {
        if (val.name == dname) {
            return { ...val, age: val.age + 1 }
        } else return val
    })
    return update
}


const removeAge21 = () => {
    return addtocart.filter(val => val.age !== 21);
}

console.log(removeAge21());
































