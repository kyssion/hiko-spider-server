// ts 接口

interface Person{
    [propName : string] : any|number; // 指定对象的参数类型
    name : string;
    age? : number;
}

let one : Person = {
    age: 0,
    name: "",
    fff: "123",
    ffff:444,
}

interface Person1 {
    name : string;
    age: number;
}

interface Person2 {
    name : string;
    age: number;
}

// ts 使用鸭子类型 ， 只要相似就行

function print(item : Person2){
    console.log(item)
}

class XXX {
    name : string = ""
}

interface Interface {
    name : string
    age : string
}

let t : Person1 = {
    age: 0, name: ""
}

print({age: 0, name: ""})

print(t)

// 类型和别名 : todo 其实本身上是相似的， 但是interface 是一个新的类型, type 只是类型的别名
interface Point {
    x: number;
    y: number;
}

interface SetPoint {
    (x: number, y: number): void;
}

type Point2 = {
    x: number;
    y: number;
};

type SetPoint2 = (x: number, y: number) => void;

// 接口何以定义多次，
interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };



