// Generic

function getSize<T>(arr: T[]): number{
    return arr.length;
}

const arr1 = [1,2 ,3];
getSize<number>(arr1); // 3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [false, true, true];
getSize<boolean>(arr3); // 3

const arr4 = [{}, {}, {name: "Tim"}];
getSize<object>(arr4); // 3