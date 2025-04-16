//return in generetor
function *gen(){
    yield 1
    try{
        yield 2
        yield 3
    }
        finally{
            yield 4
        }
        yield 5
    }

    const g = gen()

    console.log(g.next().value);
    console.log(g.next().value);
    console.log(g.return(6).value);
    console.log(g.next().value);
    console.log(g.next().value);

//sort array
const a = [999, 1111, 111, 2, 0] 
const b = a.sort()

console.log(a)
console.log(b)

//Create try...catch...finally
try {
    let result = 10 / 0;
    if (result === Infinity) throw new Error("Cannot divide by zero.");
    console.log("Result:", result);
  } catch (error) {
    console.error("Error occurred:", error.message);
  } finally {
    console.log("Execution finished.");
  }

  
// Create two-way generator
function* gen() {
    yield 2 * (yield 100)
  }
  
  const generator = gen()
  console.log(generator.next().value)  
  console.log(generator.next(1).value)
  console.log(generator.next(1).value) 
  
// Create Promise executor
new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })