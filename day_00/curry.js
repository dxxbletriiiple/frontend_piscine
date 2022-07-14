const zero = () => 0;
const one = () => 1;
const two = () => 2;
const three = () => 3;
const four = () => 4;
const five = () => 5;
const six = () => 6;
const seven = () => 7;
const eight = () => 8;
const nine = () => 9;

const mult = (arg) => {
	this.bind(arg);
	console.log(this);

	// return arg * this;
};
mult(two());
const devide = (arg) => arg;
const plus = (arg) => arg;
const minus = (arg) => arg;
