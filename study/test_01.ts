
// todo 基本类型
import {type} from "os";

let str : string = "fffff"
let bool : boolean = true
let object : object = {x : 123}

// number 和 bigint 不兼容
let num : number = 123
let big : bigint = BigInt(1234);
let big2 : bigint = 4444n; // 这个是ES2020 标准之上才支持的特性

let symbol : symbol = Symbol("fff")

// underfind 和null 是所有类型的子类型
let u : undefined = undefined
let nil : null = null


// todo 其他类型

let arrStr : string[] = ["123","sdfsfdsf"]
let arrStrAndNum :(string|number)[] =["123",123]
let arrNewStr : Array<string> = ["ffff"]

// 对象
interface ArrObj{
    name :string
    age : number
}

// 元祖 - 固定长数组 ， 解决多返回值
type tuple = [number, string]
let a : tuple = [123, "f"]

let [numInfo, strInfo] = a // 元祖自动化解构

let arrObjs : ArrObj[] = [{name:"ffff", age: 123}]

// todo 函数 - 在ts 中函数也是一个变量
// 声明式
function sun (x : number , y : number): number{
    return x+y
}
// 表达式式
let sumFunc : (x: number, y : number)=>number =function  (x : number , y : number): number{
    return x+y
}
// interface 中定义借口函数

interface SumInterface {
    (x : number, y : number) : number
}

// 函数中可选参数
function buildName(firstName : string , lastName? : string) : string{
    if(lastName){
        return firstName + ' '+ lastName
    }
    return firstName
}

// 函数参数默认值
function buildNameV2(firstName : string , lastName : string = "zhang") : string{
    return firstName + " " + lastName
}

// 剩余参数
function  push(arr:any[], ...item:any[]){
    item.forEach((value , index, arr )=>{
        arr.push(value)
    })
}
// todo 函数高级特性 ， 类型重定义
type AddType = string| number
function addV1(x : AddType, y : AddType) : AddType{
    if (typeof x =="string" && typeof y == "string"){
        return x+y // 这里会直接类型推导
    }
    x= Number(x)
    y = Number(y)
    return x+y
}

// todo 函数高级特性， 函数重载
// ts 的重载和其他语言不同， 因为本省变量就支持多种类型， 所以函数重载主要是为了约束返回值
// 不同的请求类型需要在函数内部识别差异 ，这么处理的考量可能是因为防止编译数据膨胀
type Types = string | number
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Semlinker', ' Kakuqo');
result.split(' ');

// todo void 这个变量主要是用来作为返回值的判空表示

// todo never 这个类型是ts 独有 ， 表示永远不存在的类型
// 1. 异常
function err (msg : string) : never{
    throw new Error("fff")
}
function loopForever(): never{
    while (true){}
}
// 2. ts有非常牛逼的类型检测能力使用never可以检测数据

type Foo = string | number;
function controlFlowAnalysisWithNever(foo : Foo){
    if (typeof foo === "string"){

    }else if (typeof foo === "number"){

    }else{
        // 做最后的类型check ，防止私有变量类型变多比如 : Foo 类型增加了 string| number | boolean ， 导致程序问题
        const check : never = foo
    }
}
// 补充一下 ts 类型推断

const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(num => num > 2) as number; // 这里单纯的写入是存在问题的， 需要使用as number 强制指定类型
// 尖括号 语法
let someValue1: any = "this is a string";
let strLength2: number = (<string>someValue1).length;

// as 语法
let someValue3: any = "this is a string";
let strLength4: number = (someValue3 as string).length;


// todo any 类型 ， any 是ts 中的顶级类型， 所有的类型都是any的子类型

// any 类型可以被任意的赋值
let bb = 555 // 强制类型转化
let cc; // 不指定类型默认any
let aa : any = 666
aa = `sfsadfasf`
aa = 123

// todo unknown 可以赋予任意类型 ， 但是unknown 不能付给除了 unknown 或者any的其他类型

// js 原始类型和ts 的兼容性
let  num1 : number = 123
let num2 : Number = 444
num2 = num1
// num1 = num2 ts 类型的权限更高 ， 只能用的ts类型优化原始类型


// todo object Object 和{}
// 1. object 代表所有非原始类型 ， 比如 也就是除了number string之类的

let item : object = {}

let itemV2 :Object
itemV2 = "fff"
itemV2 = 1234

