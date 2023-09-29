const pizzas = [
    "Pizza with mushrooms",
    "Pizza with chicken and pineapple",
    "Pizza with cheese"
];

function orderingPizza(type = 1, numberOf = 1) {
    let str;
    if (!isNaN(type) && !isNaN(numberOf)) {
        str = `Your order: ${pizzas[type - 1]} - ${numberOf} pcs.`
    } else {
        str = "Error. Try again!";
    }
    return str;
}

// const typeOfPizza = +prompt("Which type of pizza do you want?");
// const numberOfPizza = +prompt("And how many?");
// document.write(orderingPizza(typeOfPizza, numberOfPizza));

document.write(orderingPizza(1, 3));