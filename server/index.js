const express = require('express')

const app = express()    //定义app是express的一个实例

app.use(require('cors')())
app.use(express.json())

require('./routes/admin')(app)   //引用admin中的index文件
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})