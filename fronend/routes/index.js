var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var fs=require('fs')
var formidable=require('formidable')
var connection=require('./../root.js')

/* GET home page. */
//查询接口
router.post('/select', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    var id=req.body.ID
    console.log(id)
    connection.query(`SELECT * FROM list WHERE id='${id}'`,function (err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    })
});
//轮播图接口
router.post('/select1', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='l'`,function (err, rows, fields) {
        if(err) throw err;
      res.send(rows)
    })
});
//模板功能接口
router.post('/select2', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='m'`,function (err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    })
});
//团队接口
router.post('/select3', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='t'`,function (err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    })
});
//项目展示接口
router.post('/select4', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='x'`,function (err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    })
});
//服务接口
router.post('/select5', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='f'`,function (err, rows, fields) {
        if(err) throw err;
        res.send(rows)
    })
});
//评价接口
router.post('/select6', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    connection.query(`SELECT * FROM list WHERE type='p'`,function (err, rows, fields) {
        if(err) throw err;
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
    var Team=req.body.team
    connection.query(`INSERT INTO list (title,detail,img,type,img2,teamtext) VALUES('${T}','${C}','${I}','${Ty}','${I2}','${Team}')`,function (err, rows, fields) {
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
       if(path){
           fs.unlink(`${path}`,function () {
               res.send('删除成功')
           })
       }else{
           res.send('删除成功')
       }

    })
});
//更新接口
router.post('/update', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var Id=req.body.id
    var T=req.body.t
    var C=req.body.c
    var I=req.body.i
    var I2=req.body.i2
    var Team=req.body.team
    connection.query(`UPDATE list SET title='${T}',detail='${C}',img='${I}',img2='${I2}',teamtext='${Team}' WHERE id=${Id}`,function (err, rows, fields) {
        res.send('更改成功')
    })
});
module.exports = router;