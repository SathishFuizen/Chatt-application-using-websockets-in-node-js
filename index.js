const express=require("express")
const http=require("http")
const app=express()
const path=require("path")
const {Server}=require("socket.io")

const server=http.createServer(app)
const io=new Server(server)
app.use(express.static(path.resolve("./public")))



app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

io.on('connection', (socket) => {
    socket.on("user-message",(mess)=>{
        io.emit("message",mess)
    })
  });

server.listen(9000,()=>{
    console.log("server is running on 9000")
})