const path = require('path')
const  express = require('express')
const port = process.env.PORT || 1000
const body_parser = require('body-parser')
const app = express()




app.use(express.static(__dirname))
//app.use(body_parser.urlencode)


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(port, (err)=>{
    if(err) throw err
    console.log(`server running at port ${port}`)
})