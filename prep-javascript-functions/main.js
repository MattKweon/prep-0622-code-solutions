function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var hoursToMins = convertHoursToMinutes(2);
console.log(hoursToMins);

function getGreeting(x) {
  return 'Hello ' + x + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addMulti5 = addAndMultiplyBy5(10, 5);
console.log(addMulti5);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiDiv5 = multiplyAndDivideBy5(35, 10);
console.log(multiDiv5);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var subTwoNum = subtractTwoNumbers(22, 7);
console.log(subTwoNum);

function getCircleCircumfrence(x) {
  var valueOfPi = Math.PI;
  return 2 * valueOfPi * x;
}

var circleCir = getCircleCircumfrence(5);
console.log(circleCir);

function getFullName(x, y) {
  return x + ' ' + y;
}

var fullName = getFullName('Juan', 'Rameriez');
console.log(fullName);

function cube(x) {
  return x * x * x; // I tried using the exponentiation operator (**), however, I got a parsing error
}

var cube3 = cube(5);
console.log(cube3);
