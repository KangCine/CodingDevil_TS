type Score = 'A' | 'B' | 'C' | 'D' | 'F';

interface User {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : Score;
}

let user: User = {
    name: 'xx',
    age: 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
    // 3 : 'a', // err
}

console.log(user.name);

user.age=10;
user.gender = 'male';
// user.birthYear = 1990; // err


console.log(user.age);


interface Add{
    (num1: number, num2: number): number;
}

const add : Add = function(x, y){
    return x + y;
}

add(10, 20);

interface IsAdult {
    (age: number):boolean;
}

const a:IsAdult = (age) => {
    return age > 19;
}

a(33)

// implements

interface Car{
    color: string;
    wheels: number;
    start(): void;
}

interface Toy{
    name: string;
}

interface ToyCar extends Car, Toy{
    price: number;
}

interface Benz extends Car{
    door: number;
    stop(): void;
}

const Benz extends Car{
    door: number;
    stop(): void;
}

const benz : Benz = {
    door : 5,
    stop(){
        console.log('stop');
    },
    color: 'black',
    wheels: 4,
    start(){}
}

class Bmw implements Car{
    color;
    wheels = 4;

    constructor(c: string){
        this.color = c;
    }
    start(){
        console.log('go..');
    }
}

const b = new Bmw('green');
console.log(b);
b.start();


