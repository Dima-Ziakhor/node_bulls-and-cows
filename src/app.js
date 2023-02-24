'use strict';

// const process = require('process');

const { getInitialNumber } = require('./modules/getInitialNumber');
const { calculate } = require('./modules/calculate');
const { input } = require('./modules/input');

const initialValue = getInitialNumber();

const callback = (inputValue) => {
  const { bulls, cows } = calculate(inputValue, initialValue);

  if (!cows) {
    console.log('You win! Numbers was: ', initialValue);

    return true;
  }

  console.log(`You find ${bulls} bulls...`);

  return false;
};

input(callback);
