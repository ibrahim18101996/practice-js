var name=String;
var agg=Number;
var phone=Number;
confirm('are you sure you eant to git in this page');

prompt('add your name');
prompt('add your age');
prompt('add your phone number');
    
    
    var today = new Date();
var hourNow = today.getHours();

var greeting;

if ( hourNow > 18) {
    greeting = 'good evening!   ';
}
else if (hourNow > 12){
    greeting = 'good afternoon';
} else if (hourNow > 0){
    greeting = 'good morning';
} else {
    greeting = 'welcome';
}
document.write('<h3>' + greeting + '</h3>')