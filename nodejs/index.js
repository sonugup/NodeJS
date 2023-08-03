const http=require("http")


const sever=http.createServer( (req,res) => {
    if(req.url=="/"){
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
