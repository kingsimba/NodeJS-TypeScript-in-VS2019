function printHello() {
    console.log('Hello world');
}

class Person {
    constructor(public name: string) {
    }
}

const person = new Person('kingsimba');
console.log(person.name);

printHello();
