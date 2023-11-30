const { randomDay } = require("../../../support/helpers/randomDay");

const dateRandom = async () => {
    await $("id=br.com.pztec.estoque:id/data").click();
    await expect($("id=android:id/parentPanel")).toBeDisplayed();

    await $("~Next month").click();
    const number = await randomDay();

    const selector = await $$("android.view.View")[number];
    await $(selector).click();
}

module.exports = { dateRandom }
