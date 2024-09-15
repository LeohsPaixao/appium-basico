class ReportElements {
  btnDashboard = () => $("id=br.com.pztec.estoque:id/btn_relatorios");
  btnInventory = () => $("id=br.com.pztec.estoque:id/inventario");
  btnStockEntry = () => $("id=br.com.pztec.estoque:id/relentrada");
  btnPDFGenerator = () => $('[text="PDF GENERATOR"]')
  btnOpenPDF = () => $("id=br.com.pztec.estoque:id/btn_abrir");
  btnSendEmail = () => $("id=br.com.pztec.estoque:id/btn_email");
  startDate = () => $("id=br.com.pztec.estoque:id/data1");
  finalDate = () => $("id=br.com.pztec.estoque:id/data2");
  messageDataFile = () => $('id=br.com.pztec.estoque:id/datafile');
  titleDocsOpened = () => $("android.widget.TextView");
  contentDocsOpened = () => $("id=com.google.android.apps.docs:id/projector_coordinator");
  profileTabHost = () => $("id=android:id/profile_tabhost");
  modalContent = () => $("id=android:id/content");
  modalMessage = () => $("id=android:id/message");
}

module.exports = ReportElements;