var numbers = [3,5,6];

//statement
var substract = (a,b) => {
  return a - b;
}
console.log(substract(8,5));

//expression
var add = (a,b) => a+b;
console.log(add(7,3));

numbers.forEach(function(number){
  console.log("anonymous",number);
});

numbers.forEach((number) => console.log(number));
