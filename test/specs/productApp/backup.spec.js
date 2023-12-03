const { productGenerator } = require('./shared/productGenerator')

describe("-> Backup", () => {
    before(async () => {
        await productGenerator(2);
    });

    beforeEach(async () => {
        await $("id=br.com.pztec.estoque:id/Button3").click();
        await $("id=br.com.pztec.estoque:id/btn_backup").click();
    });


    it("Should be able to generate backup and send", async () => {
        await $("id=br.com.pztec.estoque:id/btn_gerar").click();
        await expect($("id=android:id/content")).toBeDisplayed();
        await $("id=android:id/button1").click();
        await driver.pause(1000);

        const datafile = await $("id=br.com.pztec.estoque:id/datafile");
        const datafileText = await datafile.getText();

        await expect($(datafile)).toHaveText(datafileText);

        await $("id=br.com.pztec.estoque:id/btn_send").click();
        await expect($("id=android:id/profile_tabhost")).toBeDisplayed();
    });
})
