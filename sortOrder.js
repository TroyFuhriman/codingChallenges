const firstValue = process.argv[2];
const secondValue = process.argv[3];

let first = firstValue.toLowerCase();
let second = secondValue.toLowerCase();

if (first > second) {
  console.log(1);
}
if (first === second) {
  console.log(0);
}
if (first < second) {
  console.log(-1);
}
