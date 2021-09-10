function add(num1: number, num2: number){
    console.log(num1 + num2);
}

// add();
// add(1);
add(1, 2);
// add(3, 4, 5);
// add('hello, ', 'world!');


function showItems(arr: number[]){
    arr.forEact((item: number) => {
        console.log(item);
    });
}

showItems([1,2,3]);
// showItems(1, 2, 3);