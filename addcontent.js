
function creataGreeting(){
    var hourNow = prompt('enter anumber between 0-24');
    var greeting;
    if (hourNow>18 && hourNow <= 24) {
        greeting='good morning';
    } 
    else if (hourNow>12 && hourNow <= 18) {
        greeting="good afternoon";
    } 
    else if (hourNow>0 && hourNow <=12) {
        greeting='good evning';
    }
     else {
        greeting='try another value';
    }
     return greeting;

}