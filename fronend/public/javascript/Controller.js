$(function () {
    //刷新获取
    function  F5() {
        $.ajax({
            url:'http://localhost:3000/select1',
            type:'POST',
            success:function (data) {
                $('#t1').html('')
                for(i in data){
                    $('#t1').append(
                        '<tr>' +
                        '<td>'+data[i].id+'</td>' +
                        '<td><img src="'+data[i].img+'" alt="" class="simg"></td>' +
                        '<td>'+data[i].title+'</td>' +
                        '<td>'+data[i].detail+'</td>' +
                        '<td><button s="'+data[i].img2+'" id="'+data[i].id+'" class="delete">删除</button></td>' +
                        '</tr>'
                    )
                }
            }
        })
    }
    F5()
    function F6() {
        $.ajax({
            url:'http://localhost:3000/select2',
            type:'POST',
            success:function (data) {
                $('#t2').html('')
                for(i in data){
                    $('#t2').append(
                        '<tr>' +
                        '<td>'+data[i].id+'</td>' +
                        '<td>'+data[i].title+'</td>' +
                        '<td>'+data[i].detail+'</td>' +
                        '<td><button id="'+data[i].id+'" class="delete">删除</button></td>' +
                        '</tr>'
                    )
                }
            }
        })
    }
    function F7() {
        $.ajax({
            url:'http://localhost:3000/select3',
            type:'POST',
            success:function (data) {
                $('#t3').html('')
                for(i in data){
                    $('#t3').append(
                        '<tr>' +
                        '<td>'+data[i].id+'</td>' +
                        '<td>'+data[i].title+'</td>' +
                        '<td><img src="'+data[i].img+'" alt="" class="simg"></td>' +
                        '<td>'+data[i].teamtext+'</td>' +
                        '<td>'+data[i].detail+'</td>' +
                        '<td><button s="'+data[i].img2+'" id="'+data[i].id+'" class="delete">删除</button></td>' +
                        '</tr>'
                    )
                }
            }
        })
    }
    //点击切换刷新
    $('#a1').click(function () {
        F5()
    })
    $('#a2').click(function () {
        F6()
    })
    $('#a3').click(function () {
        F7()
    })
    // 图片上传框
    var Files=null
    var I=null
    var I2=null
    $('#file').change(function () {
        Files=$(this).prop('files')
    })
    $('#upload').click(function () {
        if(Files!==null){
            var fd=new FormData()
            for(i=0;i<Files.length;i++){
                fd.append('file',Files[i])
            }
            $.ajax({
                url:'http://localhost:3000/img',
                type:'POST',
                data:fd,
                contentType:false,
                processData:false,
                success:function (data) {
                    I='http://localhost:3000/'+data.a
                    I2=data.b
                    $('#img').attr('src','http://localhost:3000/'+data.a)
                }
            })
        }
    })
    //全局上传
    var Type=null
    var Teamtext=null
    $('.a').click(function () {
        Type=$(this).attr('attr')
    })
    $('.bianji').summernote()
    $('#add').click(function () {
        var Title=$('#title').val()
        var Content=$('#content').summernote('code')
        if($('#team').val()!==''){
            Teamtext=$('#team').val()
        }
        var files
        if(Title!==""&&Content!=='<p><br></p>'&&Type!==null){
            $.ajax({
                url:'http://localhost:3000/add',
                type:'POST',
                data:{
                    t:Title,
                    c:Content,
                    i:I,
                    i2:I2,
                    ty:Type,
                    team:Teamtext
                },
                success:function (data) {
                    window.location.reload()
                }
            })
        }
    })
    //删除数据
    $('#home').on('click','button',function () {
        var ID=$(this).attr('id')
        var Path=$(this).attr('s')
        console.log(Path)
        $.ajax({
            url:'http://localhost:3000/delete',
            type:'POST',
            data:{
                ID:ID,
                path:Path
            },
            success:function (data) {
                window.location.reload()
            }
        })
    })
    $('#profile').on('click','button',function () {
        var ID=$(this).attr('id')
        $.ajax({
            url:'http://localhost:3000/delete',
            type:'POST',
            data:{
                ID:ID,
            },
            success:function (data) {
                F6()
            }
        })
    })
    $('#messages').on('click','button',function () {
        var ID=$(this).attr('id')
        var Path=$(this).attr('s')
        console.log(Path)
        $.ajax({
            url:'http://localhost:3000/delete',
            type:'POST',
            data:{
                ID:ID,
                path:Path
            },
            success:function (data) {
                F7()
            }
        })
    })
})