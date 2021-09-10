// type
var car = 'bmw';
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['mon', 'tue', 'wed'];
week1.push('thu');
// 튜플( Tuple )
var b;
b = ['z', 1];
// b = [1, 'z']; // err
b[0].toLowerCase();
// b[1.toLowerCase()];
// void, never
function sayHello() {
    console.log('hello');
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something.
    }
}
// enum
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
console.log(Os[0]);
