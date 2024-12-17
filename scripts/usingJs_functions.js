/* type One Function with Name and argument */
function show(message) {
  console.log("Function With Name and Argument");
  console.log(message);
}

/* Function with Return value */

function getMessage(message) {
  return message.toUpperCase();
}

/* Function can be called without arg even if it requries */

function setMessage(message) {
  var val = message + "Done";
  return val;
}

/* Function with  default param */

function setMessageVersionTwo(message = "Buy Sweet") {
  var val = message + "Done";
  return val;
}

/* Named function */

var firstName="Ram"
var mark =60
var isMarried=false

var greet =function(){
    
    return "Named Function"
}

var greetAsArrow =()=>  "Named Function"

var greetAsArrowV2 =(age,mark)=>  mark+"Named Function"+age

/* Arrow Function */

/* function returning a Function refer quickstart.js */
/* function taking another function as argument refer 
addEventListener */

console.log(greet())
show("Hello World");

var response = getMessage("hello");

console.log(response);

var result = setMessageVersionTwo("Buy Milk");

console.log(result);
