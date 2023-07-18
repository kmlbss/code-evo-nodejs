// const EventEmitter = require('node:events')
const zlib=require('node:zlib')

const gzip=zlib.createGzip()
//
// const emitter=new EventEmitter()
//
// emitter.on('order-pizza',(size,topping)=>{
//     console.log(`order received! baking a ${size} pizza with ${topping}`)
// })
//
// emitter.on('order-pizza',(size)=>{
//     if (size==='large'){
//         console.log("serving a drink")
//     }
// })
//
// emitter.emit('order-pizza','large','mushroom')

//buffers
const buffer = new Buffer.from("Kamala");
//
// buffer.write('Code')
// console.log(buffer.toJSON())
// console.log(buffer)
// console.log(buffer.toString())

//fs module(file-system)
const fs = require("fs");
//fs module internally uses the buffer
// const fileContents=fs.readFileSync('./file.txt', 'utf-8')
// console.log(fileContents)

//reading file asynchronously
// fs.readFile('./file.txt','utf-8',(error,data)=>{
//     if(error)
//         console.log(error)
//     else {
//         console.log(data)
//     }
// })

// fs.writeFileSync('./greet.txt','hello world')

//promises

// const fs = require("node:fs/promises");
//
// async function readFile() {
//   try {
//     const data = await fs.readFile("./file.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
//
// readFile()

// fs.readFile('./file.txt','utf-8')
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

//streams
// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream("./file2.txt")

//
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

//pipes
const readableStream = fs.createReadStream("./file.txt", {
 encoding: "utf-8",
 highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.pipe(writeableStream)

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

