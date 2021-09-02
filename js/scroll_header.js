
// Funcrion on.scrollTop addClass for change background //

$(window).on("scroll",function(){
    $(window).scrollTop()?$("header").addClass("change-bg"):
    $("header").removeClass("change-bg")
});

//////////////////////////////////////////////////////////








// $(document).ready(function(){
//     $("#burger").on("click",function(){
//         $(".overlay").addClass("visible"),
//         $(".side-menu").addClass("visible"),
//         $("body").css("overflow","hidden")}),
//         $(".overlay").on("click",
//         function(){
//             $(".overlay").removeClass("visible"),
//             $(".side-menu").removeClass("visible"),
//             $("body").css("overflow","auto")}),
//             $("#close-button").on("click",
//         function(){
//                 $(".overlay").removeClass("visible"),
//                 $(".side-menu").removeClass("visible"),
//                 $("body").css("overflow","auto")}),
//                 $(".video-carousel").owlCarousel({loop:!0,margin:20,nav:!0,autoWidth:!0,center:!0,items:3,dots:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:3}}}),
//                 $(".learn-carousel").owlCarousel({loop:!0,autoplay:!0,margin:0,autoWidth:!0,nav:!1,dots:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),
//                 $(window).scroll(function(){800<=$(window).scrollTop()?$("header").addClass("scrolled"):$("header").removeClass("scrolled")})}),
//                 $(document).ready(function(){
//                     $(".language").click(function(){
//                         $(".language").toggleClass("active"),
//                         $(".en").toggleClass("active"),
//                         $(".ru").toggleClass("active"),
//                         $(".jobs-creator-en").toggleClass("active"),
//                         $(".jobs-creator-ru").toggleClass("active"),
//                         $(".text-en").toggleClass("active"),
//                         $(".text-ru").toggleClass("active"),
//                         $(".box-text-en").toggleClass("active"),
//                         $(".box-text-ru").toggleClass("active"),
//                         $(".box-card-child-first-en").toggleClass("active"),
//                         $(".box-card-child-second-en").toggleClass("active"),
//                         $(".box-card-child-first-ru").toggleClass("active"),
//                         $(".box-card-child-second-ru").toggleClass("active"),
//                         $(".skills-en").toggleClass("active"),
//                         $(".skills-ru").toggleClass("active"),
//                         $(".block-en").toggleClass("active"),
//                         $(".block-ru").toggleClass("active"),
//                         $(".section-inner-en").toggleClass("active"),
//                         $(".section-inner-ru").toggleClass("active")})}),
                
// $(document).ready(function(){
//     $(".menu-toggle").click(function(){
//         $(".menu-toggle").toggleClass("active"),
//         $(".menu-bar").toggleClass("active"),
//         $(".header").toggleClass("active"),
//         $(".scroll-up").toggleClass("active")})}),
//         $(window).on("scroll",function(){
//             $(window).scrollTop()?$("header").addClass("black"):
//             $("header").removeClass("black")}),
//             $(window).on("scroll",function(){
//                 $(window).scrollTop()?$(".scroll-up").addClass("block"):$(".scroll-up").removeClass("block")});