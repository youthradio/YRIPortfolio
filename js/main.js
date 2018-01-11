/*function showMenu() {
  $("#MenuMaster").fadeToggle(200);
  $("#projectDetail").fadeToggle(200);
};*/

Object.values(projectTiles);
Object.values(projectDescriptions);

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
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P1);
    $("#P1Title").text(projectTiles.P1);
    $("#P1Desc").text(projectDescriptions.P1);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#hPic2").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P2);
    $("#P1Title").text(projectTiles.P2);
    $("#P1Desc").text(projectDescriptions.P2);
});

$("#hPic3").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P3);
    $("#P1Title").text(projectTiles.P3);
    $("#P1Desc").text(projectDescriptions.P3);
});

$("#hPic4").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P4);
    $("#P1Title").text(projectTiles.P4);
    $("#P1Desc").text(projectDescriptions.P4);
});

$("#hPic5").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P5);
    $("#P1Title").text(projectTiles.P5);
    $("#P1Desc").text(projectDescriptions.P5);
});

$("#hPic6").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P6);
    $("#P1Title").text(projectTiles.P6);
    $("#P1Desc").text(projectDescriptions.P6);
});

$("#hPic7").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P7);
    $("#P1Title").text(projectTiles.P7);
    $("#P1Desc").text(projectDescriptions.P7);
});



$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 400) {
        $("#navContent").fadeIn(200).css("display","flex");
    }

    if (height  < 400) {
        $("#navContent").fadeOut(200);
    }
});

$("#ugh").click(function() {
    $("#navContent").fadeToggle(200);
    $("#mobileToggle").fadeToggle(200);
});