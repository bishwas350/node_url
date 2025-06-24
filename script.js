// const { log } = require("console")
// const url = require("url")
// const browserUrl =`https://nodejs.com/search?q=job done now go to home`
// log(url.parse(browserUrl))

// const { URL } = require("url");
// const myurl = new URL("https://example.org:8080/p/a/t/h?query=string&age=20#hash");
// console.log(myurl.searchParams.get("query"));
// myurl.searchParams.append("amm ","ami bari jabo")
// console.log(myurl)
// myurl.searchParams.delete('age')
// console.log(myurl.toString());

const fs = require("fs")
const http = require("http");
const url = require("url");
const event = require("events");
const eventEmitter = new event();
eventEmitter.on("fetchData",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
       return res.json()
    })
    .then((bye)=>{
        console.log(bye);
        fs.writeFile("data.txt",JSON.stringify(bye), (err)=>{
            if (err){
                console.log(`error from write file ${err}`);
                
            }
        })
    })
    
})
const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  console.log(parseUrl.pathname);
  const { pathname } = parseUrl;
  if (pathname == "/bye") {
    eventEmitter.emit("fetchData")
    fs.readFile("data.txt","utf-8",(err,bye)=>{
        console.log(bye);
        res.end(bye)
    })
  }
  if (pathname == "/post") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("done");
  }
});
server.listen(4000, () => {
  console.log(`http://localhost:${4000}`);
});
