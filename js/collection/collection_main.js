$(document).ready(function () {

    
    $('.c_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '50px',

    });
    //slide img
    $(".c_img").hover(function () {
        $(this).find("button").css("opacity", "1").css("top", "70%");
        $(this).find(".c_img-over").css("opacity", "1").css("transition", "all 1s ease");
        $(".c_img button").css({
            backgroundColor: "#ffffff",
            color: "#333333",
            transition: "all 1s ease"
        });

    }, function () {
        $(this).find("button").css("opacity", "0").css("top", "80%");
        $(this).find(".c_img-over").css("opacity", "0");
    });


    window.addEventListener("scroll", scrollevent1);

    function scrollevent1() {
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            $(".men_c").css({
                marginTop: "0",
                opacity: "1",
                transition: "all 1s ease"
            });

            $(".women_c").css({
                marginTop: "0",
                opacity: "1",
                transition: "all 1s ease"
            })

        } else {
            $(".men_c").css({
                marginTop: "30px",
                opacity: "0"
            });

            $(".women_c").css({
                marginTop: "30px",
                opacity: "0"
            });
        }
    }

    window.addEventListener("scroll", scrollevent2);

    function scrollevent2() {
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            document.querySelector(".demand:nth-child(1)").style.top = "0";
            document.querySelector(".demand:nth-child(1)").style.opacity = "1";
            document.querySelector(".demand:nth-child(1)").style.transition = "all 1s ease";

            document.querySelector(".demand:nth-child(2)").style.top = "0";
            document.querySelector(".demand:nth-child(2)").style.opacity = "1";
            document.querySelector(".demand:nth-child(2)").style.transition = "all 1.5s ease";

            document.querySelector(".demand:nth-child(3)").style.top = "0";
            document.querySelector(".demand:nth-child(3)").style.opacity = "1";
            document.querySelector(".demand:nth-child(3)").style.transition = "all 2s ease";

            document.querySelector(".demand:nth-child(4)").style.top = "0";
            document.querySelector(".demand:nth-child(4)").style.opacity = "1";
            document.querySelector(".demand:nth-child(4)").style.transition = "all 2.5s ease";

            document.querySelector(".demand:nth-child(5)").style.top = "0";
            document.querySelector(".demand:nth-child(5)").style.opacity = "1";
            document.querySelector(".demand:nth-child(5)").style.transition = "all 3s ease";
        } else {
            document.querySelector(".demand:nth-child(1)").style.top = "40px";
            document.querySelector(".demand:nth-child(1)").style.opacity = "0";
            document.querySelector(".demand:nth-child(1)").style.transition = "all 1s ease";

            document.querySelector(".demand:nth-child(2)").style.top = "50px";
            document.querySelector(".demand:nth-child(2)").style.opacity = "0";
            document.querySelector(".demand:nth-child(2)").style.transition = "all 1s ease";

            document.querySelector(".demand:nth-child(3)").style.top = "60px";
            document.querySelector(".demand:nth-child(3)").style.opacity = "0";
            document.querySelector(".demand:nth-child(3)").style.transition = "all 1s ease";

            document.querySelector(".demand:nth-child(4)").style.top = "70px";
            document.querySelector(".demand:nth-child(4)").style.opacity = "0";
            document.querySelector(".demand:nth-child(4)").style.transition = "all 1s ease";

            document.querySelector(".demand:nth-child(5)").style.top = "80px";
            document.querySelector(".demand:nth-child(5)").style.opacity = "0";
            document.querySelector(".demand:nth-child(5)").style.transition = "all 1s ease";
        }
    };



    window.addEventListener("scroll", scrollevent3);

    function scrollevent3() {
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            document.querySelector(".main4_bg").style.opacity = "1";
            document.querySelector(".main4_bg").style.transition = "all 1s ease";
            $(".demand p").css("color", "#ffffff").css("transition", "all 1s ease");
            $(".demand:nth-child(1) img").attr("src", "images/collection/re1_over.png");
            $(".demand:nth-child(2) img").attr("src", "images/collection/re2_over.png");
            $(".demand:nth-child(3) img").attr("src", "images/collection/re3_over.png");
            $(".demand:nth-child(4) img").attr("src", "images/collection/re4_over.png");
            $(".demand:nth-child(5) img").attr("src", "images/collection/re5_over.png");

        } else {
            document.querySelector(".main4_bg").style.opacity = "0";
            document.querySelector(".main4_bg").style.transition = "all 1s ease";
            $(".demand p").css("color", "#333333").css("transition", "all 1s ease");
            $(".demand:nth-child(1) img").attr("src", "images/collection/re1.png");
            $(".demand:nth-child(2) img").attr("src", "images/collection/re2.png");
            $(".demand:nth-child(3) img").attr("src", "images/collection/re3.png");
            $(".demand:nth-child(4) img").attr("src", "images/collection/re4.png");
            $(".demand:nth-child(5) img").attr("src", "images/collection/re5.png");
        }

    }
    //여기 수정해야
    window.addEventListener("scroll", scrollevent4);

    function scrollevent4() {
        var y = $(document).scrollTop();
        var circle = $(".circle_wrap span");
        if (y > 3300) {
            $(".circle_wrap span").stop().fadeIn(1000);
            circle.eq(0).css("background-color", "#000000").css("opacity", "0.3");
            circle.eq(1).css("background-color", "#000000").css("opacity", "0.4");

            circle.eq(2).css("background-color", "#000000").css("opacity", "0.5");

            circle.eq(3).css("background-color", "#000000").css("opacity", "0.8");
            circle.css("transition", "all 1s linear");


            $(".main5_txt h3").css("color", "#ffffff").css("transition", "all 1s ease");

            $(".main5_txt p").css("color", "#ffffff").css("transition", "all 1s ease");
        } else {
            $(".circle_wrap span").css("background-color", "").css("opacity", "");
            $(".main5_txt h3").css("color", "black");
            $(".main5_txt p").css("color", "black");
            $(".circle_wrap span").css("background-color", "transparent");
        }
    }


    $(".main6").hide();
    window.addEventListener("scroll", scrollevent5);

    function scrollevent5() {
        if ($(document).scrollTop() > 3550) {
            $(".main6").slideDown(1000);
        }
    }

}); //end
