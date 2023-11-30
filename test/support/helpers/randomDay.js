const _ = require('lodash');

async function randomDay() {
    const randomNumber = _.random(1, 30)
    return randomNumber;
}

module.exports = { randomDay };
