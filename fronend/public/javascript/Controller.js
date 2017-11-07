$(function () {
    //刷新获取
    function  F5() {
        $.ajax({
            url:'http://localhost:3000/select',
            type:'POST',
            success:function (data) {
                $('#t').html('')
                for(i in data){
                    $('#t').append(
                        '<tr>' +
                        '<td>'+data[i].id+'</td>' +
                        '<td><img src="'+data[i].img+'" alt="" class="simg"></td>' +
                        '<td>'+data[i].title+'</td>' +
                        '<td>'+data[i].detail+'</td>' +
                        '<td><button id="'+data[i].id+'">删除</button></td>' +
                        '</tr>'
                    )
                }
            }
        })
    }
    F5()
    // 图片上传框
    var Files=null
    var I=null
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
                    I='http://localhost:3000/'+data
                    $('#img').attr('src','http://localhost:3000/'+data)
                }
            })
        }
    })
    //全局上传
    var Type=null
    $('.a').click(function () {
        Type=$(this).attr('attr')
    })
    $('.bianji').summernote()
    $('#add').click(function () {
        var Title=$('#title').val()
        var Content=$('#content').summernote('code')
        var files
        if(Title!==""&&Content!=='<p><br></p>'){
            $.ajax({
                url:'http://localhost:3000/add',
                type:'POST',
                data:{
                    t:Title,
                    c:Content,
                    i:I,
                    ty:Type
                },
                success:function (data) {
                    window.location.reload()
                }
            })
        }
    })
})