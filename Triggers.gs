// https://script.google.com/home

/**
 * Creates a two time-driven triggers.
 */
function createTimeDrivenTriggers() {
  // Trigger every 6 hours.
  ScriptApp.newTrigger('MyFunction')
      .timeBased()
      .everyHours(6)
      .create();

  // Trigger every Monday at 09:00.
  ScriptApp.newTrigger('MyFunction')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.MONDAY)
      .atHour(9)
      .create();
}

/**
 * Creates a trigger for when a spreadsheet opens.
 */
function createSpreadsheetOpenTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('MyFunction')
      .forSpreadsheet(ss)
      .onOpen()
      .create();
}