
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
