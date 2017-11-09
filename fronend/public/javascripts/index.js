/**
 * Created by user on 2017/11/7.
 */
//$(function(){
//    $('.item').height($(window).height())
//})
window.onload=function(){
    var iTem=document.querySelectorAll('.item');
    var iTox=document.querySelector('.carousel');
    var iTim=document.querySelectorAll('.item img');
    var iTob=document.querySelector('.carousel-inner');
    var xsb=document.querySelector('.xsb');
    var xb=document.querySelector('.xb');
    iTob.style.height=document.documentElement.clientHeight+'px';
    iTox.style.height=document.documentElement.clientHeight+'px';
    xsb.style.height=document.documentElement.clientHeight+'px';
    xb.style.height=document.documentElement.clientHeight+'px';

    for(var i=0;i<iTem.length;i++){
        iTem[i].style.height=document.documentElement.clientHeight+'px';
        iTim[i].style.height=document.documentElement.clientHeight+'px';
    }

    $(function(){

        var  n=0;
        var w = 1170
//            下一个
        $('.td-xi').click(function(){
            n++
            if(n==2){
                n=0;
            }
            $('.ull').animate({
                "left":-w * n+'px'
            },500)
        })

            //上一个
        $('.td-sh').click(function(){
            n--
            if(n==-1){
                n=1;
            }
            $('.ull').animate({
                "left":-w * n+'px'
            },500)

        })


        //选项卡
        $('.zhs-da li').click(function(){
            var _this=$(this).index()
            $('.zhs-da li ').removeClass('yan').eq($(this).index()).addClass('yan') ;
            $('.zhs-da dl dd').animate({
                'left':'50px',
                'opacity':'0'
            },300,function(){
                $('.zhs-da dl dd').hide().eq(_this).animate({
                    'left':'30px',
                    'opacity':'1'
                },300).show()
            })

        })
    })

    //----------------
    function  F5() {
        //轮播图刷新
        $.ajax({
            url:'http://localhost:3000/select1',
            type:'POST',
            success:function (data) {
                $('#lunbo').append('<div class="item active">\n' +
                    '<img src="'+data[0].img+'" alt="...">\n' +
                    '<div class="carousel-caption">' +
                    '<h1>'+data[0].title+'</h1>' +
                    '<h3>'+data[0].detail+'</h3>' +
                    '<div class="xia glyphicon glyphicon-menu-down"></div>' +
                    '</div>' +
                    '</div>')
                $('#dian').append('<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>')
                for(i=1;i<data.length;i++){
                    $('#lunbo').append('<div class="item">' +
                        '<img src="'+data[i].img+'">' +
                        '<div class="carousel-caption">' +
                        '<h1>'+data[i].title+'</h1>' +
                        '<h3>'+data[i].detail+'</h3>' +
                        '<div class="xia glyphicon glyphicon-menu-down"></div>' +
                        '</div>' +
                        '</div>'
                    )
                }
                for(i=1;i<data.length;i++){
                    $('#dian').append('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>')
                }
            }
        })
    }
    F5()
    //模板功能刷新
    $.ajax({
        url:'http://localhost:3000/select2',
        type:'POST',
        success:function (data) {
            for(i in data){
                $('#moban').children('div').eq(i).append('<h4>'+data[i].title+'</h4><h5>'+data[i].detail+'</h5>')
            }
        }
    })

//我们的团队
    $.ajax({
        url:'http://localhost:3000/select3',
        type:'POST',
        success:function (data) {
            for(i in data){
                $('.td_tu').eq(i).append('' +
                    '<img src="'+data[i].img+'" alt="">' +
                    '<h4>'+data[i].title+'</h4>' +
                    '<h5>'+data[i].teamtext+'</h5>' +
                    '<p>'+data[i].detail+'</p>')
            }
        }
    })


    //项目展示
    $.ajax({
        url:'http://localhost:3000/select4',
        type:'POST',
        success:function (data) {
            for(i in data){
                $('.zhs-da dl dd a').eq(i).append('' +
                    '<img src="'+data[i].img+'" alt="">')
            }
        }
    })

    //我们的服务
    $.ajax({
        url:'http://localhost:3000/select5',
        type:'POST',
        success:function (data) {
            for(i in data){
                $('.fu_s_yi').eq(i).append('' +
                    '<h3>'+data[i].title+'</h3>' +
                    '<p>'+data[i].detail+'</p>'

                )
            }
        }
    })













}






