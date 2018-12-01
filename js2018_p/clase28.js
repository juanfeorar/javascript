console.log('a');

setTimeout(() => {
    console.log('b');
}, 2000);

console.log('c');

setTimeout(() => console.log('d'), 2000);
