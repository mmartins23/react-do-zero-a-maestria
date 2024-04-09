# Classes

In ES6 (ECMAScript 2015), classes were introduced to JavaScript, providing a more convenient and familiar syntax for defining objects and their behaviors. Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance. Here's an explanation of classes with code examples:

1. **Defining a Class:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}
```

In this example, `Person` is a class with a constructor method that initializes `name` and `age` properties. It also has a `greet` method that returns a greeting message.

2. **Creating Objects from a Class:**

```javascript
const person1 = new Person('John', 30);
console.log(person1.greet()); // Output: Hello, my name is John and I'm 30 years old.

const person2 = new Person('Alice', 25);
console.log(person2.greet()); // Output: Hello, my name is Alice and I'm 25 years old.
```

You can create instances of the `Person` class using the `new` keyword, passing arguments to the constructor.

3. **Inheritance:**

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying hard for exams!`;
  }
}
```

Here, `Student` is a subclass of `Person`, inheriting its properties and methods. The `super` keyword is used to call the constructor of the parent class.



Classes provide a cleaner and more intuitive syntax for creating objects and implementing inheritance in JavaScript, making the code more readable and maintainable. However, it's important to note that under the hood, JavaScript's class syntax still relies on prototypal inheritance.