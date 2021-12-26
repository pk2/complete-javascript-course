'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const   openingHours= {
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
}
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  orderDelivery: function({ starterIndex, mainIndex,time, address}) {
    console.log(starterIndex,mainIndex,time,address);
  }
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// // console.log(restaurantName, hours, tags);
// const { menu, starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);
//
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({a,b} = obj);
// // console.log(a,b);
//
// const {fri: {open:o, close:c}} = openingHours;
// console.log(o,c );

// const arr = [1, 2, ...[3,4]];
// console.log(arr);
// const [a,b, ...others] = arr;
// console.log(a,b,others);
// const [pizza,, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
// console.log(pizza, risotto, otherFood);
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);
//
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// }
//
// add(2, 3);
// add(2, 3,4,5,6);
// add(2, 3,4,5,6,6,7);
// const x = [2, 3, 5];
// add(...x);
// console.log(3 || "Jonas");
// console.log('' || "Jonas");
// console.log(true || 0);
// console.log(undefined && null && 0 );
// console.log(restaurant.openingHours?.mon?.open);
//
// const days = ['mon','tue','wed','thu','fri','sat','sun']
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
];
// console.log(users[0]?.name ?? 'not exist');
//
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
//
//
// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }
//
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}