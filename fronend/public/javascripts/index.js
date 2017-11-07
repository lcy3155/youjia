/**
 * Created by user on 2017/11/7.
 */
//$(function(){
//    $('.item').height($(window).height())
//})
window.onload=function(){

    var iTem=document.querySelectorAll('.item')
     console.log(iTem)
    console.log(document.documentElement.clientHeight)
    for(var i=0;i<iTem.length;i++){
        iTem[i].style.height=document.documentElement.clientHeight+'px';
    }

}





