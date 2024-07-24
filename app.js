let arr = [{name: 'Dodge'},{name: 'Fodr Mustang'},{name: 'bmw'},{name: 'Ferrary'}];
let secondArr = [];


arr.forEach( function (value, index, array) {
    secondArr[index] = value.name;
});

console.log(secondArr);
