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
router.post('/select', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query('SELECT * FROM list',function (err, rows, fields) {
      console.log(rows)
      res.send(rows)
    })
});

router.post('/add', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var T=req.body.t
    var C=req.body.c
    var I=req.body.i
    var Ty=req.body.ty
    console.log(T,C,I)
    connection.query(`INSERT INTO list (title,detail,img,type) VALUES('${T}','${C}','${I}','${Ty}')`,function (err, rows, fields) {
        res.send('上传成功')
    })
});
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
            res.send('images/'+fName)
        }
    })
})
module.exports = router;
