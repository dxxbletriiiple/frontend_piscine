function makeCount() {
	let count = 0;
	return function () {
		return count++ * 3;
	};
}
let counter = makeCount();
console.log(counter()); //0
console.log(counter()); //3
console.log(counter()); //6
console.log(counter()); //9
console.log(counter()); //12
