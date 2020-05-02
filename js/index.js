function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = {name: 'Edward', age: 47, job: 'student'};
function bind(context, fanc) {
    return function() {
        fanc.apply(context);
    }
}
bind(person1, logPerson)();

function add(first) {
    return function(second) {
        console.log(first + second);
    }
}
const calc = add(10);
calc(20);

function pow(base, exponent) {
    if ( exponent === 0) {
        return 1;
    } else {
        return base * pow(base, exponent - 1);
    }
}
console.log(pow(2, 3));