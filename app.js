"use strict"
let arr = [{name: 'Dodge'},{name: 'Fodr Mustang'},{name: 'bmw'},{name: 'Porche'}];
let secondArr = [];


arr.map( function (value, index, array) {
    secondArr[index] = value.name;
});

console.log(secondArr);
