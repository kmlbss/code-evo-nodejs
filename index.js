const http = require("node:http");
const fs = require("node:fs");
// const server = http.createServer((req, res) => {
//   res.writeHead(200,{"Content-type":"text/plain"});
//   res.end("hellp world");
// });
//
// server.listen(3000, () => {
//   console.log("server running on port 3000 ");
// });

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Kamala",
    lastName: "Shamilova",
  };
  const name="Kamala"
  res.writeHead(200, { "Content-type": "text/html" });
  // fs.createReadStream(__dirname + '/index.html').pipe(res) //more advanced way of reading file
  let html = fs.readFileSync("./index.html", "utf-8");
  html=html.replace('{{name}}',name)
  res.end(html);
});

server.listen(3000, () => {
  console.log("server running on port 3000 ");
});
