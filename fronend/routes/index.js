var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var fs=require('fs')
var formidable=require('formidable')
var connection=mysql.createPool({
    host:"localhost",
    user:'root',
    password:'zcx1812281',
    database:'test',
})

/* GET home page. */
//轮播图接口
router.post('/select1', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='l'`,function (err, rows, fields) {
      console.log(rows)
      res.send(rows)
    })
});
//添加接口
router.post('/add', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var T=req.body.t
    var C=req.body.c
    var I=req.body.i
    var Ty=req.body.ty
    var I2=req.body.i2
    console.log(T,C,I)
    connection.query(`INSERT INTO list (title,detail,img,type,img2) VALUES('${T}','${C}','${I}','${Ty}','${I2}')`,function (err, rows, fields) {
        res.send('上传成功')
    })
});
//图片接口
router.post('/img',function (req,res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var form=new formidable()
    form.uploadDir='public/images'
    form.parse(req,function (err, fields, files) {
        for(i in files){
            var file=files[i]
            var fName=new Date().getTime()
            switch(file.type){
                case 'image/jpeg':
                  fName+='.jpg';
                  break
                case 'image/png':
                    fName+='.png';
                    break
                case 'image/gif':
                    fName+='.gif';
                    break
            }
            var newPath='public/images/'+fName
            fs.renameSync(file.path,newPath)
            res.send({
                a:'images/'+fName,
                b:newPath
            })
        }
    })
})
//删除接口
router.post('/delete', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var id=req.body.ID
    var path=req.body.path
    connection.query(`DELETE FROM list WHERE id=${id}`,function (err, rows, fields) {
        fs.unlink(`${path}`,function () {
            res.send('删除成功')
        })
    })
});
module.exports = router;
