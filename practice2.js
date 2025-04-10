// Check for specific key
function existkey(object, key) {
    return object.hasOwnProperty(key);
}

const obj = { name: "Alice", age: 25 };
const key = "age";

console.log(existkey(obj, key)); 

//merge object
function mergeObject(obj1, obj2) {
    return { ...obj1, ...obj2 }
}
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const result = mergeObject(obj1, obj2)
console.log(result);

//flat array
const array =  [1, [2, [3, 4], 5]]
const output = array.flat(2)

console.log(output);

//commom element
function commomElement(arr1 , arr2 ){
    return arr1.filter(element => arr2.includes(element));
}

const arr1 = [1,2,3]
const arr2 = [2,3,4]

const findcommom = commomElement(arr1 , arr2)
console.log(findcommom);


//group obj in array
let garray = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];

function groupBy(arr) {
    const arrresult = {};
    for (let item of arr) {
        if (!arrresult[item.type]) {
            arrresult[item.type] = [];
        }
        arrresult[item.type].push(item);
    }
    return arrresult;
}

console.log(groupBy(garray));
