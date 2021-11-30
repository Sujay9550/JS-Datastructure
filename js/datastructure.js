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

// Destructuring Arrays

const arrayOne = [2, 3, 4];

const a = arrayOne[0];
const b = arrayOne[1];
const c = arrayOne[2];

console.log(a, b, c);

const arrayTwo = [5, 6, 7];

const [x, y, z] = arrayTwo;
console.log(x, y, z);

let [main, , , secondary] = restaurant.categories; // Use Commas to skip the next element in the array
console.log(main, secondary);

// Switching using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring
const arrayNested = [2, 3, [4, 5]];
const [i, , j] = arrayNested;
console.log(i, j);

const arrayNestedNew = [6, 7, [8, 9]];
const [k, l, [m, n]] = arrayNestedNew;
console.log(k, l, m, n);

// Default values
const [p, q, r = 4] = [5, 6];
console.log(p, q, r);

// Spread Operators

const arrayThree = [10, 11, 12];
console.log(...arrayThree); // Will log the individual elements of array

const spreadArray = [8, 9, ...arrayThree];
console.log(spreadArray);

// Examples

console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy An Array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays

const menuJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuJoin);

const string1 = "John";
const letters = [...string1, "", "S"];
console.log(letters);

// object
console.log(restaurant);

// Copying Objects

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "XYZ Restaurant";
console.log(restaurantCopy);

// Rest Patterns & Parameters

const arrayFour = [1, 2, ...[3, 4]]; // This is spread because ... is after =
console.log(arrayFour);

const [h, kl, ...others] = [1, 2, 3, 4, 5]; // This is rest because ... is before =
console.log(h, kl, others);

// Examples
console.log(restaurant.starterMenu);
console.log(restaurant.mainMenu);

const [f, g, ...remaining] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(f, g, remaining);

const { sat: saturday, ...weekdays } = restaurant.openingHours;
console.log(saturday, weekdays);

const add = function (...nnn) {
  let total = 0;

  for (let i = 0; i < nnn.length; i++) {
    total = total + nnn[i];
  }

  console.log(total);
};

let data = [10, 20, 30];
add(3, 4);
add(...data);
