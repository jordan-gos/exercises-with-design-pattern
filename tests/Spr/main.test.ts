// shapes.test.ts

import {
  Shape,
  Circle,
  Rectangle,
  Triangle,
  Shapes,
  Employee,
  FullTimeEmployee,
  PartTimeEmployee,
  InternEmployee,
} from '../../Solid/2.Ocp/main';

// Test cho Shapes và các hình dạng
describe('Shape Classes', () => {
  test('Circle should calculate area correctly', () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
  });

  test('Rectangle should calculate area correctly', () => {
    const rectangle = new Rectangle(4, 5);
    expect(rectangle.calculateArea()).toBe(20);
  });

  test('Triangle should calculate area correctly', () => {
    const triangle = new Triangle(3);
    expect(triangle.calculateArea()).toBe(4.5);
  });

  test('Shapes should calculate total area correctly', () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 5),
      new Triangle(3),
    ];
    const shapesInstance = new Shapes(shapes);
    expect(shapesInstance.calculateArea()).toBeCloseTo(103.04, 2);
  });
});

// Test cho Employee và các loại nhân viên
describe('Employee Classes', () => {
  test('FullTimeEmployee should calculate salary correctly', () => {
    const fullTimeEmployee = new FullTimeEmployee('Alice');
    expect(fullTimeEmployee.calculateSalary()).toBe(5000);
  });

  test('PartTimeEmployee should calculate salary correctly', () => {
    const partTimeEmployee = new PartTimeEmployee('Charlie');
    expect(partTimeEmployee.calculateSalary()).toBe(3000);
  });

  test('InternEmployee should calculate salary correctly', () => {
    const internEmployee = new InternEmployee('Bob');
    expect(internEmployee.calculateSalary()).toBe(1000);
  });
});
