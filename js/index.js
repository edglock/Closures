function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = {name: 'Edward', age: 47, job: student};
function bind(context, func) {
    const name = context.name;
    const age = context.age;
    const job = context.job;
    return function() {
        
    }
}