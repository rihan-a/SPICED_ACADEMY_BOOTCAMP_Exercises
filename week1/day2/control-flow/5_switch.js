var color = 'blue';
var item;

if (color === 'green') {
    item = 'machine';
} else if (color === 'blue') {
    item = 'kangaroo';
} else if (color === 'red') {
    item = 'bunk-bed';
} else {
    item = 'nothing rhymes with Christmas'
}

switch(color) {
    case 'green':
        item = 'machine';
        break;
    case 'blue':
        item = 'kangaroo';
        break;
    case 'red':
        item = 'bunk-bed';
        break;
    default:
        item = 'nothing rhymes with Christmas';
}

console.log('color:', color, ', item:', item);