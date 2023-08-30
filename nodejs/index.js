const http = require("http");
const fs = require("fs");

const sever = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.writeFile("tesk.txt", "welcome to node js");
    // fs.appendFile("tesk.txt", "Hi I am Sonu Gupta")
    res.setHeader("Content-Type", "text/html");
    res.end(` <h1>welcome</h1>`);
  } else if (req.url == "/test") {
    const readf = fs.readFile("tesk.txt", "utf-8");
    console.log(readf);

    res.end("welcome to test page");
  } else {
    res.end("try again");
  }
});

sever.listen(2300, () => {
  console.log("happy");
});



