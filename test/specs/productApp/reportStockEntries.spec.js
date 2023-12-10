const { datePrefer } = require('./shared/dateRandom');
const { pdfGenerator } = require('./shared/pdfGenerator');

describe("-> Report - Stock Entries", () => {
    beforeEach(async () => {
        await $("id=br.com.pztec.estoque:id/Button3").click();
        await $("id=br.com.pztec.estoque:id/btn_relatorios").click();
        await $("id=br.com.pztec.estoque:id/relentrada").click();
    });

    let hasMoreTests = true;

    afterEach(async () => {
        if (hasMoreTests) {
            await driver.terminateApp("br.com.pztec.estoque");
            await driver.activateApp("br.com.pztec.estoque");
            await driver.pause(3000);
        }
    });

    it("Should be able to view of the documents PDF", async () => {
        const buttonDate = await $("id=br.com.pztec.estoque:id/data1");
        const buttonDate2 = await $("id=br.com.pztec.estoque:id/data2");

        buttonDate.click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await buttonDate.waitForDisplayed();
        const dateText = await buttonDate.getText();
        await expect($(buttonDate)).toHaveText(dateText);

        buttonDate2.click();
        await datePrefer(15); // Coloca um dia a frente, ou seja, 16

        await buttonDate2.waitForDisplayed();
        const dateText2 = await buttonDate2.getText();
        await expect($(buttonDate2)).toHaveText(dateText2);

        await pdfGenerator();
        await $("id=br.com.pztec.estoque:id/btn_abrir").click();
        await expect($("id=com.google.android.apps.docs:id/projector_coordinator")).toBeDisplayed();
    });

    it("Should not be able to view of the PDF document if it has the previous date", async () => {
        if (!hasMoreTests) {
            return;
        }

        const buttonDate = await $("id=br.com.pztec.estoque:id/data1");
        const buttonDate2 = await $("id=br.com.pztec.estoque:id/data2");

        buttonDate.click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await buttonDate.waitForDisplayed();
        const dateText = await buttonDate.getText();
        await expect($(buttonDate)).toHaveText(dateText);

        buttonDate2.click();
        await datePrefer(4); // Coloca um dia a frente, ou seja, 5

        await buttonDate2.waitForDisplayed();
        const dateText2 = await buttonDate2.getText();
        await expect($(buttonDate2)).toHaveText(dateText2);

        await $("id=br.com.pztec.estoque:id/btn_gerar").click();
        await expect($("id=android:id/content")).toBeDisplayed();
        await expect($("id=android:id/message")).toHaveText("The end date can not be less than the starting date.");

        hasMoreTests = true;
    });

    it("Should be able to send the documents PDF", async () => {
        if (!hasMoreTests) {
            return
        }

        const buttonDate = await $("id=br.com.pztec.estoque:id/data1");
        const buttonDate2 = await $("id=br.com.pztec.estoque:id/data2");

        buttonDate.click();
        await datePrefer(5); // Coloca um dia a frente, ou seja, 6

        await buttonDate.waitForDisplayed();
        const dateText = await buttonDate.getText();
        await expect($(buttonDate)).toHaveText(dateText);

        buttonDate2.click();
        await datePrefer(15); // Coloca um dia a frente, ou seja, 16

        await buttonDate2.waitForDisplayed();
        const dateText2 = await buttonDate2.getText();
        await expect($(buttonDate2)).toHaveText(dateText2);

        await pdfGenerator();
        await $("id=br.com.pztec.estoque:id/btn_email").click();
        await expect($("id=android:id/profile_tabhost")).toBeDisplayed();

        hasMoreTests = false;
    });
})
