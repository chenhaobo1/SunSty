//导出一个函数app，函数接收一个app对象
module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    // const req.Model = require('../../models/req.Model')

    // 新建分类
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    // 修改编辑分类
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)  //通过id查找更新body
        res.send(model)
    })

    // 删除接口
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)  //通过id查找更新body
        res.send({
            success: true
        })
    })

    //分类列表查询
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)  //populate:关联取出
        res.send(items)
    })

    //进入编辑分类
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        // return res.send({modelName})
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const multer = require('multer')
    // __dirname绝对地址
    const upload = multer({ dest: __dirname + '../../../uploads' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}
