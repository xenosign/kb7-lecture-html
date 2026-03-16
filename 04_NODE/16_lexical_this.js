const calculator = {
  name: "MyCalculator",
  numbers: [1, 2, 3],

  printNumberRegular() {
    this.numbers.forEach(function (n) {
      console.log(this.name + ": " + n);
    });
  },

  printNumberArrow() {
    this.numbers.forEach((n) => {
      console.log(this.name + ": " + n);
    });
  },
};

calculator.printNumberRegular();
calculator.printNumberArrow();
