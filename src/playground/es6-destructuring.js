// object destructuring.

// const person = {
//     name : 'andrew',
//     age : 26,
//     location : {
//         city : 'seoul',
//         temperature : 92
//     }
// };
//
// const {name : firstName = 'Anonymous', age} = person;
// const {city, temperature : temp} = person.location;
// //console.log(`${firstName} is ${age}. It's ${city} in ${temp}`);
//
// const book = {
//     title : 'ego is the enemy',
//     author : 'ryan holiday',
//     publisher : {
//         name : 'penguin'
//     }
// };
//
// const {name : publisherName = 'self-published'} = book.publisher;

//console.log(publisherName);

// array destructuring

const address = ['1299 S juniper street', 'philadelphia', 'pennsylvania', '19147'];
console.log(`you are in ${address[1]}, ${address[2]}`);

// const [street, city, state, zip] = address;
const [, city, state = 'new york'] = address;
console.log(`you are in ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName = 'no item', , mediumPrice = '$99.00'] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);




