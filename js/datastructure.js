`use strict`;

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

restaurant.order(2, 0);

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 0,
  address: "Bengaluru",
  time: "11:50",
});

restaurant.orderPizza("Cheese Burst", "Olives", "Mushroom", "Onion");

// Destructuring Objects

// Destructuring Objects with the same name as properties

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring objects with different names as the property names

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName);
console.log(hours);
console.log(tags);

// Setting a Default values with destructuring

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Destructuring nested objects

const { thu, fri, sat } = restaurant.openingHours;
console.log(thu);
console.log(fri);
console.log(sat);

// Nested object value

const {
  thu: { open, close },
} = restaurant.openingHours;
console.log(open, close);

// Renaming object properties

const {
  thu: { open: o1, close: clo1 },
  fri: { open: o2, close: clo2 },
  sat: { open: o3, close: clo3 },
} = restaurant.openingHours;

console.log(o1, o2, o3);
console.log(clo1, clo2, clo3);
