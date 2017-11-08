/**
 * Created by user on 2017/11/7.
 */
//$(function(){
//    $('.item').height($(window).height())
//})
window.onload=function(){
    var iTem=document.querySelectorAll('.item')
    for(var i=0;i<iTem.length;i++){
        iTem[i].style.height=document.documentElement.clientHeight+'px';
    }
    function  F5() {
        $.ajax({
            url:'http://localhost:3000/select1',
            type:'POST',
            success:function (data) {
                console.log(data)
                $('#lunbo').append('<div class="item active">\n' +
                    '<img src="'+data[0].img+'" alt="...">\n' +
                    '<div class="carousel-caption">' +
                    '<h1>'+data[0].title+'</h1>' +
                    '<h3>'+data[0].detail+'</h3>' +
                    '<div class="xia"></div>' +
                    '</div>' +
                    '</div>')
                for(i=1;i<data.length;i++){
                    $('#lunbo').append('<div class="item">' +
                        '<img src="'+data[i].img+'">' +
                        '<div class="carousel-caption">' +
                        '<h1>'+data[i].title+'</h1>' +
                        '<h3>'+data[i].detail+'</h3>' +
                        '<div class="xia"></div>' +
                        '</div>' +
                        '</div>'
                    )
                }
                for(i=0;i<data.length;i++){
                    $('#dian').append('<li data-target="#carousel-example-generic" ></li>')
                }
            }
        })
    }
    F5()
}




