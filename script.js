
// check if the number is positive

const number = 10;

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}
console.log("code after if");

// if-else--------------------------------------------

if (number > 0) {
    console.log("The number is positive");
  }
  // if number is not greater than 0
  else {
    console.log("The number is either a negative number or 0");
  }

//   if-else-if--------------------------------------
  if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}  

// switch----------------------------------------
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
