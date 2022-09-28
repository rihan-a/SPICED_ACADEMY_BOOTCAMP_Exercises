console.log("typeof 'message for you':", typeof 'message for you');
console.log("typeof 98:", typeof 98);
console.log("typeof function () {}:", typeof function () {});
console.log("typeof { name: 'bobby' }:", typeof { name: 'bobby' });
// console.log("typeof ['a', 'b', 'c']:", typeof ['a', 'b', 'c']);
console.log("Array.isArray(['a', 'b', 'c']):", Array.isArray(['a', 'b', 'c']));
// console.log("typeof null:", typeof null);
console.log("Is null null?", null === null);

// NaN is... a number???
//console.log(typeof (12 / 'hello'));
// NaN is.... not NaN???
// console.log("Is 12 / 'hello' NaN?", (12 / 'hello') === NaN);
console.log("Is 12 / 'hello' NaN?", isNaN(12 / 'hello'));


console.log(isNaN('hello'));