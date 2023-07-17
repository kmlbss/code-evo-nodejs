const path= require('node:path') // node: prefix is optional
//
// console.log(__dirname)
// console.log(__filename)
//
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
//
// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))
//
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__filename))


// console.log(path.join('folder1','folder2','index.html'))
// console.log(path.join(__dirname,'index.html'))
// check the differences between join and resolve method


function greet(name){
    console.log(`hello ${name}`)
}

function greetKml(){
    const name='kml'
    greet(name)
}
// greetKml is  a higher order function which accepts a function as an argument

function higherOrderFunction(callback){
    const name='kml'
    callback(name)
}

greetKml(greet)