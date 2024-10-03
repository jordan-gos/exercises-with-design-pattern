/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
export interface Shape {
  calculateArea(): number;
}

export class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}
export class Triangle implements Shape {
  length: number;
  constructor(length: number) {
    this.length = length;
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}

export class Shapes {
  shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateArea(): number {
    return this.shapes.reduce((acc, shape) => acc + shape.calculateArea(), 0);
  }
}

let shapes: Shape[] = [new Circle(5), new Rectangle(4, 5), new Triangle(3)];
const shapesInstance = new Shapes(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/

export abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;
}

export class FullTimeEmployee extends Employee {
  calculateSalary(): number {
    return 5000;
  }
}

export class PartTimeEmployee extends Employee {
  calculateSalary(): number {
    return 3000;
  }
}

export class InternEmployee extends Employee {
  calculateSalary(): number {
    return 1000;
  }
}

const fullTimeEmployee = new FullTimeEmployee('Alice');
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const internEmployee = new InternEmployee('Bob');
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`
);
/*=========== END PRACTICE 2 ===============*/
