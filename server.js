const express  = require("express")
const app = express()
const cors = require("cors")


const PORT = 4000

app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.sendFile('index.html')
})

app.listen(PORT,()=>{
    console.log(`connected to the server on PORT ${PORT}`)
})