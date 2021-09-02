var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


setTimeout(function(){
    $('#mouse-one').remove();
}, 31000);

setTimeout(function(){
    $('#mouse-two').remove();
}, 11400);