const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	const summ = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  return summ;
};

const multiply = function(arr) {
  const multi = arr.reduce((multi, num) => {
    return multi * num;
  }, 1);
  return multi;
};

const power = function(num1, num2) {
  const array = [num1, num2];
	const powe = array.reduce((pow, num) => {
    return pow ** num;
  });
  return powe;

};

const factorial = function(num) {
	if(num == 0) return 1;
  let start = 1;
  for(let i = num; i > 0; i--) {
    start = start*i;
  }
  return start;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
