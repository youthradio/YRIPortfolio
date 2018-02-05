
//Initializing pages
Object.values(projectTiles);
Object.values(projectDescriptions);
Object.values(p1Credits);
const tilt = $('.js-tilt').tilt();
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

var iterifyArr = function (arr) {
    var cur = 0;
    arr.next = (function () { return (++cur >= this.length) ? false : this[cur]; });
    arr.prev = (function () { return (--cur < 0) ? false : this[cur]; });
    arr.cur = (function () { return this[cur]; });
    return arr;
};


$("#ugh").click(function() {
    $("#navContent").fadeToggle(200);
    $("#mobileToggle").fadeToggle(200);
});

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

//Triggering functions
$("#hPic1").click(function() {
    projectOne();
});
$("#hPic2").click(function() {
    projectTwo();
});
$("#hPic3").click(function() {
    projectThree();
});
$("#hPic4").click(function() {
    projectFour();
});
$("#hPic5").click(function() {
    projectFive();
});
$("#hPic6").click(function() {
    projectSix();
});
$("#hPic7").click(function() {
    projectSeven();
});
$("#hPic8").click(function() {
    projectEight();
});
$("#hPic9").click(function() {
    projectNine();
});
$("#back").click(function() {
$('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
}

//Triggering navbar functions

$("#navHPic1").click(function() {
    projectOne();
});
$("#navHPic2").click(function() {
    projectTwo();
});
$("#navHPic3").click(function() {
    projectThree();
});
$("#navHPic4").click(function() {
    projectFour();
});
$("#navHPic5").click(function() {
    projectFive();
});
$("#navHPic6").click(function() {
    projectSix();
});
$("#navHPic7").click(function() {
    projectSeven();
});
$("#navHPic8").click(function() {
    projectEight();
});
$("#navHPic9").click(function() {
    projectNine();
});

//Loading functions into array
$(document).ready(function() {

/*var projectArray = [
    projectOne, projectTwo,
    projectThree, projectFour,
    projectFive, projectSix,
    projectSeven, projectEight,
    projectNine];

    iterifyArr(projectArray);

    
    console.log(projectArray);
    
    $("#prevPro").click(function() {

    console.log(projectArray.prev());
    projectArray.prev();

    });

    $("#nextPro").click(function() {

    console.log(projectArray.next());
    projectArray.next();
    });*/

});







//Storing functions

//5 Dollar Challenge

var projectOne = function() {
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

    $("#pageBG").css({
        'background-color': '#f5d1dc'
    }, 500);

};

//GenXYZ
var projectTwo = function() {
    
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
};


//Mood Ring
var projectThree = function() {
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
};

//Fake News
var projectFour = function() {
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
};

//Little Rock 9
var projectFive = function() {
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
};


//Run For Prez
var projectSix = function() {
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
};

//Unlocked
var projectSeven = function() {
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
};

//No Excuses
var projectEight = function() {
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
};

//Fostercare
var projectNine = function() {
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
};


$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 400) {
        $("#back").fadeIn(200).css("display","flex");
    }

    if (height  < 400) {
        $("#back").fadeOut(200);
    }
}); 
