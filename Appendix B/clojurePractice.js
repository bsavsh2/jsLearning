function range(min, max) {
    if (max === undefined) {
        return function (number) {
            var arr = [];
            for (let i = min; i <= number; i++) {
                arr.push(i);
            }
            return arr;
        }
    }

    var arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(range(3, 3));
console.log(range(3, 8));
console.log(range(3, 0));

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));

console.log(start4(6));