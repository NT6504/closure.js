function outer() {
  let message = "Hello";
  return function inner() {
    return message + " World";
  };
}
const closure = outer();
console.log(closure());
