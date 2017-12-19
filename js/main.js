/*function showMenu() {
  $("#MenuMaster").fadeToggle(200);
  $("#projectDetail").fadeToggle(200);
};*/

const tilt = $('.js-tilt').tilt();

$('.tilt').tilt({
    scale: 0.96
})

$(function() {
    $("#slides").slidesjs({
        width: 700,
        height: 700,

        play: {
            active: true,
            effect: "slide",
            interval: 4500,
            auto: true,
        },
        effect: {
            slide: {
                speed: 500,
            },
        },
    });
});


$("#slideShow").click(function() {
    $('.unBlur').toggleClass('unBlur-active');
    console.log("Slideshow activated");
    $(".page").fadeToggle(200);
    $("#slideClose").fadeToggle(200);


});

$("#slideClose").click(function() {
    console.log("Slideshow deactivated");
    $(".page").fadeToggle(200);
    $("#slideClose").fadeToggle(200);
    $('.unBlur').toggleClass('unBlur-active');
});

$("#hPic1").click(function() {
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
});

$("#hPic2").click(function() {
    $('html, body').animate({
        scrollTop: $("#P2").offset().top
    }, 500);
});