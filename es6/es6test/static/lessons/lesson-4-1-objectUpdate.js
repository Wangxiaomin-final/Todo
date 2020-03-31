// //es5 
// let x = 1; let y = 2; let z = 3;
// let obj = { x: x, y: y }
// obj[z] = 5

// // es6 
// let obj1 = {
//     x,
//     y,
//     [z + y]: 6,
//     hello() { console.log('hello') }
// }
// obj1.hello()

// new s = new Set()
// let s = new Set()
// s.add('hello')

// let s = new Set()
// s.add('hello').add('goodbye')
// s.delete('hello')
// s.clear()
//
// s.has('hello')
// s.size
// s.keys(); s.values();
// s.entries()
// s.forEach(item => {
//     console.log(item)
// },

// for (let item of s) {
//     console.log(item)
// }


// //let map = new Map([[1, 2], [3, 4]])//可遍历对象 key value
// let map = new Map()
// map.set(1, 2)
// map.set(3, 4)
// map.set(5, 6)
// // map.delete(1)
// // map.clear()
// // map.size
// // map.has(1)
// // map.get(1)
// // map.keys()
// // map.values()
// // map.entries()
// map.forEach((value, key) => {
//     console.log(value, key)
// })
// for (let [key, value] of map) {
//     console.log(key, value)
// }

const target = {
    a: {
        b: {
            c:
                { d: 9 }
        },
        e: 5,
        f: 6,
        h: 10
    }
}

const source = {
    a: {
        b: {
            c:
                { d: 1 }
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
