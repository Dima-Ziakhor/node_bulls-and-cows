'use strict';

const getInitialNumber = () => {
  let str = '';

  while (str.length < 4) {
    const randInt = (Math.random() * 10).toFixed(0);

    if (!str.includes(String(randInt))) {
      str += randInt;
    }
  }

  return str;
};

module.exports = { getInitialNumber };
