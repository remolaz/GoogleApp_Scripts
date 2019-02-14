// https://script.google.com/home

function onOpen() {
  AlignCells();

}

function getNumberOfElements(ss) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Reports'); // or whatever is the name of the sheet 
  var cell = sheet.getRange('A1');
  var ct = 0;
  
  while ( cell.offset(ct, 0).isBlank() != 1 ) {
    ct++;
  }
  
  return (ct);
}


function AlignCells() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Reports'); // or whatever is the name of the sheet 
  var rangeL;

  var data;
  
  var label;
  var labelV;
  var giorno;
  var data;
  
  var NowAlign;
  var NumberOfElements = getNumberOfElements();
  
  for (i = 1;i <= NumberOfElements;i++){
    
    rangeL = sheet.getRange(i,1);
    labelV = rangeL.getValue();
    label = sheet.getRange(i,1);
    giorno = sheet.getRange(i,2);
    data = sheet.getRange(i,3);
    NowAlign = label.getHorizontalAlignment()
    
    
    if (labelV=="entered" && NowAlign!="left"){
      label.setHorizontalAlignment("left");
      giorno.setHorizontalAlignment("center");
      data.setHorizontalAlignment("center");
    }
    
    if (labelV=="exited" && NowAlign!="right"){
      label.setHorizontalAlignment("right");
      giorno.setHorizontalAlignment("center");
      data.setHorizontalAlignment("center");
    }
    
  }
  
}
//Comments 