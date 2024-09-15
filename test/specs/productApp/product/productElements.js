class ProductElements {
  btnNewProduct = () => $('[text="NEW"]');
  btnMenu = () => $('[text="MENU"]');
  btnSaveProduct = () => $('id=br.com.pztec.estoque:id/btn_gravar_assunto');
  screenNewProduct = () => $('id=br.com.pztec.estoque:id/scrollView1');
  inputCode = () => $('id=br.com.pztec.estoque:id/txt_codigo');
  inputDescription = () => $('id=br.com.pztec.estoque:id/txt_descricao');
  inputUnit = () => $('id=br.com.pztec.estoque:id/txt_unidade');
  inputQuantity = () => $('id=br.com.pztec.estoque:id/txt_quantidade');
  inputUnitPrice = () => $('id=br.com.pztec.estoque:id/txt_valunit');
  inputLote = () => $('id=br.com.pztec.estoque:id/txt_lote');
  btnDate = () => $('id=br.com.pztec.estoque:id/data');
  iframeDate = () => $('id=android:id/parentPanel');
  btnNexMonth = () => $('~Next month');
  btnOkIframeDate = () => $('[text="OK"]');
  tableProduct = () => $('id=br.com.pztec.estoque:id/tabela_itens');
  btnRemoveProduct = () => $('id=br.com.pztec.estoque:id/deletar');
  btnEditProduct = () => $("id=br.com.pztec.estoque:id/editar");
  btnIncreaseQtnProduct = () => $('id=br.com.pztec.estoque:id/entrada');
  btnDecreaseQtnProduct = () => $('id=br.com.pztec.estoque:id/saida');
  titleScreenQtnProduct = () => $('id=br.com.pztec.estoque:id/lbl_titulo');
  btnSaveQtnProduct = () => $("id=br.com.pztec.estoque:id/btn_salvar");
  modalMessage = () => $("id=android:id/alertTitle");
  modalBtnYes = () => $('id=android:id/button1');
  inputQtnEntrance = () => $("id=br.com.pztec.estoque:id/txt_qtdentrada");
  prodId = () => $("id=br.com.pztec.estoque:id/txt_idprod");
  inputQtnOut = () => $("id=br.com.pztec.estoque:id/txt_qtdsaida");
  inputReason = () => $("id=br.com.pztec.estoque:id/txt_motivo");
  inputRef = () => $("id=br.com.pztec.estoque:id/txt_referencia");
  btnSearch = () => $("~Search");
  inputSearch = () => $("id=android:id/search_src_text");
}

module.exports = ProductElements;