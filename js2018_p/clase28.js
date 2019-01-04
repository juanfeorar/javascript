console.log('a');

setTimeout(() => {
    console.log('b');
}, 2000);

console.log('c');

setTimeout(() => console.log('d'), 2000);

for (let i = 0; i < 100000; i++) {
    console.log('for del programa principal');

}