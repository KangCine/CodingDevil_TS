// type
let car: string = 'bmw';

let age: number = 30;
let isAdult: boolean = true;
let a:number[] = [1,2,3];
let a2: Array<number> = [1,2,3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

week1.push('thu');

// 튜플( Tuple )
let b: [string, number];

b = ['z', 1];
// b = [1, 'z']; // err

b[0].toLowerCase();
// b[1.toLowerCase()];

// void, never
function sayHello(): void{
    console.log('hello')
}


function showError(): never{
    throw new Error();
}

function infLoop():never{
    while(true){
        // do something.
    }
}


// enum
enum Os{
    Window,
    Ios,
    Android
}

// console.log(Os[0]);
// console.log(Os[Window]);

let myOs:Os;

myOs = Os.Window;


// null, nudefined
let n1: null= null;
let n2: undefined = undefined;
