// todo 非空断言特性  ts 的 x! 语法会排除所有的underfind和 null
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok

let x! : number // 明确赋值断言 ， 这里可以告诉编译器这里会被明确的断言
console.log(2*x)

// todo ts 的 枚举类型 字面量类型
type MyEmue = "one" | "two"

function TestFunction (dir : MyEmue){}

TestFunction("one")

let specifiedStr: 'this is string' = 'this is string';
const str = 'fsadfasdf'; // str: 'this is string' // todo const 在ts中很特殊的， const如果不指定类型 ， const对应的类型将会是变量的字面量类型

// todo ts 类型拓宽， 就是变量声明的时候如果没有明确的指定变量信息， 将会尽可能的扩充变量的信息

{
    let str = 'this is string'; // 类型是 string
    let strFun = (str = 'this is string') => str; // 类型是 (str?: string) => string;
    const specifiedStr2 = 'this is string'; // 类型是 'this is string'
    let str2 = specifiedStr; // 类型是 'string'
    let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;
    // underfind 和 null 会拓宽成 any
    let a = undefined
    let b = null
    interface Vector3 {
        x: number;
        y: number;
        z: number;
    }

    function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
        return vector[axis];
    }
    
    let x:"x" = "x";
    let vec = { x: 10, y: 20, z: 30 };
    // 类型“string”的参数不能赋给类型“"x" | "y" | "z"”的参数。
    getComponent(vec, x); // Error

    // ts 推断也是有局限的
    // ('x' | 1)[]
    // ['x', 1]
    // [string, number]
    // readonly [string, number]
    // (string | number)[]
    // readonly (string|number)[]
    // [any, any]
    // any[]
    const arr = ['x', 1];

    let myObject :{x:string,y:number,z:boolean} ={
        x:"fff",
        y:123,
        z:true
    }
}

// ts 范型配合配型缩小特性

{
    type Goods = 'pen' | 'pencil' |'ruler';
    type GoodsNum = 2|"string"|true
    const getPenCost = (item: 'pen'):GoodsNum => true;
    const getPencilCost = (item: 'pencil'):GoodsNum => "pencil" as GoodsNum;
    const getRulerCost = (item: 'ruler') :GoodsNum => 6 as GoodsNum;
    const getCost = (item: Goods):GoodsNum =>  {
        if (item === 'pen') {
            return getPenCost(item); // item => 'pen'
        } else if (item === 'pencil') {
            return getPencilCost(item); // item => 'pencil'
        } else {
            return getRulerCost(item); // item => 'ruler'
        }
    }
}




