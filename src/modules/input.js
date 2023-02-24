'use strict';

const readline = require('readline');

const input = (cb) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = async() => {
    await rl.question('Enter your number: ', (inputValue) => {
      const isRight = cb(inputValue);

      if (isRight) {
        rl.close();
      } else {
        ask();
      }
    });
  };

  ask();
};

module.exports = { input };
