const { dateRandom } = require('./shared/dateRandom');
const { fillProductForm } = require("./shared/fillProductForm");

describe("-> Product", () => {
    beforeEach(async () => {
        await $("id=br.com.pztec.estoque:id/Button1").click();
    });

    let hasMoreTests = true;

    afterEach(async () => {
        if (hasMoreTests) {
            await driver.terminateApp("br.com.pztec.estoque");
            await driver.activateApp("br.com.pztec.estoque");
            await driver.pause(2000);
        }
    });

    it("Should not be able to save a new product without entering the mandatory data", async () => {
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect(
            $(`//*[@resource-id="br.com.pztec.estoque:id/scrollView1"]/android.widget.LinearLayout`)
        ).toBeDisplayed();
    });

    it("Should be able to save a new product", async () => {
        if (!hasMoreTests) {
            return;
        }

        await fillProductForm();
        await dateRandom();

        await $("id=android:id/button1").click();
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect($("id=br.com.pztec.estoque:id/linha_parte1")).toBeDisplayed();

        hasMoreTests = true;
    });

    it("Should be able to remove a product", async () => {
        if (!hasMoreTests) {
            return;
        }

        await fillProductForm();
        await dateRandom();

        await $("id=android:id/button1").click();
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect($("id=br.com.pztec.estoque:id/linha_parte1")).toBeDisplayed();

        hasMoreTests = true;
    });


    it("Should be able to edit a product", async () => {
        if (!hasMoreTests) {
            return
        }

        await fillProductForm();
        await dateRandom();

        await $("id=android:id/button1").click();
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect($("id=br.com.pztec.estoque:id/linha_parte1")).toBeDisplayed();

        await $("id=br.com.pztec.estoque:id/editar").click();

        const describe = await $("id=br.com.pztec.estoque:id/txt_descricao");

        await (describe).clearValue();
        await (describe).addValue("NEW DESCRIP");

        await expect($(describe)).toHaveText("NEW DESCRIP");

        hasMoreTests = true;
    });

    it("Should be able to increase the number of products", async () => {
        if (!hasMoreTests) {
            return
        }

        await fillProductForm();
        await dateRandom();

        await $("id=android:id/button1").click();
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect($("id=br.com.pztec.estoque:id/linha_parte1")).toBeDisplayed();

        await $("id=br.com.pztec.estoque:id/entrada").click();

        await expect($("id=br.com.pztec.estoque:id/scrollView1")).toBeDisplayed();

        await $("id=br.com.pztec.estoque:id/txt_qtdentrada").addValue("2");
        await $("id=br.com.pztec.estoque:id/txt_motivo").addValue("I bought a new stock");
        await $("id=br.com.pztec.estoque:id/txt_referencia").addValue("document");

        await $("id=br.com.pztec.estoque:id/btn_salvar").click();

        await expect($("id=br.com.pztec.estoque:id/txt_quantidade")).toHaveTextContaining("16");

        hasMoreTests = true;
    });

    it("Should be able to search for ID", async () => {
        if (!hasMoreTests) {
            return;
        }

        const button1 = await $("id=br.com.pztec.estoque:id/Button1");

        for (let i = 0; i < 5; i++) {
            const isButtonPresent = await button1.isDisplayed();

            if (isButtonPresent) {
                await button1.click();
            }

            await fillProductForm();
            await dateRandom();

            await $("id=android:id/button1").click();
            await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();
            await driver.pause(2000);
        }

        await $("~Search").click();
        await $("id=android:id/search_src_text").addValue("1");

        await expect($("id=br.com.pztec.estoque:id/linha_parte1")).toBeDisplayed();
        await expect($("id=br.com.pztec.estoque:id/txt_idprod")).toBeDisplayed();

        hasMoreTests = false;
    });
});
