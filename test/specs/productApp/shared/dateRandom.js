const { randomDay } = require("../../../support/helpers/randomDay");

const dateRandom = async () => {
    await expect($("id=android:id/parentPanel")).toBeDisplayed();

    await $("~Next month").click();
    const number = await randomDay();

    const selector = await $$("android.view.View")[number];
    await $(selector).click();

    await $("id=android:id/button1").click();
}

const datePrefer = async (day) => {
    await expect($("id=android:id/parentPanel")).toBeDisplayed();

    await $("~Next month").click();

    const selector = await $$("android.view.View")[day];
    await $(selector).click();

    await $("id=android:id/button1").click();
}

module.exports = { dateRandom, datePrefer }
