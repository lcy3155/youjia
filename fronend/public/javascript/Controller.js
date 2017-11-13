$(function () {
    //刷新获取
    //轮播图
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
    //模板功能
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
    //团队
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
                        '<td><img src="'+data[i].img+'" alt="" class="simg"></td>' +
                        '<td>'+data[i].title+'</td>' +
                        '<td>'+data[i].teamtext+'</td>' +
                        '<td>'+data[i].detail+'</td>' +
                        '<td><button s="'+data[i].img2+'" id="'+data[i].id+'" class="delete">删除</button></td>' +
                        '</tr>'
                    )
                }
            }
        })
    }
    //项目展示
    function F8() {
        $.ajax({
            url:'http://localhost:3000/select4',
            type:'POST',
            success:function (data) {
                $('#t4').html('')
                for(i in data){
                    $('#t4').append(
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
    //服务
    function F9() {
        $.ajax({
            url:'http://localhost:3000/select5',
            type:'POST',
            success:function (data) {
                $('#t5').html('')
                for(i in data){
                    $('#t5').append(
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
    //评价
    function F10() {
        $.ajax({
            url:'http://localhost:3000/select6',
            type:'POST',
            success:function (data) {
                $('#t6').html('')
                for(i in data){
                    $('#t6').append(
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
    $('#a4').click(function () {
        F8()
    })
    $('#a5').click(function () {
        F9()
    })
    $('#a6').click(function () {
        F10()
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
                    alert(I)
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
        console.log(Type)
    })
    $('.bianji').summernote()
    $('#add').click(function () {
        var Title=$('#title').val()
        var Content=$('#content').summernote('code')
        if($('#team').val()!==''){
            Teamtext=$('#team').val()
        }
        if(Type==null){
            alert('请选择提交类型')
        }
        var files
        if(Type!=='x'){
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
        }else{
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
    //更新
    $('#update').click(function () {
        var Id=$('#id').val()
        var Title=$('#title').val()
        var Content=$('#content').summernote('code')
        if($('#team').val()!==''){
            Teamtext=$('#team').val()
        }
        if(Id==''){
            alert('更改时ID不能为空')
        }
        var files
        if(Title!==""&&Content!=='<p><br></p>'&&Id!==''){
            $.ajax({
                url:'http://localhost:3000/update',
                type:'POST',
                data:{
                    id:Id,
                    t:Title,
                    c:Content,
                    i:I,
                    i2:I2,
                    team:Teamtext
                },
                success:function (data) {
                    window.location.reload()
                }
            })
        }
    })
    //删除数据
    //轮播图删除
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
    //模板功能删除
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
    //团队删除
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
    //项目展示删除
    $('#settings').on('click','button',function () {
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
                F8()
            }
        })
    })
    //服务删除
    $('#service').on('click','button',function () {
        var ID=$(this).attr('id')
        $.ajax({
            url:'http://localhost:3000/delete',
            type:'POST',
            data:{
                ID:ID,
            },
            success:function (data) {
                F9()
            }
        })
    })
    //评价删除
    $('#pingjia').on('click','button',function () {
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
                F10()
            }
        })
    })

    //自动获取
    $('#id').change(function () {
        var ID=$(this).val()
        if($(this).val()!==''){
            $.ajax({
                url:'http://localhost:3000/select',
                type:'POST',
                data:{
                    ID:ID
                },
                success:function (data) {
                    if(data==''){
                        alert('输入id错误，没有此条数据，请检查')
                    }else{
                        console.log(data)
                        $('#title').val(data[0].title)
                        $('#content').summernote('code',data[0].detail)
                        $('#img').attr('src',data[0].img)
                    }
                }
            })
        }

    })
})