const express = require('express')

const app = express()    //定义app是express的一个实例

require('./routes/admin')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})