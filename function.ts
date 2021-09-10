// 함수

function add(num1: number, num2: number): void{
    // return num1 + num2;
    console.log(num1 + num2);
}



function isAdult(age: number):boolean{
    return age > 19;
}


function hello(name?: string){
    return `Hello, ${name || "world"}`;
}

const result = hello();
const result2 = hello("Sam");
// const result3 = hello(123); // error

function hello2(name = "world"){
    return `Hello, ${name}`;
}


function hello3(name: string, age?: number):string{
    if(age !== undefined){
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello3("Sam"));
console.log(hello3("Sam", 30));



function hello4(age: number | undefined, name: string):string{
    if(age !== undefined){
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello4(30, "Sam"));
console.log(hello4(undefined, "Sam"));





function add(...nums: number[]){
    return nums.reduce((result, num) => result + num, 0);
}

add(1,2,3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55


interface User{
    name: string;
}

const Sam : User = {name: 'Sam'}

function showName(this: User, age: number, gender:'m'|'f'){
    console.log(this.name, age, gender)
}

const a = showName.bind(Sam);
a();


interface User{
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string) : User | string{
    if(typeof age === "number"){
        return{
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const sma: User = join("Sam", 30);
const jane: string = join("Jane", "30");