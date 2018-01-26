/*function showMenu() {
  $("#MenuMaster").fadeToggle(200);
  $("#projectDetail").fadeToggle(200);
};*/

Object.values(projectTiles);
Object.values(projectDescriptions);
Object.values(p1Credits);

const tilt = $('.js-tilt').tilt();

//Initializing pages
$(document).ready(function() {
    $("#pageBG").hide();
});
$("a").click(function() {
$("#pageBG").show();
});
$("img").click(function() {
$("#pageBG").show();
});



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



//5 Dollar Challenge

$("#hPic1").click(function() {
    
    

    $("#P1Accordian").collapse('hide');

    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    
    

    $("#P1TitleC").text(projectTiles.P1);
    $("#P1Title").text(projectTiles.P1);
    $("#P1TitleB").text(projectTiles.P1);
    $("#P1Desc").text(projectDescriptions.P1);
    $("#P1Credit1").text(p1Credits.Name1);
    $("#P1Credit2").text(p1Credits.Name2);
    $("#P1Credit3").text(p1Credits.Name3);
    $("#P1Credit4").text(p1Credits.Name4);
    $("#P1Credit5").text(p1Credits.Name5);
    document.getElementById("P1Link").href = "http://5dollarchallenge.localground.org";

});

//GenXYZ

$("#hPic2").click(function() {
    $("#P1Accordian").collapse('hide');
    
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);

    $("#P1TitleC").text(projectTiles.P2);
    $("#P1Title").text(projectTiles.P2);
    $("#P1TitleB").text(projectTiles.P2);
    $("#P1Desc").text(projectDescriptions.P2);
    $("#P1Credit1").text(p2Credits.Name1);
    $("#P1Credit2").text(p2Credits.Name2);
    $("#P1Credit3").text(p2Credits.Name3);
    $("#P1Credit4").text(p2Credits.Name4);
    $("#P1Credit5").text(p2Credits.Name5);
    document.getElementById("P1Link").href = "https://yri.youthradio.org/XYZ/";

    $("#pageBG").css({
        'background-color': '#d9eef8'
    }, 500);
});

//Mood Ring

$("#hPic3").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P3);
    $("#P1Title").text(projectTiles.P3);
    $("#P1TitleB").text(projectTiles.P3);
    $("#P1Desc").text(projectDescriptions.P3);
    $("#P1Credit1").text(p3Credits.Name1);
    $("#P1Credit2").text(p3Credits.Name2);
    $("#P1Credit3").text(p3Credits.Name3);
    $("#P1Credit4").text(p3Credits.Name4);
    $("#P1Credit5").text(p3Credits.Name5);
    document.getElementById("P1Link").href = "https://play.google.com/store/apps/details?id=appinventor.ai_innovation.youthradio_moodring&hl=en";

    $("#pageBG").css({
        'background-color': '#f5d1dc'
    }, 500);
});

//Fake News

$("#hPic4").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P4);
    $("#P1Title").text(projectTiles.P4);
    $("#P1TitleB").text(projectTiles.P4);
    $("#P1Desc").text(projectDescriptions.P4);
    $("#P1Credit1").text(p4Credits.Name1);
    $("#P1Credit2").text(p4Credits.Name2);
    $("#P1Credit3").text(p4Credits.Name3);
    $("#P1Credit4").text(p4Credits.Name4);
    $("#P1Credit5").text(p4Credits.Name5);
    document.getElementById("P1Link").href = "https://yri.youthradio.org/dontgetfaked/";

    $("#pageBG").css({
        'background-color': '#ebdfe8'
    }, 500);
});

//Little Rock 9

$("#hPic5").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P5);
    $("#P1Title").text(projectTiles.P5);
    $("#P1TitleB").text(projectTiles.P5);
    $("#P1Desc").text(projectDescriptions.P5);
    $("#P1Credit1").text(p5Credits.Name1);
    $("#P1Credit2").text(p5Credits.Name2);
    $("#P1Credit3").text(p5Credits.Name3);
    $("#P1Credit4").text(p5Credits.Name4);
    $("#P1Credit5").text(p5Credits.Name5);
    document.getElementById("P1Link").href = "https://yri.youthradio.org/littlerock9/";

    $("#pageBG").css({
        'background-color': '#f3ddee'
    }, 500);
});

//Run For Prez

$("#hPic6").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P6);
    $("#P1Title").text(projectTiles.P6);
    $("#P1TitleB").text(projectTiles.P6);
    $("#P1Desc").text(projectDescriptions.P6);
    $("#P1Credit1").text(p6Credits.Name1);
    $("#P1Credit2").text(p6Credits.Name2);
    $("#P1Credit3").text(p6Credits.Name3);
    $("#P1Credit4").text(p6Credits.Name4);
    $("#P1Credit5").text(p6Credits.Name5);
    document.getElementById("P1Link").href = "https://play.google.com/store/apps/details?id=appinventor.ai_innovation.Run4Prez";

    $("#pageBG").css({
        'background-color': '#e1f0f1'
    }, 500);
});

//Unlocked

$("#hPic7").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P7);
    $("#P1Title").text(projectTiles.P7);
    $("#P1TitleB").text(projectTiles.P7);
    $("#P1Desc").text(projectDescriptions.P7);
    $("#P1Credit1").text(p7Credits.Name1);
    $("#P1Credit2").text(p7Credits.Name2);
    $("#P1Credit3").text(p7Credits.Name3);
    $("#P1Credit4").text(p7Credits.Name4);
    $("#P1Credit5").text(p7Credits.Name5);
    document.getElementById("P1Link").href = "https://yri.youthradio.org/unlocked/";
    $("#pageBG").css({
        'background-color': '#fefefe'
    }, 500);
});

//No Excuses

$("#hPic8").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P8);
    $("#P1Title").text(projectTiles.P8);
    $("#P1TitleB").text(projectTiles.P8);
    $("#P1Desc").text(projectDescriptions.P8);
    $("#P1Credit1").text(p8Credits.Name1);
    $("#P1Credit2").text(p8Credits.Name2);
    $("#P1Credit3").text(p8Credits.Name3);
    $("#P1Credit4").text(p8Credits.Name4);
    $("#P1Credit5").text(p8Credits.Name5);
    document.getElementById("P1Link").href = "https://yri.youthradio.org/noexcuses/";

    $("#pageBG").css({
        'background-color': '#ffe0eb'
    }, 500);
});

//Fostercare

$("#hPic9").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P9);
    $("#P1Title").text(projectTiles.P9);
    $("#P1TitleB").text(projectTiles.P9);
    $("#P1Desc").text(projectDescriptions.P9);
    $("#P1Credit1").text(p9Credits.Name1);
    $("#P1Credit2").text(p9Credits.Name2);
    $("#P1Credit3").text(p9Credits.Name3);
    $("#P1Credit4").text(p9Credits.Name4);
    $("#P1Credit5").text(p9Credits.Name5);
    document.getElementById("P1Link").href = "https://youthradio.github.io/fostercare/";

    $("#pageBG").css({
        'background-color': '#f7eada'
    }, 500);
});

$("#navHPic1").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P1);
    $("#P1Title").text(projectTiles.P1);
    $("#P1TitleB").text(projectTiles.P1);
    $("#P1Desc").text(projectDescriptions.P1);
    $("#P1Credit1").text(p1Credits.Name1);
    $("#P1Credit2").text(p1Credits.Name2);
    $("#P1Credit3").text(p1Credits.Name3);
    $("#P1Credit4").text(p1Credits.Name4);
    $("#P1Credit5").text(p1Credits.Name5);
    document.getElementById("P1Link").href = "http://5dollarchallenge.localground.org";
});

$("#navHPic2").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P2);
    $("#P1Title").text(projectTiles.P2);
    $("#P1TitleB").text(projectTiles.P2);
    $("#P1Desc").text(projectDescriptions.P2);
    $("#P1Credit1").text(p2Credits.Name1);
    $("#P1Credit2").text(p2Credits.Name2);
    $("#P1Credit3").text(p2Credits.Name3);
    $("#P1Credit4").text(p2Credits.Name4);
    $("#P1Credit5").text(p2Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic3").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P3);
    $("#P1Title").text(projectTiles.P3);
    $("#P1TitleB").text(projectTiles.P3);
    $("#P1Desc").text(projectDescriptions.P3);
    $("#P1Credit1").text(p3Credits.Name1);
    $("#P1Credit2").text(p3Credits.Name2);
    $("#P1Credit3").text(p3Credits.Name3);
    $("#P1Credit4").text(p3Credits.Name4);
    $("#P1Credit5").text(p3Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic4").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P4);
    $("#P1Title").text(projectTiles.P4);
    $("#P1TitleB").text(projectTiles.P4);
    $("#P1Desc").text(projectDescriptions.P4);
    $("#P1Credit1").text(p4Credits.Name1);
    $("#P1Credit2").text(p4Credits.Name2);
    $("#P1Credit3").text(p4Credits.Name3);
    $("#P1Credit4").text(p4Credits.Name4);
    $("#P1Credit5").text(p4Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic5").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P5);
    $("#P1Title").text(projectTiles.P5);
    $("#P1TitleB").text(projectTiles.P5);
    $("#P1Desc").text(projectDescriptions.P5);
    $("#P1Credit1").text(p5Credits.Name1);
    $("#P1Credit2").text(p5Credits.Name2);
    $("#P1Credit3").text(p5Credits.Name3);
    $("#P1Credit4").text(p5Credits.Name4);
    $("#P1Credit5").text(p5Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic6").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P6);
    $("#P1Title").text(projectTiles.P6);
    $("#P1TitleB").text(projectTiles.P6);
    $("#P1Desc").text(projectDescriptions.P6);
    $("#P1Credit1").text(p6Credits.Name1);
    $("#P1Credit2").text(p6Credits.Name2);
    $("#P1Credit3").text(p6Credits.Name3);
    $("#P1Credit4").text(p6Credits.Name4);
    $("#P1Credit5").text(p6Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic7").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P7);
    $("#P1Title").text(projectTiles.P7);
    $("#P1TitleB").text(projectTiles.P7);
    $("#P1Desc").text(projectDescriptions.P7);
    $("#P1Credit1").text(p7Credits.Name1);
    $("#P1Credit2").text(p7Credits.Name2);
    $("#P1Credit3").text(p7Credits.Name3);
    $("#P1Credit4").text(p7Credits.Name4);
    $("#P1Credit5").text(p7Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic8").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P8);
    $("#P1Title").text(projectTiles.P8);
    $("#P1TitleB").text(projectTiles.P8);
    $("#P1Desc").text(projectDescriptions.P8);
    $("#P1Credit1").text(p8Credits.Name1);
    $("#P1Credit2").text(p8Credits.Name2);
    $("#P1Credit3").text(p8Credits.Name3);
    $("#P1Credit4").text(p8Credits.Name4);
    $("#P1Credit5").text(p8Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
});

$("#navHPic9").click(function() {
    $("#P1Accordian").collapse('hide');
    $('html, body').animate({
        scrollTop: $("#P1").offset().top
    }, 500);
    $("#P1TitleC").text(projectTiles.P9);
    $("#P1Title").text(projectTiles.P9);
    $("#P1TitleB").text(projectTiles.P9);
    $("#P1Desc").text(projectDescriptions.P9);
    $("#P1Credit1").text(p9Credits.Name1);
    $("#P1Credit2").text(p9Credits.Name2);
    $("#P1Credit3").text(p9Credits.Name3);
    $("#P1Credit4").text(p9Credits.Name4);
    $("#P1Credit5").text(p9Credits.Name5);
    document.getElementById("P1Link").href = "http://google.com";
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