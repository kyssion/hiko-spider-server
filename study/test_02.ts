// todo 非空断言特性  ts 的 x! 语法会排除所有的underfind和 null
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok

let x! : number // 明确赋值断言 ， 这里可以告诉编译器这里会被明确的断言
console.log(2*x)

