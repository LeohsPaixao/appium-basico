describe("-> Produtos", () => {
    it("Should not be able to save a new product without entering the mandatory data", async () => {
        await $("id=br.com.pztec.estoque:id/Button1").click();
        await $("id=br.com.pztec.estoque:id/btn_gravar_assunto").click();

        await expect(
            $(`//*[@resource-id="br.com.pztec.estoque:id/scrollView1"]/android.widget.LinearLayout`)
        ).toBeDisplayed();
    })
})
