for (var index = 0; index < 5; index++) {
    console.log(index + 1 + '- hello!');
}

// use for-of to iterate over items in an ARRAY
var fruits = ['grape', 'apricot', 'apple', 'cherry', 'plum'];
for (var fruit of fruits) {
    console.log("> " + fruit);
}

// use for-in to iterate over properties of an OBJECT
var pet = {
    name: 'Socks',
    species: 'dog',
    age: 4,
    tailWagSpeed: 9.5
}

for (var name in pet) {
    // console.log("my pet's ? is ?");
    console.log("my pet's " + name + " is " + pet[name]);
}