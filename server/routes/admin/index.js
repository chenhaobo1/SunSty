//导出一个函数app，函数接收一个app对象
module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/category')
    router.post('/categories',async(req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })
    app.use('/admin/api',router)
}
