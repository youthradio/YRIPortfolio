/*function showMenu() {
  $("#MenuMaster").fadeToggle(200);
  $("#projectDetail").fadeToggle(200);
};*/

Object.values(projectTiles);
Object.values(projectDescriptions);
Object.values(p1Credits);

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
    $("#P1Credit1").text(p1Credits.Name1);
    $("#P1Credit2").text(p1Credits.Name2);
    $("#P1Credit3").text(p1Credits.Name3);
    $("#P1Credit4").text(p1Credits.Name4);
    $("#P1Credit5").text(p1Credits.Name5);
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
    $("#P1Credit1").text(p2Credits.Name1);
    $("#P1Credit2").text(p2Credits.Name2);
    $("#P1Credit3").text(p2Credits.Name3);
    $("#P1Credit4").text(p2Credits.Name4);
    $("#P1Credit5").text(p2Credits.Name5);
});

$("#hPic3").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P3);
    $("#P1Title").text(projectTiles.P3);
    $("#P1Desc").text(projectDescriptions.P3);
    $("#P1Credit1").text(p3Credits.Name1);
    $("#P1Credit2").text(p3Credits.Name2);
    $("#P1Credit3").text(p3Credits.Name3);
    $("#P1Credit4").text(p3Credits.Name4);
    $("#P1Credit5").text(p3Credits.Name5);
});

$("#hPic4").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P4);
    $("#P1Title").text(projectTiles.P4);
    $("#P1Desc").text(projectDescriptions.P4);
    $("#P1Credit1").text(p4Credits.Name1);
    $("#P1Credit2").text(p4Credits.Name2);
    $("#P1Credit3").text(p4Credits.Name3);
    $("#P1Credit4").text(p4Credits.Name4);
    $("#P1Credit5").text(p4Credits.Name5);
});

$("#hPic5").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P5);
    $("#P1Title").text(projectTiles.P5);
    $("#P1Desc").text(projectDescriptions.P5);
    $("#P1Credit1").text(p5Credits.Name1);
    $("#P1Credit2").text(p5Credits.Name2);
    $("#P1Credit3").text(p5Credits.Name3);
    $("#P1Credit4").text(p5Credits.Name4);
    $("#P1Credit5").text(p5Credits.Name5);
});

$("#hPic6").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P6);
    $("#P1Title").text(projectTiles.P6);
    $("#P1Desc").text(projectDescriptions.P6);
    $("#P1Credit1").text(p6Credits.Name1);
    $("#P1Credit2").text(p6Credits.Name2);
    $("#P1Credit3").text(p6Credits.Name3);
    $("#P1Credit4").text(p6Credits.Name4);
    $("#P1Credit5").text(p6Credits.Name5);
});

$("#hPic7").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P7);
    $("#P1Title").text(projectTiles.P7);
    $("#P1Desc").text(projectDescriptions.P7);
    $("#P1Credit1").text(p7Credits.Name1);
    $("#P1Credit2").text(p7Credits.Name2);
    $("#P1Credit3").text(p7Credits.Name3);
    $("#P1Credit4").text(p7Credits.Name4);
    $("#P1Credit5").text(p7Credits.Name5);
});

$("#hPic8").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P8);
    $("#P1Title").text(projectTiles.P8);
    $("#P1Desc").text(projectDescriptions.P8);
    $("#P1Credit1").text(p8Credits.Name1);
    $("#P1Credit2").text(p8Credits.Name2);
    $("#P1Credit3").text(p8Credits.Name3);
    $("#P1Credit4").text(p8Credits.Name4);
    $("#P1Credit5").text(p8Credits.Name5);
});

$("#hPic9").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P9);
    $("#P1Title").text(projectTiles.P9);
    $("#P1Desc").text(projectDescriptions.P9);
    $("#P1Credit1").text(p9Credits.Name1);
    $("#P1Credit2").text(p9Credits.Name2);
    $("#P1Credit3").text(p9Credits.Name3);
    $("#P1Credit4").text(p9Credits.Name4);
    $("#P1Credit5").text(p9Credits.Name5);
});

$("#navHPic1").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P1);
    $("#P1Title").text(projectTiles.P1);
    $("#P1Desc").text(projectDescriptions.P1);
    document.getElementById("P1Link").href = "http://google.com";
    $("#P1Credit1").text(p1Credits.Name1);
    $("#P1Credit2").text(p1Credits.Name2);
    $("#P1Credit3").text(p1Credits.Name3);
    $("#P1Credit4").text(p1Credits.Name4);
    $("#P1Credit5").text(p1Credits.Name5);
});

$("#navHPic2").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P2);
    $("#P1Title").text(projectTiles.P2);
    $("#P1Desc").text(projectDescriptions.P2);
    $("#P1Credit1").text(p2Credits.Name1);
    $("#P1Credit2").text(p2Credits.Name2);
    $("#P1Credit3").text(p2Credits.Name3);
    $("#P1Credit4").text(p2Credits.Name4);
    $("#P1Credit5").text(p2Credits.Name5);
});

$("#navHPic3").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P3);
    $("#P1Title").text(projectTiles.P3);
    $("#P1Desc").text(projectDescriptions.P3);
    $("#P1Credit1").text(p3Credits.Name1);
    $("#P1Credit2").text(p3Credits.Name2);
    $("#P1Credit3").text(p3Credits.Name3);
    $("#P1Credit4").text(p3Credits.Name4);
    $("#P1Credit5").text(p3Credits.Name5);
});

$("#navHPic4").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P4);
    $("#P1Title").text(projectTiles.P4);
    $("#P1Desc").text(projectDescriptions.P4);
    $("#P1Credit1").text(p4Credits.Name1);
    $("#P1Credit2").text(p4Credits.Name2);
    $("#P1Credit3").text(p4Credits.Name3);
    $("#P1Credit4").text(p4Credits.Name4);
    $("#P1Credit5").text(p4Credits.Name5);
});

$("#navHPic5").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P5);
    $("#P1Title").text(projectTiles.P5);
    $("#P1Desc").text(projectDescriptions.P5);
    $("#P1Credit1").text(p5Credits.Name1);
    $("#P1Credit2").text(p5Credits.Name2);
    $("#P1Credit3").text(p5Credits.Name3);
    $("#P1Credit4").text(p5Credits.Name4);
    $("#P1Credit5").text(p5Credits.Name5);
});

$("#navHPic6").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P6);
    $("#P1Title").text(projectTiles.P6);
    $("#P1Desc").text(projectDescriptions.P6);
    $("#P1Credit1").text(p6Credits.Name1);
    $("#P1Credit2").text(p6Credits.Name2);
    $("#P1Credit3").text(p6Credits.Name3);
    $("#P1Credit4").text(p6Credits.Name4);
    $("#P1Credit5").text(p6Credits.Name5);
});

$("#navHPic7").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P7);
    $("#P1Title").text(projectTiles.P7);
    $("#P1Desc").text(projectDescriptions.P7);
    $("#P1Credit1").text(p7Credits.Name1);
    $("#P1Credit2").text(p7Credits.Name2);
    $("#P1Credit3").text(p7Credits.Name3);
    $("#P1Credit4").text(p7Credits.Name4);
    $("#P1Credit5").text(p7Credits.Name5);
});

$("#navHPic8").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P8);
    $("#P1Title").text(projectTiles.P8);
    $("#P1Desc").text(projectDescriptions.P8);
    $("#P1Credit1").text(p8Credits.Name1);
    $("#P1Credit2").text(p8Credits.Name2);
    $("#P1Credit3").text(p8Credits.Name3);
    $("#P1Credit4").text(p8Credits.Name4);
    $("#P1Credit5").text(p8Credits.Name5);
});

$("#navHPic9").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P9);
    $("#P1Title").text(projectTiles.P9);
    $("#P1Desc").text(projectDescriptions.P9);
    $("#P1Credit1").text(p9Credits.Name1);
    $("#P1Credit2").text(p9Credits.Name2);
    $("#P1Credit3").text(p9Credits.Name3);
    $("#P1Credit4").text(p9Credits.Name4);
    $("#P1Credit5").text(p9Credits.Name5);
});



/* $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 400) {
        $("#navContent").fadeIn(200).css("display","flex");
    }

    if (height  < 400) {
        $("#navContent").fadeOut(200);
    }
}); */

$("#ugh").click(function() {
    $("#navContent").fadeToggle(200);
    $("#mobileToggle").fadeToggle(200);
});