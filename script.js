// const { log } = require("console")
// const url = require("url")
// const browserUrl =`https://nodejs.com/search?q=job done now go to home`
// log(url.parse(browserUrl))

const { URL } = require("url");
const myurl = new URL("https://example.org:8080/p/a/t/h?query=string#hash");
console.log(myurl.searchParams.get("query"));
myurl.searchParams.append("amm ","ami bari jabo")
console.log(myurl)