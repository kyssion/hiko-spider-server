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
let t : Person1 = {
    age: 0, name: ""
}

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


type type1 = {
    name1: number
}

type type2 = type1 &{
    name: number
    age : string
}

let aaa : type2 = {
    name1 : 134,
    name:123,
    age : "fff"
}
console.log(aaa)

// todo 范型


function identify<T>(arg : T) : T{
    return arg
}

// 范型约束条件
function identify2<T extends Point,V>(arg:T , arg2:T) :T{
    return arg
}