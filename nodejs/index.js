const http=require("http")
const fs=require("fs")


const sever=http.createServer( (req,res) => {
    if(req.url=="/"){
        fs.readFileSync("/test.txt", "welcome to node js")
        res.end("welcome")
    }
    else if(req.url=="/test"){
        res.end("welcome to test page")
    }
     else{
        res.end("try again")
    }
})


sever.listen(2300, () => {
    console.log("happy")
})
