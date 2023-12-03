const gestures = require("../../support/helpers/gestures");
const { pdfGenerator } = require('./shared/pdfGenerator');

describe("-> Repoter", () => {
    beforeEach( async () => {
        await $("id=br.com.pztec.estoque:id/Button3").click();
        await $("id=br.com.pztec.estoque:id/btn_relatorios").click();
    })

    let hasMoreTests = true;

    afterEach( async () => {
        if (hasMoreTests) {
            await driver.terminateApp("br.com.pztec.estoque");
            await driver.activateApp("br.com.pztec.estoque");
            await driver.pause(3000);
        }
    })

    it("Should be able to view the pdf of the inventory data", async () => {
        if (!hasMoreTests) {
            return
        }
        await pdfGenerator();

        await $("id=br.com.pztec.estoque:id/btn_abrir").click();

        await expect($("android.widget.TextView")).toHaveText("inventory.pdf");
        await expect($("id=com.google.android.apps.docs:id/projector_coordinator")).toBeDisplayed();

        hasMoreTests = true;
    });

    it("Should be able to send the pdf of the inventory data", async () => {
        if (!hasMoreTests) {
            return
        }

        await pdfGenerator();

        await $("id=br.com.pztec.estoque:id/btn_email").click();

        await expect($("id=android:id/profile_tabhost")).toBeDisplayed();

        hasMoreTests = false;
    });
})
