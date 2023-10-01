// function receiving number and returning number too
function addNumbers(a: number): number {
  return a;
}

console.log(addNumbers(1));

type AddSetterFunc = (v: number) => number;

//function receiving number and a function that return number
function addSetter(a: number, b: number, c: AddSetterFunc): number {
  return c(a);
}
let addedValue = addSetter(1, 2, (v) => v * 10);

console.log(addedValue);

// function manipulating arrays and returning array
function arrMethods(numbers: number[], func: (v: number) => number): number[] {
  return numbers.map(func);
}
arrMethods([1, 2, 3, 4], (x) => x * 2);

