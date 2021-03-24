$(document).ready(function () {

    //main2_img p img
    $(".m2_img-wrap").hover(function () {
        $(this).css({
            transform: "scale(1.02)",
            boxShadow: "1px 5px 10px #666666",
            transition: "all 0.3s ease"
        }, 500);
    }, function () {
        $(this).css({
            transform: "",
            boxShadow: ""
        }, 500);
    });

    $(".box_wrap").hover(function () {
        $(this).css({
            transform: "scale(1.03)",
            boxShadow: "1px 10px 20px lightgrey",
            transition: "all 0.3s ease"
        });
    }, function () {
        $(this).css({
            transform: "scale(1)",
            boxShadow: ""
        });
    });


    //slide img hover
    $(".img_box-over").hide();
    $(".img_box p").css("opacity", "0");
    $(".img_box").hover(function () {
        $(".img_box-over", this).stop().fadeIn(500);
        $(this).find("p").stop().animate({
            opacity: "1",
            top: "50%"
        }, 500);
    }, function () {
        $(".img_box-over", this).stop().fadeOut(500);
        $(this).find("p").stop().animate({
            opacity: "0",
            top: "60%"
        }, 500);
    });

    window.addEventListener("scroll",scrollevent1);
    function scrollevent1(){
        if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            document.querySelector(".main3_wrap").style.width = "1880px";
            document.querySelector(".main3_wrap").style.height = "990px";
            document.querySelector(".main3_wrap").style.transition = "all 2s ease";
            document.querySelector(".main3_wrap-over").style.opacity = "1";
            document.querySelector(".main3_wrap-over").style.transition = "all 2s ease";
            document.querySelector(".main3_wrap h3").style.opacity = "1";
            document.querySelector(".main3_wrap h3").style.transition = "all 2s ease";
            document.querySelector(".main3_wrap p:nth-of-type(2)").style.opacity = "1";
            document.querySelector(".main3_wrap p:nth-of-type(2)").style.transition = "all 2s ease";
            document.querySelector(".main3_wrap p:nth-of-type(3)").style.opacity = "1";
            document.querySelector(".main3_wrap p:nth-of-type(3)").style.transition = "all 2.7s ease";
        } else {
            document.querySelector(".main3_wrap").style.width = "1000px";
            document.querySelector(".main3_wrap").style.height = "450px";
            document.querySelector(".main3_wrap-over").style.opacity = "0";
            document.querySelector(".main3_wrap h3").style.opacity = "0";
            document.querySelector(".main3_wrap p:nth-of-type(2)").style.opacity = "0";
            document.querySelector(".main3_wrap p:nth-of-type(3)").style.opacity = "0";
        }
    } //scrollevent1 end

    window.addEventListener("scroll",scrollevent2);
    function scrollevent2() {
        if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
            document.querySelector(".main5_wrap").style.width = "1880px";
            document.querySelector(".main5_wrap").style.height = "990px";
            document.querySelector(".main5_wrap").style.transition = "all 2s ease";
            document.querySelector(".main5_wrap-over").style.opacity = "1";
            document.querySelector(".main5_wrap-over").style.transition = "all 2s ease";
            document.querySelector(".main5_wrap h3").style.opacity = "1";
            document.querySelector(".main5_wrap h3").style.transition = "all 2s ease";
            document.querySelector(".main5_wrap p:nth-of-type(2)").style.opacity = "1";
            document.querySelector(".main5_wrap p:nth-of-type(2)").style.transition = "all 2s ease";
            document.querySelector(".main5_wrap p:nth-of-type(3)").style.opacity = "1";
            document.querySelector(".main5_wrap p:nth-of-type(3)").style.transition = "all 2.7s ease";
        } else {
            document.querySelector(".main5_wrap").style.width = "1000px";
            document.querySelector(".main5_wrap").style.height = "450px";
            document.querySelector(".main5_wrap-over").style.opacity = "0";
            document.querySelector(".main5_wrap h3").style.opacity = "0";
            document.querySelector(".main5_wrap p:nth-of-type(2)").style.opacity = "0";
            document.querySelector(".main5_wrap p:nth-of-type(3)").style.opacity = "0";
        }
    }
    
    
//        if ($(this).scrollTop() > 2800) {
//            $(".main5_wrap").css({
//                width: "1880px",
//                height: "990px",
//                transition: "all 2s ease"
//            });
//            $(".main5_wrap-over").css("opacity", "1").css("transition", "all 1s ease");
//            $(".main5_wrap h3").css({
//                transition: "all 2s ease",
//                opacity: "1"
//            });
//            $(".main5_wrap p:nth-of-type(2)").css({
//                transition: "all 2.5s ease",
//                opacity: "1"
//            });
//            $(".main5_wrap p:nth-of-type(3)").css({
//                transition: "all 2.7s ease",
//                opacity: "1"
//            });
//        } else {
//            $(".main5_wrap").css({
//                width: "1000px",
//                height: "450px"
//            });
//            $(".main5_wrap-over").css("opacity", "0");
//            $(".main5_wrap h3").css({
//                transition: "all 2s ease",
//                opacity: "0"
//            });
//            $(".main5_wrap p:nth-of-type(2)").css({
//                transition: "all 2.5s ease",
//                opacity: "0"
//            });
//            $(".main5_wrap p:nth-of-type(3)").css({
//                transition: "all 2.7s ease",
//                opacity: "0"
//            });
//        }
//    });

    //slide
    var i = 0;
    var num = $(".img_box").length; //8
    $("p.prev").click(function () {
        $(".next").css("opacity", "1");
        if (i > 0) {
            i--;
            var move = -437 * i;
            $(".img_slide").stop().animate({
                left: move
            }, 500);
        } else {
            $(this).css("opacity", "0.5");
            false;
        }
    });

    var i = 0;
    var num = $(".img_box").length;
    $(".next").click(function () {
        $(".prev").css("opacity", "1");
        if (i < num - 4) {
            i++;
            var move = -437 * i;
            $(".img_slide").stop().animate({
                left: move
            }, 500);
            //$(".b_right").css("opacity","1");
        } else {
            false;
            $(this).css("opacity", "0.5");
        }
    });


}); //end
