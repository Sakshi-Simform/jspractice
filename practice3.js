//polyfill for flat array
let flatarray = [1,[2,3],4,5]

Array.prototype.flat = function(){
    const result = []

    for(let item of this){
        if(Array.isArray(item)){
             result.push(...item)
        }
        else{
            result.push(item)
        }
    }

    return result;
};

console.log(flatarray.flat());

//curry func
function multiply (a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
const multiplynum = multiply(2)(3)(4)

console.log(multiplynum);

  //promise.all
  const promise1 = Promise.resolve("resolve");
  const promise2 = 5
  const promise3 = new Promise((resolve , reject) =>{
      setTimeout(resolve , 100 ,"hello");
  });
  
  Promise.all([promise1 , promise2 , promise3]).then((result) => {
      console.log(result);
      
  });

  

//reorder index
function reorderArray(arr, newIndexe) {
    if (arr.length !== newIndexe.length) {
      throw new Error("Array and index map must be the same length");
    }
  
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result[newIndexe[i]] = arr[i];
    }
  
    return result;
  }
  
 
  console.log(reorderArray(['a', 'b', 'c'], [2, 0, 1])); 


//reduce function

Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }
  
    let accumulator = initialValue;
    let startIndex = 0;
  
    if (accumulator === undefined) {
      if (this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = this[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
  
    return accumulator;
  };
  [1, 2, 3].myReduce((acc, curr) => acc + curr, 0); 
  


  