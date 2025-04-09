//sum of all number in array
let array = [1,2,3,4]
const sumofarray = array.reduce((acc , curr) => 
    acc + curr , 0)

console.log(sumofarray);

//occurence of each item
let arr = ['a', 'b', 'a', 'c', 'b', 'a']
const output = {};
arr.forEach(item => {
  output[item] = (output[item] || 0) + 1;
});

console.log(output);

//remove duplicate
let value = [1, 2, 2, 3, 4, 4]
const removeduplicate = value.filter((value , index , array) => array.indexOf(value) === index)

console.log(removeduplicate);

//convert obj in array of key value pairs
let keyarray = {a: 1, b: 2}
const keyvaluepair = Object.entries(keyarray)

console.log(keyvaluepair);

//convert obj in array

let arrayobj = {a: 1, b: 2, c: 3}
const arrayvalue = Object.values(arrayobj)

console.log(arrayvalue);