// Constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return `${this.firstName}, ${this.lastName}`;
  };
}

let salil = new Person('Salil', 'Bhole', 50);
display(salil.fullName());
let sam = salil;
sam.firstName = 'Samuel';
display(salil.fullName());
display(sam.fullName());
/*
let Person = {
  firstName: '',
  lastName: '',
  age: 62,
  fullName() {
    return `${this.firstName}, ${this.lastName}`;
  },
};

let salil = { firstName: 'salil', lastName: 'bhole' };
Object.setPrototypeOf(salil, Person);
display(Object.getPrototypeOf(salil));
display(salil.hasOwnProperty('age'));
*/
