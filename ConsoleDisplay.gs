// https://script.google.com/home

function ConsoleDisp() {
  
  Logger.log('CIAO CIAONE: %s', 1); // USA Visualizza/Log
  
  console.info('REMO %s (%d arguments)', 'LAZAZZERA', 0); //Usa Visualizza/StackdriverLogging
  // REMO LAZAZZERA (0.0 arguments)
  
    var parameters = {
      isValid: true,
      content: 'some string',
      timestamp: new Date() }
      
  console.log({message: 'Function Input', initialData: parameters});
  // {initialData={isValid=true, content=some string, timestamp=Fri Jan 18 18:57:40 GMT+01:00 2019}, message=Function Input}
  
  var label = 'REMO time'; // Labels the timing log entry.
  console.time(label); // Starts the timer.
  console.timeEnd(label); // Stops the timer, logs execution duration.
  // REMO time: 0ms
  
  var e = 'MI CHIAMO REMO';
  console.error('myFunction() yielded an error: ' + e);
  // myFunction() yielded an error: MI CHIAMO REMO

}