//Separator for splitting commands
var SEPARATOR = "  ";

//Mapping for Selenium Commands -> Selenium Robot Keywords
var KEYWORDS = {
  type: "Input Text",
  select: "Select From List",
  verifyValue: "Textfield Should Contain"
};

//converts the test case respectively the single command into the target format
function formatCommands(commands) {
  var result = '';
  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];
    if (command.type == 'command') {
      var keyword = KEYWORDS[command.command];
      if(keyword == null){
      	keyword = "Call Selenium Api  " + command.command;
      }
	  var target = command.target.replace(/id=/, '');		
      result += keyword + SEPARATOR + target + SEPARATOR + command.value + "\n";
      keyword = null;
    }
  }
  return result;
}

//takes the source of the recorded test case and maps it on a test case object
function parse(testCase, source) {
  var doc = source;
  var commands = [];
  while (doc.length > 0) {
    var line = /(.*)(\r\n|[\r\n])?/.exec(doc);
    var array = line[1].split(SEPARATOR);
    if (array.length >= 3) {
      var command = new Command();
      command.command = array[0];
      command.target = array[1];
      command.value = array[2];
      commands.push(command);
    }
    doc = doc.substr(line[0].length);
  }
  testCase.setCommands(commands);
}

//delegate to the formatCommands-method
function format(testCase, name) {
  return formatCommands(testCase.commands);
}