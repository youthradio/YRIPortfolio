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
    console.log("Slideshow activated");
    $(".page").fadeToggle(200);
    $("#slideClose").fadeToggle(200);

});

$("#slideClose").click(function() {
    console.log("Slideshow deactivated");
    $(".page").fadeToggle(200);
    $("#slideClose").fadeToggle(200);
});