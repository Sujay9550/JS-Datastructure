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

// Looping Arrays - for of Loop

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// General Method to get the Array Element values

for (let j = 0; j < menu1.length; j++) {
  console.log(menu1[j]);
}

// Using For - of Loop method to get the Array Element values

for (const item of menu1) {
  console.log(item);
}

// To get the index number of the array element/ also use destructuring concept
for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu1.entries()]);

// Optional Chaining

// Without Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

if (restaurant.openingHours && restaurant.openingHours.thu) {
  console.log(restaurant.openingHours.thu.open);
}

// With Optional Chaining

console.log(restaurant.openingHours.thu?.open);
console.log(restaurant.openingHours?.fri?.open);
console.log(restaurant.openingHours?.sat?.open);

console.log(restaurant["openingHours"]);
console.log(restaurant.openingHours["thu"]);

// Examples

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we are open at ${open}`);
}

// Optional chaining for Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderReceipe?.(0, 1) ?? "Method does not exist");

// Optional chaining on Arrays
const users = [{ name: "Steve", email: "steve@example.com" }];
console.log(users[0]?.name ?? "User does not exist");

// Looping Objects - Object Keys, Values, and Entries

// Property Names
const restaurantProperties = Object.keys(restaurant);
console.log(restaurantProperties);

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let stringName = `We are open on ${properties.length} days: `;

for (const day of properties) {
  stringName += `${day}, `;
}
console.log(stringName);

// Property Values
const restaurantValues = Object.values(restaurant);
console.log(restaurantValues);

const values = Object.values(restaurant.openingHours);
console.log(values);

// Entries = Property Names + Property Values

const entries = Object.entries(openingHours);
console.log(entries);

for (const xe of entries) {
  console.log(xe);
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}

// Destructuring Exercises

// Q1 Write a function called displayName() that takes an object as an argument and prints the person's first and last name.
// Use object destructuring in the function argument. And also, use template strings when printing the first and last name.

const person = {
  first: "John",
  last: "Smith",
  job: "Developer",
  location: "USA",
};

const displayName = ({ first, last }) => {
  return console.log(`Your Full Name is: ${first} ${last}`);
};

displayName(person);

const { first, last, ...others1 } = person;
console.log(first);
console.log(last);
console.log(others1);

const personName = Object.keys(person);
console.log(personName);

const personValue = Object.values(person);
console.log(personValue);

const personEntries = Object.entries(person);
console.log(personEntries);

for (const pe of personEntries) {
  console.log(pe);
}

for (const [i, j] of personEntries) {
  console.log(`${i}: ${j}`);
}

//  Create a function named goToSecondClass() that accepts a destructured object as a parameter.
// The parameter extracts the "secondHour" property of the object. The function should return this statement: "Time to go to {property_value} class!"
const myClasses = {
  firstHour: "Ethics",
  secondHour: "Programming",
  thirdHour: "Biology",
};

const gotToSecondClass = ({ secondHour }) => {
  console.log(`Time to go to ${secondHour} class.`);
};

gotToSecondClass(myClasses);

const className = Object.keys(myClasses);
console.log(className);

const classValue = Object.values(myClasses);
console.log(classValue);

const classEntries = Object.entries(myClasses);
console.log(classEntries);

for (const [u, v] of classEntries) {
  console.log(`${u}: ${v}`);
}

//Using array destructuring assign the first 2 elements to firstColor and secondColor variables and assign the remaining elements to otherColors variable.
// Display the values of these 3 variables.
let colors = ["white", "blue", "yellow", "black", "red", "green"];

const [firstColor, secondColor, ...otherColor] = colors;
console.log(firstColor, secondColor, otherColor);

// Array Destructuring
// To extract values from an array using array destructuring assignment, perform the following steps:

// Create an array with three values, 1, 2, and 3, and save it into a variable called data1.
// Destructure the first array value into a variable called aA. Skip the second value of the array.
// Destructure the third value into a variable called bB.
// Attempt to destructure a fourth value into a variable called cC and provide a default value of 4.
// Log the value of all of the variables.

const data1 = [1, 2, 3];

const [aA, , bB, cC = 4] = data1;
console.log(aA, bB, cC);

// Object Destructuring
// To extract data from an object by using object destructuring concepts, perform the following steps:

// Create an object with the fields f1, f2, and f3. Set the values to v1, v2, and v3, respectively. Save the object into the data2 variable.
// Destructure the f1 property into a variable named f1. Destructure the f2 property into a variable named field2.
// Destructure the property f4 into a variable named f4 and provide a default value of v4.
// Log the variables that are created.

const data2 = { f1: "v1", f2: "v2", f3: "v3" };
const { f1, f2: field2, f4 = "v4" } = data2;
console.log(f1, field2, f4);

// Nested Destructuring
// To destructure values from an array that's nested inside an object using the concept of nested destructuring, perform the following steps:

// Create an object with a property, arr, that is, set to an array containing the values 1, 2, and 3. Save the object into the data3 variable.

// Destructure the second value of the array into a variable by doing the following:
// Destructure the arr property from the object and save it into a new variable called v2, which is the array. Replace v2 with array destructuring.
// In the array destructuring, skip the first element. Save the second element into a variable called v2.
// Log the variables

const data3 = { arr: [1, 2, 3] };
const {
  arr: [, v2],
} = data3;
console.log(v2);

const courseCatalogMetadata = [
  {
    title: "Linear Algebra II",
    description: "Advanced linear algebra.",
    texts: [
      {
        author: "James Smith",
        price: 120,
        ISBN: "912-6-44-578441-0",
      },
    ],
  },
];

console.log(courseCatalogMetadata);

const [course] = courseCatalogMetadata;
console.log(course);

// const { texts: textbooks } = course;
// console.log(textbooks);

// const [textbook] = textbooks;
// console.log(textbook);

// const { ISBN } = textbook;
// console.log(ISBN);

const [{ texts: textbooks }] = courseCatalogMetadata;
const [
  {
    texts: [textbook],
  },
] = courseCatalogMetadata;
const [
  {
    texts: [{ ISBN }],
  },
] = courseCatalogMetadata;

console.log(textbooks);
console.log(textbook);
console.log(ISBN);

// Short Examples
// 1.
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers);

// 2.
let object1 = {
  numbersA: {
    xx: 1,
    yy: 2,
  },
};

console.log(object1);

const { xx, yy } = object1.numbersA;

console.log(xx, yy);

// 3. Swap Array Numbers using destructuring
const arr = [10, 20];
console.log(arr);
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

// 4. Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);
console.log(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]));

// 5. To find the value of nested array/objects
const data4 = {
  valid: true,
  products: [
    {
      item: "Awesome shoe",
      price: 19.99,
      inStore: ["Regent Street", "Oxford Street", "Harrods"],
    },
    {
      item: "Fave shirt",
      price: 12.99,
      inStore: ["Regent Street"],
    },
  ],
};

console.log(data4);

const { products: productList } = data4;
console.log(productList);

const {
  products: [product1, product2],
} = data4;
console.log(product1, product2);

const {
  products: [
    { item: item1, price: price1, inStore: inStore1 },
    { item: item2, price: price2, inStore: inStore2 },
  ],
} = data4;
console.log(item1, price1, inStore1);
console.log(item2, price2, inStore2);

const {
  products: [
    {
      inStore: [mm, nn, oo],
    },
    {
      inStore: [pp],
    },
  ],
} = data4;
console.log(mm, nn, oo, pp);
// const { products: productList } = data4;
// console.log(productList);

// const [product1, product2] = productList;
// console.log(product1, product2);

// const { item: item1, price: price1, inStore: inStore1 } = product1;
// console.log(item1, price1, inStore1);

// const { item: item2, price: price2, inStore: inStore2 } = product2;
// console.log(item2, price2, inStore2);

// const [mm, nn, oo] = inStore1;
// console.log(mm, nn, oo);

// const [pp] = inStore2;
// console.log(pp);

// const [product1, product2] = products;
// console.log(product1, product2);

// const { item: item1, price: price1, inStore: inStore1 } = product1;
// console.log(item1, price1, inStore1);

// const { item: item2, price: price2, inStore: inStore2 } = product2;
// console.log(item2, price2, inStore2);

// const [mm, nn, oo] = inStore1;
// console.log(mm, nn, oo);

// const [pp] = inStore2;
// console.log(pp);

// 6. To find the value of nested array/objects

const teams = [
  {
    firstName: "Steve",
    lastName: "Smith",
    fullName: "Steve Smith",
    friends: ["Mark", "John", "Stephen"],
    hobbies: ["Music", "Movies", "Travel"],
  },

  {
    firstName: "Kane",
    lastName: "Williamson",
    fullName: "Kane Williamson",
    friends: ["James", "Joseph", "Mitchelle"],
    hobbies: ["Music", "Painting"],
  },
];

console.log(teams);

const [person1, person2] = teams;
console.log(person1);
console.log(person2);

const [
  {
    firstName: firstName1,
    lastName: lastName1,
    fullName: fullName1,
    friends: friends1,
    hobbies: hobbies1,
  },
  {
    firstName: firstName2,
    lastName: lastName2,
    fullName: fullName2,
    friends: friends2,
    hobbies: hobbies2,
  },
] = teams;

console.log(firstName1, lastName1, fullName1, friends1, hobbies1);
console.log(firstName2, lastName2, fullName2, friends2, hobbies2);

const [
  {
    friends: [fr1, fr2, fr3],
    hobbies: [hb1, hb2, hb3],
  },
  {
    friends: [fr4, fr5, fr6],
    hobbies: [hb4, hb5],
  },
] = teams;

console.log(fr1, fr2, fr3);
console.log(hb1, hb2, hb3);

console.log(fr4, fr5, fr6);
console.log(hb4, hb5);

// const [person1, person2] = teams;
// console.log(person1);
// console.log(person2);

// const {
//   firstName: firstName1,
//   lastName: lastName1,
//   fullName: fullName1,
//   friends: friends1,
//   hobbies: hobbies1,
// } = person1;
// console.log(firstName1, lastName1, fullName1, friends1, hobbies1);

// const [fr1, fr2, fr3] = friends1;
// console.log(fr1, fr2, fr3);

// const [hb1, hb2, hb3] = hobbies1;
// console.log(hb1, hb2, hb3);

// const {
//   firstName: firstName2,
//   lastName: lastName2,
//   fullName: fullName2,
//   friends: friends2,
//   hobbies: hobbies2,
// } = person2;
// console.log(firstName2, lastName2, fullName2, friends2, hobbies2);

// const [fr4, fr5, fr6] = friends2;
// console.log(fr4, fr5, fr6);

// const [hb4, hb5] = hobbies2;
// console.log(hb4, hb5);

const data5 = [{ subitem: "pen" }, { subitem: "book" }];
console.log(data5);

const [sub1, sub2] = data5;
console.log(sub1, sub2);

const [{ subitem: subitem1 }, { subitem: subitem2 }] = data5;
console.log(subitem1, subitem2);

// const [sub1, sub2] = data5;
// console.log(sub1, sub2);

// const { subitem: subitem1 } = sub1;
// console.log(subitem1);

// const { subitem: subitem2 } = sub2;
// console.log(subitem2);

const teamsNew = [
  {
    firstName: "David",
    lastName: "Warner",
    fullName: "David Warner",
    friends: [
      { friendsFirst: "Shane", friendsLast: "Watson" },
      { friendsFirst: "Mitchelle", friendsLast: "Johnson" },
    ],
  },

  {
    firstName: "Kane",
    lastName: "Williamson",
    fullName: "Kane Williamson",
    friends: [
      { friendsFirst: "Trent", friendsLast: "Boult" },
      { friendsFirst: "Tim", friendsLast: "Southee" },
    ],
  },
];

const [
  {
    friends: [
      { friendsFirst: friendsFirst1, friendsLast: friendsLast1 },
      { friendsFirst: friendsFirst2, friendsLast: friendsLast2 },
    ],
  },
  {
    friends: [
      { friendsFirst: friendsFirst3, friendsLast: friendsLast3 },
      { friendsFirst: friendsFirst4, friendsLast: friendsLast4 },
    ],
  },
] = teamsNew;

console.log(friendsFirst1, friendsLast1);
console.log(friendsFirst2, friendsLast2);
console.log(friendsFirst3, friendsLast3);
console.log(friendsFirst4, friendsLast4);

const friendsList = teamsNew[0].friends;
console.log(friendsList);

friendsList.forEach((el) => {
  const friendsFullName = el.friendsFirst + " " + el.friendsLast;
  console.log(`Your Full Name is ${friendsFullName}`);
});

// String Destructuring
const [u, v, w] = "Mark";
console.log(u, v, w);

// Assign to anything at the left-side
let user1 = {};

[user1.fname, user1.lname] = ["Johny", "Walker"];
console.log(user1);

// Looping with .entries()

const user2 = {
  userFirst: "Tom",
  userLast: "Hanks",
  age: 50,
};

console.log(user2);

const userKeys = Object.keys(user2);
console.log(userKeys);

const userValues = Object.values(user2);
console.log(userValues);

const userEntries = Object.entries(user2);
console.log(userEntries);

for (let [userKey, userValue] of userEntries) {
  console.log(`${userKey}: ${userValue}`);
}

// Smart function parameters
let options = {
  title: "My menu",
  width: 400,
  height: 200,
  optionitems: ["Pens", "Books"],
};

console.log(options);

const makeMenu = ({
  title,
  width,
  height,
  optionitems: [opitem1, opitem2],
}) => {
  console.log(title, width, height, opitem1, opitem2);
};

makeMenu(options);

// To find the maximum Salary & Person
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const salaryKeys = Object.keys(salaries);
console.log(salaryKeys);

const salaryValues = Object.values(salaries);
console.log(salaryValues);

const salaryEntries = Object.entries(salaries);
console.log(salaryEntries);

const topSalary = (salaries) => {
  let maxSalary = 0;
  let maxName = null;
  for (const [salaryName, salaryValue] of salaries) {
    if (maxSalary < salaryValue) {
      maxSalary = salaryValue;
      maxName = salaryName;
    }
  }
  console.log(maxName, maxSalary);
  return maxName, maxSalary;
};

topSalary(salaryEntries);
