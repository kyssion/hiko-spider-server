let a = 0
new Promise((resolve, reject) => {
    setTimeout(() => {a = 1
        resolve(a)
    }, 1000)
}).then((res) => {
    return new Promise((resolve, reject) => {
        resolve(res)
    })
    //等同于
    //return Promise.resolve(res)
    //等同于
    //return res
}).then((res) => {
    console.log(res) //1
}).catch(() => {
})
