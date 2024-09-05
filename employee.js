const sayHello = (name) => {
  console.log(`Hello there, my name is ${name}`);
};

let sayMyNameAndAge = (name, age) => {
  console.log(`Hello there, my name is ${name} and I am ${age} years old`);
};

let mySalary = (name, salary) => {
  console.log(
    `Hello there, my name is ${name} and my salary is ${salary} EURO`
  );
};

module.exports = {
  sayHello,
  sayMyNameAndAge,
  mySalary,
};
