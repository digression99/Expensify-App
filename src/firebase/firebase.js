import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase, googleAuthProvider, database as default
};

// child_removed

// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });



// const printExpenses = snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             ...childSnapshot.val(),
//             id : childSnapshot.key
//         })
//     });
//     console.log(expenses);
// };
//
// database.ref('expenses')
//     .once('value')
//     .then(printExpenses);
//
// database.ref('expenses').on('value', printExpenses);

// expenses.forEach(expense => {
//     database.ref('expenses')
//         .push(expense)
//         .then(() => {
//             console.log('pushed.');
//         });
// });

// database.ref().push(setTimeout(() => {
//     console.log('timeout obj!');
// }, 15000));



// database.ref('notes/-L3N3C0cx9tUhZaNJE3M').update({
//     body : 'buy food'
// });

// const firebaseNotes = {
//     notes : {
//         '12' : {
//             title : 'first note',
//             body : 'this is my note'
//         },
//         '761ase' : {
//             title : 'another note',
//             body : 'this is my note 2'
//         }
//     }
// };

// const notes = [{
//     id : '12',
//     title : 'first note',
//     body : 'this is my note'
//     },
//     {
//         id : '761ase',
//         title : 'another note',
//         body : 'this is my note 2'
//     }
// ];

// database.ref().set({
//     notes
// });
//

// database.ref('notes').push({
//     title : 'todo',
//     body : 'go for a run'
// });

// database.ref('notes').push({
//     title : 'course topics',
//     body : 'react courses'
// });

// database.ref().once('value')
//     .then(snapshot => console.log(snapshot.val()));



// database
//     .ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); // entire database.
//     })
//     .catch(e => console.log('error fetching data ', e));

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, e => console.log('error with data fetching, ', e));
//
// setTimeout(() => {
//     database.ref('age').set(30);
//     database.ref().off(onValueChange); // cancel all subscription.
// }, 5000);
//
// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10000);
//
// setTimeout(() => {
//     database.ref('age').set(34);
// }, 15000);

// const onValueChange = database.ref().on('value', snapshot => {
//     console.log(snapshot.val());
//     const object = snapshot.val();
//     console.log(`${object.name} is a(an) ${object.job.title} at ${object.job.company}.`);
// });
//
// setTimeout(() => {
//     database.ref().update({
//         'job/title' : 'architect'
//     });
// }, 5000);

// setup data sub -> andrew is a software developer at amazon.
// change data and make sure it reprints.

// database.ref().set({
//     name : 'kim',
//     age : 26,
//     stressLevel : 6,
//     job : {
//         title : 'software developer',
//         company : 'google'
//     },
//     location : {
//         city : 'seoul',
//         country : 'United States'
//     }
// }).then(() => {
//     console.log('data is saved.');
// }).catch(e => console.log(e));


//
// // database.ref().set('this is my data'); // overwrite it.
// // database.ref('age').set(27);
// // database.ref('location/city').set('philie');
//
// database.ref('attributes').set({
//     height : 60.3,
//     weight : 40.1
// })
//     .then(() => console.log('data added'))
//     .catch(e => console.log(e));

// attributes -> height inches , weight pounds lb.

// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('remove succeed.');
//     })
//     .catch(e => console.log('remove failed, error : ', e));

// database.ref('isSingle').set(null);
//
// database.ref().update({
//     // job : 'manager',
//     // 'location/city' : 'boston'
//     stressLevel : 9,
//     'job/company' : 'amazon',
//     'location/city' : 'seattle'
// });