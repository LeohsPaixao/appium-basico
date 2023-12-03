const pdfGenerator = async () => {
    await $("id=br.com.pztec.estoque:id/inventario").click();
    await $("id=br.com.pztec.estoque:id/btn_gerar").click();
    await expect($("id=br.com.pztec.estoque:id/datafile")).toHaveTextContaining("inventory.pdf generated in");
}

module.exports = { pdfGenerator }
