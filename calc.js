let sum = function (a, b) {
  return a + b;
};
let minus = function (a, b) {
  return a - b;
};
let mult = function (a, b) {
  return a * b;
};
let div = function (a, b) {
  return Math.round(a/b);
};

let modulo = function (a, b) {
  return a%b;
};
module.exports = {
  sum: sum,
  minus: minus,
  mult: mult,
  div: div,
  modulo: modulo
}; //ou module.exports.sum=sum;




