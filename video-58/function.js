function nice(name) {
  console.log("hey " + name + " you are nice");
  console.log("hey " + name + " you are good");
  console.log("hey " + name + " your tshirt is nice!");
  console.log("hey " + name + " your pant is also good too!");
}
nice("gajiul");

function sum(a,b) {
  console.log(a+b);
}

//function-call
sum(3,5);
function sum(a, b) {
  return a + b;
}
result = sum(5, 3);
console.log("The sum of these number is: ", result);

const func1=(x)=>{
  console.log("I am arrow funtion of ",x);
}
func1(34);
func1(15);
func1(84);