const { fillProductForm } = require("./fillProductForm");
const { dateRandom } = require("./dateRandom");

const productGenerator = async (amount) => {
    const button1 = await $("id=br.com.pztec.estoque:id/Button1");

    for (let i = 0; i < amount; i++) {
        const isButtonPresent = await button1.waitForDisplayed();

        if (isButtonPresent) {
            await button1.click();
        }

        await fillProductForm();
        await $("id=br.com.pztec.estoque:id/data").click();
        await dateRandom();

        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();
        await driver.pause(2000);
    }
}

module.exports = { productGenerator };
