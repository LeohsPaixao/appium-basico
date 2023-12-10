const demoapp = require('./test/support/desired/desiredNativeApp');
const productapp = require('./test/support/desired/desiredProductApp');

exports.config = process.env.APP_ENV === "demoapp" ? demoapp : productapp
