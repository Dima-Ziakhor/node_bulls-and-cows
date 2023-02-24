'use strict';

const calculate = (inputNumber, initialNumber) => {
  if (typeof inputNumber !== 'string') {
    throw new Error('Value must be a string!');
  }

  if (inputNumber.length !== 4) {
    throw new Error('You must input 4 numbers!');
  }

  const sortedInput = inputNumber.split('').map(item => +item).sort();
  const isConsistNaN = sortedInput.findIndex(item => isNaN(item)) !== -1;

  if (isConsistNaN) {
    throw new Error('Value must consist of numbers!');
  }

  const sortedInitial = initialNumber.split('').map(item => +item).sort();
  const bulls = sortedInput.reduce((acc, prev, i) => {
    if (prev === sortedInitial[i]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return {
    bulls,
    cows: initialNumber.length - bulls,
  };
};

module.exports = { calculate };
