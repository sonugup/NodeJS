const http=require("http")


const sever=http.createServer( (req,res) => {
    if(req.url=="/"){
        res.end("welcome")
    }else{
        res.end("try again")
    }
})


sever.listen(2300, () => {
    console.log("happy")
})
