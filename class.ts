// 접근 제한자(Access modifier) = public, private, protected
/*
public - 자식 클래시, 클래스 인스턴스 모두 접근 가능
protected = 자식 클래스에서 접근 가능
pricate = 해당 클래스 내부에서만 접근 가능
*/
abstract class ClassCar{
    // color: string;
    name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color: string, name: string){
        this.color = color;
    }
    start(){
        console.log("start");
        console.log(this.name);
    }
    abstract doSomethis(): void;
}

// const bmw = new Car("red");

class ClassBmw extends Car{
    constructor(color: string, name: string){
        super(color);
    }
    showName(){
        console.log(super.name);
    }
}

const z4 = new ClassBmw("Black", "zzzz4");

console.log(z4.name);

