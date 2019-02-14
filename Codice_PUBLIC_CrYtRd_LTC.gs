function RefRemo() {
  randRemo=Math.random();
  SpreadsheetApp.getActiveSheet().getRange('Long_Position!I5').setValue(randRemo);
  SpreadsheetApp.getActiveSheet().getRange('Short_Position!I5').setValue(randRemo);
}
