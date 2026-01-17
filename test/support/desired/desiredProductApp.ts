export const productApp = {
  capabilities: [
    {
      'appium:udid': process.env.APPIUM_UDID,
      'appium:app': './apps/product_registration.apk',
      'appium:appPackage': 'br.com.pztec.estoque',
      'appium:appActivity': 'br.com.pztec.estoque.Inicio',
      'appium:appWaitActivity': 'br.com.pztec.estoque.ListaAssunto',
    },
  ],

  specs: ['./test/specs/productApp/*.ts'],
};
