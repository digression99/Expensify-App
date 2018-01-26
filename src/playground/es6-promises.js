const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
    }, 3000);
    // reject('error');
});


console.log('before');

promise
    .then(data => console.log('1', data))
    .catch(e => console.log(e));

promise
    .then(data => console.log('2', data))
    .catch(e => console.log(e));

console.log('after');