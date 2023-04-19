class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

 speak() {
    console.log(
      `This is a ${this.name} makes a noise`
    );
  }

}

 class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(
      `This ${this.name} is a ${this.breed} that barks`
    );
}
 }

const mydog = new Dog("Summer", "8", "Golden Retriever");
mydog.speak();