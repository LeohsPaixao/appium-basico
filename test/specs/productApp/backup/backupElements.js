class BackupElements {
  btnBackup = () => $('id=br.com.pztec.estoque:id/btn_backup');
  btnGenerateBackupFile = () => $('[text="GENERATE BACKUP FILE"]');
  btnModalOk = () => $('[text="OK"]');
  btnSend = () => $("id=br.com.pztec.estoque:id/btn_send");
  modalTitle = () => $('id=android:id/alertTitle');
  messageDataFile = () => $('id=br.com.pztec.estoque:id/datafile');
  profileTabHost = () => $('id=android:id/profile_tabhost')
}

module.exports = BackupElements;