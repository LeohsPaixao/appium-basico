const demoAppConfig = require('./test/support/desired/desiredNativeApp');
const productAppConfig = require('./test/support/desired/desiredProductApp');

exports.config = process.env.APP_ENV === "demoapp" ? demoAppConfig : productAppConfig
