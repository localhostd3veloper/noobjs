// Implement this  const result = calc.add(10).multiply(5).subtract(3).add(100)
//console.log(result.total)

const calc = {
  total: 0,
  add(x) {
    this.total += x;
    return this;
  },
  multiply(x) {
    this.total *= x;
    return this;
  },
  subtract(x) {
    this.total -= x;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(3).add(100).multiply(5).subtract(3).add(100)
console.log(result.total);
