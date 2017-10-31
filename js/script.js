$(document).ready(function(){
setTimeout("animation()",1000);
});
function animation(){
nuage1();
nuage2();
nuage3();
nuage4();
}
function nuage1(){
$("#nuage1").animate({left:"2500px"},150000).animate({left:"-200px"},0)
setTimeout("nuage1()",1000);
}
function nuage2(){
$("#nuage2").animate({left:"2500px"},40000).animate({left:"-200px"},0)
setTimeout("nuage2()",1000);
}
function nuage3(){
$("#nuage3").animate({left:"2500px"},120000).animate({left:"-200px"},0)
setTimeout("nuage3()",1000);
}function nuage4(){
$("#nuage4").animate({left:"2500px"},75000).animate({left:"-200px"},0)
setTimeout("nuage4()",1000);
}