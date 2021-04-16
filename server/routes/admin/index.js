//导出一个函数app，函数接收一个app对象
module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/category')

    // 新建分类
    router.post('/categories',async(req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    // 修改编辑分类
    router.put('/categories/:id',async(req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)  //通过id查找更新body
        res.send(model)
    })

    // 删除接口
    router.delete('/categories/:id',async(req,res)=>{
        await Category.findByIdAndDelete(req.params.id,req.body)  //通过id查找更新body
        res.send({
            success:true
        })
    })

    //分类列表查询
    router.get('/categories',async(req,res)=>{
        const items = await Category.find().limit(10)
        res.send(items)
    })

    //进入编辑分类
    router.get('/categories/:id',async(req,res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    app.use('/admin/api',router)
}
