
// 基本类型
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


// 其他类型

let arrStr : string[] = ["123","sdfsfdsf"]
let arrStrAndNum :(string|number)[] =["123",123]
let arrNewStr : Array<string> = ["ffff"]

interface ArrObj{
    name :string
    age : number
}

let arrObjs : ArrObj[] = [{name:"ffff", age: 123}]

// 函数

