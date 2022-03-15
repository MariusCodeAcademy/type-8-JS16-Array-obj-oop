const users = [
  {
    name: 'James',
    age: 25,
    info: function () {
      console.log(this.name + ' ' + this.age);
    },
    changeName: function (newName) {
      this.name = newName;
    },
  },
  {
    name: 'Bob',
    age: 30,
    info: function () {
      console.log(this.name + ' ' + this.age);
    },
    changeName: function (newName) {
      this.name = newName;
    },
  },
];
users[0].info();
users[0].changeName('Mr James');
console.table(users);

function infoOutside(name, age) {
  console.log(name + ' ' + age);
}
// infoOutside(users[0].name, users[0].age);
function User2(argName, argAge) {
  this.name = argName;
  this.age = argAge;
}
class User {
  constructor(argName, argAge) {
    console.log('user created');
    // pradines reiksmes
    this.name = argName;
    this.age = argAge;
  }
  // metodai
  info() {
    console.log(this.name + ' ' + this.age);
  }
  changeName(newName) {
    this.name = newName;
  }
}

const us1 = new User('Bob', 25);
const us2 = new User('James', 33);
us2.changeName('Mr James');
us2.info();

console.log(' us1 ===', us1, us2);
